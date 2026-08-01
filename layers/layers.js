var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NAIROBIROADCOUNTY_1 = new ol.format.GeoJSON();
var features_NAIROBIROADCOUNTY_1 = format_NAIROBIROADCOUNTY_1.readFeatures(json_NAIROBIROADCOUNTY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAIROBIROADCOUNTY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAIROBIROADCOUNTY_1.addFeatures(features_NAIROBIROADCOUNTY_1);
var lyr_NAIROBIROADCOUNTY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAIROBIROADCOUNTY_1, 
                style: style_NAIROBIROADCOUNTY_1,
                popuplayertitle: 'NAIROBI ROAD COUNTY',
                interactive: true,
                title: '<img src="styles/legend/NAIROBIROADCOUNTY_1.png" /> NAIROBI ROAD COUNTY'
            });
var format_STREETLIGHTINGMETERS_2 = new ol.format.GeoJSON();
var features_STREETLIGHTINGMETERS_2 = format_STREETLIGHTINGMETERS_2.readFeatures(json_STREETLIGHTINGMETERS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREETLIGHTINGMETERS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREETLIGHTINGMETERS_2.addFeatures(features_STREETLIGHTINGMETERS_2);
var lyr_STREETLIGHTINGMETERS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STREETLIGHTINGMETERS_2, 
                style: style_STREETLIGHTINGMETERS_2,
                popuplayertitle: 'STREET LIGHTING METERS',
                interactive: true,
                title: '<img src="styles/legend/STREETLIGHTINGMETERS_2.png" /> STREET LIGHTING METERS'
            });
var format_NAIROBIWESTCOUNTY_3 = new ol.format.GeoJSON();
var features_NAIROBIWESTCOUNTY_3 = format_NAIROBIWESTCOUNTY_3.readFeatures(json_NAIROBIWESTCOUNTY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAIROBIWESTCOUNTY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAIROBIWESTCOUNTY_3.addFeatures(features_NAIROBIWESTCOUNTY_3);
var lyr_NAIROBIWESTCOUNTY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAIROBIWESTCOUNTY_3, 
                style: style_NAIROBIWESTCOUNTY_3,
                popuplayertitle: 'NAIROBI WEST COUNTY',
                interactive: true,
                title: '<img src="styles/legend/NAIROBIWESTCOUNTY_3.png" /> NAIROBI WEST COUNTY'
            });
var format_NAIROBISOUTHREAL_4 = new ol.format.GeoJSON();
var features_NAIROBISOUTHREAL_4 = format_NAIROBISOUTHREAL_4.readFeatures(json_NAIROBISOUTHREAL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAIROBISOUTHREAL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAIROBISOUTHREAL_4.addFeatures(features_NAIROBISOUTHREAL_4);
var lyr_NAIROBISOUTHREAL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAIROBISOUTHREAL_4, 
                style: style_NAIROBISOUTHREAL_4,
                popuplayertitle: 'NAIROBI SOUTH REAL',
                interactive: true,
                title: '<img src="styles/legend/NAIROBISOUTHREAL_4.png" /> NAIROBI SOUTH REAL'
            });
var format_NAIROBISOUTH3_5 = new ol.format.GeoJSON();
var features_NAIROBISOUTH3_5 = format_NAIROBISOUTH3_5.readFeatures(json_NAIROBISOUTH3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAIROBISOUTH3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAIROBISOUTH3_5.addFeatures(features_NAIROBISOUTH3_5);
var lyr_NAIROBISOUTH3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAIROBISOUTH3_5, 
                style: style_NAIROBISOUTH3_5,
                popuplayertitle: 'NAIROBI SOUTH 3',
                interactive: true,
                title: '<img src="styles/legend/NAIROBISOUTH3_5.png" /> NAIROBI SOUTH 3'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NAIROBIROADCOUNTY_1.setVisible(true);lyr_STREETLIGHTINGMETERS_2.setVisible(true);lyr_NAIROBIWESTCOUNTY_3.setVisible(true);lyr_NAIROBISOUTHREAL_4.setVisible(true);lyr_NAIROBISOUTH3_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NAIROBIROADCOUNTY_1,lyr_STREETLIGHTINGMETERS_2,lyr_NAIROBIWESTCOUNTY_3,lyr_NAIROBISOUTHREAL_4,lyr_NAIROBISOUTH3_5];
