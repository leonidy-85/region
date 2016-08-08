import QtQuick 2.4
import Ubuntu.Components 1.3
import Ubuntu.Components.Pickers 1.3
import Qt.labs.settings 1.0
import QtQuick.LocalStorage 2.0
//import Region 1.0
import "db.js" as DB

MainView {
    objectName: "mainView"
    applicationName: "region"


    width: units.gu(100)
    height: units.gu(75)
    theme.name: "Ubuntu.Components.Themes.SuruDark"

    PageStack {
        id: mainStack
        Component.onCompleted: {
            push(tabs)
        }
    }
    Tabs {
        id: tabs
        Tab {
            id: main
            title: "Regions"


            Page {
                id: rootPage


                head.actions: [
                    Action {
                        iconName: "close"
                        onTriggered: {
                            settings.state = "false"
                            Qt.quit()
                        }
                        text: i18n.tr("Close aplication")
                    }

                ]
                Settings {
                    id: settings
                    property string state: "false"
                }


                Column {
                    id: col1
                    spacing: units.gu(1)
                    anchors {
                        margins: units.gu(2)
                        fill: parent
                    }


                    ListModel {
                        id: dbprimary

                        Component.onCompleted: {
                            DB.jobDB()
                            restartdb.start()
                        }
                    }


                    Timer {
                        id: restartdb
                        interval: 5000; triggeredOnStart: true; running: true; repeat: true
                        onTriggered: {
                            if (settings.state !== "true") {
                                dbprimary.clear()
                                DB.jobDB()
                                settings.state = "false"
                            }
                        }
                    }


                    OptionSelector {
                        id:os1
                        containerHeight: parent.height - col2.height *2 - units.gu(2)
                        text: i18n.tr("Select a region:")
                        model: dbprimary
                        expanded: false
                        delegate: OptionSelectorDelegate { text: code }
                    }

                    Label {
                        text: (" ")
                    }

//                    TextField {
//                        id: tcode
//                        errorHighlight: false
//                        width: parent.width
//                        height: units.gu(4)
//                        font.pixelSize: FontUtils.sizeToPixels("medium")
//                        //text: ip
//                    }


                    Label {
                        text: (" ")
                    }


                    Label {
                        id:region
                        font.pixelSize: units.gu(1.8)
                        width: parent.width
                        anchors.horizontalCenter:parent.horizontalCenter
                        text: {Text:region}
                    }


                }
                Column{
                    id: col2
                    spacing: units.gu(1)
                    anchors {
                        margins: units.gu(2)
                        bottom: parent.bottom
                        left: parent.left
                        right: parent.right
                    }


                    Row{
                        spacing: units.gu(2)
                        anchors.horizontalCenter:parent.horizontalCenter

                        Button{
                            id: light
                            color: "#068706"
                            width: units.gu(14)
                            height: units.gu(6)
                            text: i18n.tr("Region")
                            onClicked:{

                                var channel = os1.selectedIndex;
                                region.text = dbprimary.get(channel).region

                               // DB.find(lcode.text);
                            console.log(channel)

                            }
                        }
                    }
                }
            }
        }



        Tab {
            id: about
            title: i18n.tr("About")
            page: Loader {
                parent: config
                anchors.fill: parent
                source: (tabs.selectedTab === about) ? Qt.resolvedUrl("about.qml") : ""
            }
        }

    }
}



