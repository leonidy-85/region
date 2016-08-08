function jobDB() {
    var db = LocalStorage.openDatabaseSync("regions.db", "1.0", "regions DataBase", 100000);


    db.transaction(
                function(tx) {

                    tx.executeSql("CREATE TABLE IF NOT EXISTS regions(code TEXT, region TEXT)");

                    var rs = tx.executeSql("SELECT * FROM regions");


                    if (rs.rows.length <= 0) {

                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["01", "Республика Адыгея"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["02", "Республика Башкортостан (1993-2006 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["03", "Республика Бурятия"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["04", "Республика Алтай"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["05", "Республика Дагестан"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["06", "Республика Ингушетия"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["07", "Кабардино-Балкарская Республика"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["08", "Республика Калмыкия"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["09", "Карачаево-Черкесская Республика"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["10", "Республика Карелия"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["11", "Республика Коми"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["12", "Республика Марий Эл"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["13", "Республика Мордовия"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["14", "Республика Саха (Якутия)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["15", "Республика Северная Осетия - Алания"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["16", "Республика Татарстан (1993-2006 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["17", "Республика Тыва"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["18", "Удмуртская Республика"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["19", "Республика Хакасия"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["20", "Чеченская республика (1993-2000 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["21", "Чувашская Республика"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["22", "Алтайский край"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["23", "Краснодарский край (1993-2005 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["24", "Красноярский край (1993-2009 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["25", "Приморский край (1993-2005 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["26", "Ставропольский край"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["27", "Хабаровский край"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["28", "Амурская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["29", "Архангельская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["30", "Астраханская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["31", "Белгородская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["32", "Брянская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["33", "Владимирская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["34", "Волгоградская область (1993-2012 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["35", "Вологодская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["36", "Воронежская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["37", "Ивановская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["38", "Иркутская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["39", "Калининградская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["40", "Калужская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["41", "Камчатский край"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["42", "Кемеровская область (1993-2011 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["43", "Кировская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["44", "Костромская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["45", "Курганская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["46", "Курская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["47", "Ленинградская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["48", "Липецкая область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["49", "Магаданская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["50", "Московская область (1993-2001 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["51", "Мурманская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["52", "Нижегородская область (1993-2009 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["53", "Новгородская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["54", "Новосибирская область (1993-2010 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["55", "Омская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["56", "Оренбургская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["57", "Орловская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["58", "Пензенская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["59", "Пермский край (1993-2010 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["60", "Псковская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["61", "Ростовская область (1993-2007 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["62", "Рязанская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["63", "Самарская область (1993-2007 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["64", "Саратовская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["65", "Сахалинская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["66", "Свердловская область (1993-2006 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["67", "Смоленская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["68", "Тамбовская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["69", "Тверская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["70", "Томская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["71", "Тульская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["72", "Тюменская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["73", "Ульяновская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["74", "Челябинская область (1993-2007 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["75", "Забайкальский край"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["76", "Ярославская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["77", "Москва (1993-1998 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["78", "Санкт-Петербург (1993-2004 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["79", "Еврейская автономная область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["80", "Забайкальский край"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["81", "Пермский край"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["82", "Республика Крым (с 2014 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["83", "Ненецкий автономный округ"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["84", "Красноярский край"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["85", "Иркутская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["86", "Ханты-Мансийский АО (1993-2012 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["87", "Чукотский автономный округ"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["88", "Красноярский край"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["89", "Ямало-Ненецкий автономный округ"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["90", "Московская область (2001-2006 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["91", "Калининградская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["92", "Севастополь (с 2014 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["93", "Краснодарский край (2005-2011 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["94", "Байконур"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["95", "Чеченская республика (после 2000 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["96", "Свердловская область (2006-2013 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["97", "Москва (2002-2005 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["98", "Санкт-Петербург (2004-2010 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["99", "Москва (1998-2002 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["101", "Республика Адыгея"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["102", "Республика Башкортостан (после 2006 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["103", "Республика Бурятия"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["109", "Карачаево-Черкесская Республика"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["113", "Республика Мордовия"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["116", "Республика Татарстан (после 2006 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["118", "Удмуртская Республика"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["121", "Чувашская Республика"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["123", "Краснодарский край (после 2011 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["124", "Красноярский край (после 2009 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["125", "Приморский край (после 2005 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["134", "Волгоградская область (после 2012 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["136", "Воронежская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["138", "Иркутская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["142", "Кемеровская область (после 2011 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["150", "Московская область (2006-2009 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["152", "Нижегородская область (после 2009 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["154", "Новосибирская область (после 2010 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["159", "Пермский край (после 2010 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["161", "Ростовская область (после 2007 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["163", "Самарская область (после 2007 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["164", "Саратовская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["173", "Ульяновская область"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["174", "Челябинская область (после 2007 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["177", "Москва (2005-2007 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["178", "Санкт-Петербург (после 2010 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["186", "Ханты-Мансийский АО (после 2012 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["190", "Московская область (2009-2013 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["196", "Свердловская область (после 2013 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["197", "Москва (2010-2013 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["199", "Москва (2007-2010 гг)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["750", "Московская область (после 2013 г)"]);
                        tx.executeSql('INSERT INTO regions VALUES(?, ?)', ["777", "Москва (после 2013 г)"]);





                        var rs = tx.executeSql('SELECT * FROM regions ORDER BY code ASC');
                    }

                    var index = 0;
                    if (rs.rows.length > 0) {
                        var index = 0;
                        while (index <rs.rows.length) {
                            var unidad = rs.rows.item (index);
                            dbprimary.append ({
                                                  "code": unidad.code,
                                                  "region": unidad.region});
                            index ++;
                        }
                    }
                }
                )
}

//Добавить новое значение в БД
function insert(code, region, descrregioncion) {
    var db = LocalStorage.openDatabaseSync("regions.db", "1.0", "regions DataBase", 100000);

    db.transaction(
                function(tx) {
                    // Создание таблицы если она не существует:
                    tx.executeSql("CREATE TABLE IF NOT EXISTS regions(code TEXT, region TEXT)");

                    // Создание дб
                    tx.executeSql('INSERT INTO regions VALUES(?, ?)', [code, region]);
                }
                )
}


//Функция записи по имени
function recoger(name) {
    var db = LocalStorage.openDatabaseSync("led.db", "1.0", "led DataBase", 100000);
    db.transaction(
                function(tx) {
                    var rs = tx.executeSql('SELECT * FROM led WHERE name = ?',[name]);
                    var unidad = rs.rows.item (0);

                    led.append ({
                                    "region": unidad.region});
                }
                )
}
//function find(code){
//     var db = LocalStorage.openDatabaseSync("regions.db", "1.0", "regions DataBase", 100000);

//   var res = tx.executeSql("SELECT * FROM regions WHERE (code) order by (region)")
//  // var rs =  tx.executeSql('SELECT * FROM regions ORDER BY code ASC');
//    console.log(res)
//}