lyr_NAIROBIROADCOUNTY_1.set('fieldAliases', {'RdNum26': 'RdNum26', 'RdClass26': 'RdClass26', 'RouteDe26': 'RouteDe26', 'RdName26': 'RdName26', 'RoadCatego': 'RoadCatego', 'RoadAgency': 'RoadAgency', 'Countycode': 'Countycode', 'County': 'County', 'UrbanArea_': 'UrbanArea_', 'RdLength': 'RdLength', });
lyr_STREETLIGHTINGMETERS_2.set('fieldAliases', {'Region': 'Region', 'County': 'County', 'Sector Nam': 'Sector Nam', 'Zone Name': 'Zone Name', 'Office Nam': 'Office Nam', 'Bu': 'Bu', 'Reading Un': 'Reading Un', 'Itinerary': 'Itinerary', 'Itinerar_1': 'Itinerar_1', 'Account Nu': 'Account Nu', 'Meters': 'Meters', 'Customer N': 'Customer N', 'Supply Loc': 'Supply Loc', 'Contract S': 'Contract S', 'Terminatio': 'Terminatio', 'Customer T': 'Customer T', 'Customer C': 'Customer C', 'Last Month': 'Last Month', 'Overdue Am': 'Overdue Am', 'Debt': 'Debt', 'Credit': 'Credit', 'Total Bala': 'Total Bala', 'Max Due Da': 'Max Due Da', 'Cod Tarif': 'Cod Tarif', 'Classifica': 'Classifica', 'Deposit': 'Deposit', 'Stimaloan': 'Stimaloan', 'Wo Number': 'Wo Number', 'Wo Type': 'Wo Type', 'Wo Status': 'Wo Status', 'Wo Age Day': 'Wo Age Day', 'Y Coords': 'Y Coords', 'X Coords': 'X Coords', });
lyr_NAIROBIWESTCOUNTY_3.set('fieldAliases', {'FID': 'FID', 'Itins': 'Itins', 'Zone': 'Zone', 'Sector': 'Sector', 'County': 'County', 'Region': 'Region', 'Feeder': 'Feeder', });
lyr_NAIROBISOUTHREAL_4.set('fieldAliases', {'FID': 'FID', 'Itins': 'Itins', 'Zone': 'Zone', 'Sector': 'Sector', 'County': 'County', 'Region': 'Region', 'Feeder': 'Feeder', });
lyr_NAIROBISOUTH3_5.set('fieldAliases', {'FID': 'FID', 'Itins': 'Itins', 'Zone': 'Zone', 'Sector': 'Sector', 'County': 'County', 'Region': 'Region', 'Feeder': 'Feeder', });
lyr_NAIROBIROADCOUNTY_1.set('fieldImages', {'RdNum26': '', 'RdClass26': '', 'RouteDe26': '', 'RdName26': '', 'RoadCatego': '', 'RoadAgency': '', 'Countycode': '', 'County': '', 'UrbanArea_': '', 'RdLength': '', });
lyr_STREETLIGHTINGMETERS_2.set('fieldImages', {'Region': '', 'County': '', 'Sector Nam': '', 'Zone Name': '', 'Office Nam': '', 'Bu': '', 'Reading Un': '', 'Itinerary': '', 'Itinerar_1': '', 'Account Nu': '', 'Meters': '', 'Customer N': '', 'Supply Loc': '', 'Contract S': '', 'Terminatio': '', 'Customer T': '', 'Customer C': '', 'Last Month': '', 'Overdue Am': '', 'Debt': '', 'Credit': '', 'Total Bala': '', 'Max Due Da': '', 'Cod Tarif': '', 'Classifica': '', 'Deposit': '', 'Stimaloan': '', 'Wo Number': '', 'Wo Type': '', 'Wo Status': '', 'Wo Age Day': '', 'Y Coords': '', 'X Coords': '', });
lyr_NAIROBIWESTCOUNTY_3.set('fieldImages', {'FID': 'TextEdit', 'Itins': 'TextEdit', 'Zone': 'TextEdit', 'Sector': 'TextEdit', 'County': 'TextEdit', 'Region': 'TextEdit', 'Feeder': 'TextEdit', });
lyr_NAIROBISOUTHREAL_4.set('fieldImages', {'FID': 'TextEdit', 'Itins': 'TextEdit', 'Zone': 'TextEdit', 'Sector': 'TextEdit', 'County': 'TextEdit', 'Region': 'TextEdit', 'Feeder': 'TextEdit', });
lyr_NAIROBISOUTH3_5.set('fieldImages', {'FID': 'TextEdit', 'Itins': 'TextEdit', 'Zone': 'TextEdit', 'Sector': 'TextEdit', 'County': 'TextEdit', 'Region': 'TextEdit', 'Feeder': 'TextEdit', });
lyr_NAIROBIROADCOUNTY_1.set('fieldLabels', {'RdNum26': 'no label', 'RdClass26': 'no label', 'RouteDe26': 'no label', 'RdName26': 'no label', 'RoadCatego': 'no label', 'RoadAgency': 'no label', 'Countycode': 'no label', 'County': 'no label', 'UrbanArea_': 'no label', 'RdLength': 'no label', });
lyr_STREETLIGHTINGMETERS_2.set('fieldLabels', {'Region': 'no label', 'County': 'no label', 'Sector Nam': 'no label', 'Zone Name': 'no label', 'Office Nam': 'no label', 'Bu': 'no label', 'Reading Un': 'no label', 'Itinerary': 'no label', 'Itinerar_1': 'no label', 'Account Nu': 'no label', 'Meters': 'inline label - visible with data', 'Customer N': 'no label', 'Supply Loc': 'no label', 'Contract S': 'no label', 'Terminatio': 'no label', 'Customer T': 'no label', 'Customer C': 'no label', 'Last Month': 'no label', 'Overdue Am': 'no label', 'Debt': 'no label', 'Credit': 'no label', 'Total Bala': 'no label', 'Max Due Da': 'no label', 'Cod Tarif': 'no label', 'Classifica': 'no label', 'Deposit': 'no label', 'Stimaloan': 'no label', 'Wo Number': 'no label', 'Wo Type': 'no label', 'Wo Status': 'no label', 'Wo Age Day': 'no label', 'Y Coords': 'no label', 'X Coords': 'no label', });
lyr_NAIROBIWESTCOUNTY_3.set('fieldLabels', {'FID': 'no label', 'Itins': 'no label', 'Zone': 'no label', 'Sector': 'no label', 'County': 'inline label - visible with data', 'Region': 'no label', 'Feeder': 'no label', });
lyr_NAIROBISOUTHREAL_4.set('fieldLabels', {'FID': 'no label', 'Itins': 'no label', 'Zone': 'no label', 'Sector': 'no label', 'County': 'inline label - visible with data', 'Region': 'no label', 'Feeder': 'no label', });
lyr_NAIROBISOUTH3_5.set('fieldLabels', {'FID': 'no label', 'Itins': 'no label', 'Zone': 'no label', 'Sector': 'no label', 'County': 'inline label - visible with data', 'Region': 'no label', 'Feeder': 'no label', });
lyr_NAIROBISOUTH3_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});