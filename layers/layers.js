var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_bangunan_1 = new ol.format.GeoJSON();
var features_bangunan_1 = format_bangunan_1.readFeatures(json_bangunan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_1.addFeatures(features_bangunan_1);
var lyr_bangunan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bangunan_1, 
                style: style_bangunan_1,
                interactive: true,
                title: '<img src="styles/legend/bangunan_1.png" /> bangunan'
            });
var format_industri_2 = new ol.format.GeoJSON();
var features_industri_2 = format_industri_2.readFeatures(json_industri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industri_2.addFeatures(features_industri_2);
var lyr_industri_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_industri_2, 
                style: style_industri_2,
                interactive: true,
                title: '<img src="styles/legend/industri_2.png" /> industri'
            });
var format_lahankosong_3 = new ol.format.GeoJSON();
var features_lahankosong_3 = format_lahankosong_3.readFeatures(json_lahankosong_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahankosong_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahankosong_3.addFeatures(features_lahankosong_3);
var lyr_lahankosong_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lahankosong_3, 
                style: style_lahankosong_3,
                interactive: true,
                title: '<img src="styles/legend/lahankosong_3.png" /> lahan kosong'
            });
var format_mangrove_4 = new ol.format.GeoJSON();
var features_mangrove_4 = format_mangrove_4.readFeatures(json_mangrove_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mangrove_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mangrove_4.addFeatures(features_mangrove_4);
var lyr_mangrove_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mangrove_4, 
                style: style_mangrove_4,
                interactive: true,
                title: '<img src="styles/legend/mangrove_4.png" /> mangrove'
            });
var format_pemukimanteartur_5 = new ol.format.GeoJSON();
var features_pemukimanteartur_5 = format_pemukimanteartur_5.readFeatures(json_pemukimanteartur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukimanteartur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukimanteartur_5.addFeatures(features_pemukimanteartur_5);
var lyr_pemukimanteartur_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukimanteartur_5, 
                style: style_pemukimanteartur_5,
                interactive: true,
                title: '<img src="styles/legend/pemukimanteartur_5.png" /> pemukiman teartur'
            });
var format_pemukimantidakteratur_6 = new ol.format.GeoJSON();
var features_pemukimantidakteratur_6 = format_pemukimantidakteratur_6.readFeatures(json_pemukimantidakteratur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukimantidakteratur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukimantidakteratur_6.addFeatures(features_pemukimantidakteratur_6);
var lyr_pemukimantidakteratur_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukimantidakteratur_6, 
                style: style_pemukimantidakteratur_6,
                interactive: true,
                title: '<img src="styles/legend/pemukimantidakteratur_6.png" /> pemukiman tidak teratur'
            });
var format_sawah_7 = new ol.format.GeoJSON();
var features_sawah_7 = format_sawah_7.readFeatures(json_sawah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_7.addFeatures(features_sawah_7);
var lyr_sawah_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sawah_7, 
                style: style_sawah_7,
                interactive: true,
                title: '<img src="styles/legend/sawah_7.png" /> sawah'
            });
var format_tambak_8 = new ol.format.GeoJSON();
var features_tambak_8 = format_tambak_8.readFeatures(json_tambak_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambak_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambak_8.addFeatures(features_tambak_8);
var lyr_tambak_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tambak_8, 
                style: style_tambak_8,
                interactive: true,
                title: '<img src="styles/legend/tambak_8.png" /> tambak'
            });
var format_waduk_9 = new ol.format.GeoJSON();
var features_waduk_9 = format_waduk_9.readFeatures(json_waduk_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_9.addFeatures(features_waduk_9);
var lyr_waduk_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waduk_9, 
                style: style_waduk_9,
                interactive: true,
                title: '<img src="styles/legend/waduk_9.png" /> waduk'
            });
var format_Merged_10 = new ol.format.GeoJSON();
var features_Merged_10 = format_Merged_10.readFeatures(json_Merged_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merged_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merged_10.addFeatures(features_Merged_10);
var lyr_Merged_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Merged_10, 
                style: style_Merged_10,
                interactive: true,
                title: '<img src="styles/legend/Merged_10.png" /> Merged'
            });
var format_PL_11 = new ol.format.GeoJSON();
var features_PL_11 = format_PL_11.readFeatures(json_PL_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL_11.addFeatures(features_PL_11);
var lyr_PL_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PL_11, 
                style: style_PL_11,
                interactive: true,
    title: 'PL<br />\
    <img src="styles/legend/PL_11_0.png" /> BANGUNAN<br />\
    <img src="styles/legend/PL_11_1.png" /> BANGUNAN IBADAH<br />\
    <img src="styles/legend/PL_11_2.png" /> INDUSTRI<br />\
    <img src="styles/legend/PL_11_3.png" /> LAHAN KOSONG<br />\
    <img src="styles/legend/PL_11_4.png" /> MANGROVE<br />\
    <img src="styles/legend/PL_11_5.png" /> PERMUKIMAN TERATUR<br />\
    <img src="styles/legend/PL_11_6.png" /> PERMUKIMAN TIDAK TERATUR<br />\
    <img src="styles/legend/PL_11_7.png" /> SAWAH<br />\
    <img src="styles/legend/PL_11_8.png" /> TAMBAK<br />\
    <img src="styles/legend/PL_11_9.png" /> WADUK<br />'
        });
var format_Jalan_12 = new ol.format.GeoJSON();
var features_Jalan_12 = format_Jalan_12.readFeatures(json_Jalan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_12.addFeatures(features_Jalan_12);
var lyr_Jalan_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_12, 
                style: style_Jalan_12,
                interactive: true,
                title: '<img src="styles/legend/Jalan_12.png" /> Jalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_bangunan_1.setVisible(true);lyr_industri_2.setVisible(true);lyr_lahankosong_3.setVisible(true);lyr_mangrove_4.setVisible(true);lyr_pemukimanteartur_5.setVisible(true);lyr_pemukimantidakteratur_6.setVisible(true);lyr_sawah_7.setVisible(true);lyr_tambak_8.setVisible(true);lyr_waduk_9.setVisible(true);lyr_Merged_10.setVisible(true);lyr_PL_11.setVisible(true);lyr_Jalan_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_bangunan_1,lyr_industri_2,lyr_lahankosong_3,lyr_mangrove_4,lyr_pemukimanteartur_5,lyr_pemukimantidakteratur_6,lyr_sawah_7,lyr_tambak_8,lyr_waduk_9,lyr_Merged_10,lyr_PL_11,lyr_Jalan_12];
lyr_bangunan_1.set('fieldAliases', {'id': 'id', 'bangunan 3': 'bangunan 3', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PERUBAHAN': 'PERUBAHAN', 'PL_2023': 'PL_2023', 'Luas': 'Luas', });
lyr_industri_2.set('fieldAliases', {'id': 'id', 'industri': 'industri', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_lahankosong_3.set('fieldAliases', {'id': 'id', 'lahan koso': 'lahan koso', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_mangrove_4.set('fieldAliases', {'id': 'id', 'mangrove 1': 'mangrove 1', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_pemukimanteartur_5.set('fieldAliases', {'id': 'id', 'teratur': 'teratur', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_pemukimantidakteratur_6.set('fieldAliases', {'id': 'id', 'tdkteratur': 'tdkteratur', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_sawah_7.set('fieldAliases', {'id': 'id', 'sawah': 'sawah', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_tambak_8.set('fieldAliases', {'id': 'id', 'tambak': 'tambak', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_waduk_9.set('fieldAliases', {'id': 'id', 'waduk': 'waduk', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_Merged_10.set('fieldAliases', {'id': 'id', 'bangunan 3': 'bangunan 3', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PERUBAHAN': 'PERUBAHAN', 'PL_2023': 'PL_2023', 'Luas': 'Luas', 'industri': 'industri', 'lahan koso': 'lahan koso', 'mangrove 1': 'mangrove 1', 'teratur': 'teratur', 'tdkteratur': 'tdkteratur', 'sawah': 'sawah', 'tambak': 'tambak', 'waduk': 'waduk', 'layer': 'layer', 'path': 'path', });
lyr_PL_11.set('fieldAliases', {'id': 'id', 'bangunan 3': 'bangunan 3', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PERUBAHAN': 'PERUBAHAN', 'PL_2023': 'PL_2023', 'Luas': 'Luas', 'industri': 'industri', 'lahan koso': 'lahan koso', 'mangrove 1': 'mangrove 1', 'teratur': 'teratur', 'tdkteratur': 'tdkteratur', 'sawah': 'sawah', 'tambak': 'tambak', 'waduk': 'waduk', 'layer': 'layer', 'path': 'path', });
lyr_Jalan_12.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_bangunan_1.set('fieldImages', {'id': '', 'bangunan 3': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PERUBAHAN': '', 'PL_2023': '', 'Luas': '', });
lyr_industri_2.set('fieldImages', {'id': '', 'industri': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_lahankosong_3.set('fieldImages', {'id': '', 'lahan koso': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_mangrove_4.set('fieldImages', {'id': '', 'mangrove 1': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_pemukimanteartur_5.set('fieldImages', {'id': '', 'teratur': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_pemukimantidakteratur_6.set('fieldImages', {'id': '', 'tdkteratur': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', });
lyr_sawah_7.set('fieldImages', {'id': '', 'sawah': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_tambak_8.set('fieldImages', {'id': '', 'tambak': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_waduk_9.set('fieldImages', {'id': '', 'waduk': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_Merged_10.set('fieldImages', {'id': '', 'bangunan 3': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PERUBAHAN': '', 'PL_2023': '', 'Luas': '', 'industri': '', 'lahan koso': '', 'mangrove 1': '', 'teratur': '', 'tdkteratur': '', 'sawah': '', 'tambak': '', 'waduk': '', 'layer': '', 'path': '', });
lyr_PL_11.set('fieldImages', {'id': 'TextEdit', 'bangunan 3': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'PL_2019': 'TextEdit', 'PERUBAHAN': 'TextEdit', 'PL_2023': 'TextEdit', 'Luas': 'TextEdit', 'industri': 'TextEdit', 'lahan koso': 'TextEdit', 'mangrove 1': 'TextEdit', 'teratur': 'TextEdit', 'tdkteratur': 'TextEdit', 'sawah': 'TextEdit', 'tambak': 'TextEdit', 'waduk': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Jalan_12.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_bangunan_1.set('fieldLabels', {'id': 'no label', 'bangunan 3': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PERUBAHAN': 'no label', 'PL_2023': 'no label', 'Luas': 'no label', });
lyr_industri_2.set('fieldLabels', {'id': 'no label', 'industri': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_lahankosong_3.set('fieldLabels', {'id': 'no label', 'lahan koso': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_mangrove_4.set('fieldLabels', {'id': 'no label', 'mangrove 1': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_pemukimanteartur_5.set('fieldLabels', {'id': 'no label', 'teratur': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_pemukimantidakteratur_6.set('fieldLabels', {'id': 'no label', 'tdkteratur': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_sawah_7.set('fieldLabels', {'id': 'no label', 'sawah': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_tambak_8.set('fieldLabels', {'id': 'no label', 'tambak': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_waduk_9.set('fieldLabels', {'id': 'no label', 'waduk': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_Merged_10.set('fieldLabels', {'id': 'inline label', 'bangunan 3': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'PL_2019': 'inline label', 'PERUBAHAN': 'inline label', 'PL_2023': 'inline label', 'Luas': 'inline label', 'industri': 'inline label', 'lahan koso': 'inline label', 'mangrove 1': 'inline label', 'teratur': 'inline label', 'tdkteratur': 'inline label', 'sawah': 'inline label', 'tambak': 'inline label', 'waduk': 'inline label', 'layer': 'inline label', 'path': 'inline label', });
lyr_PL_11.set('fieldLabels', {'id': 'no label', 'bangunan 3': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PERUBAHAN': 'no label', 'PL_2023': 'no label', 'Luas': 'no label', 'industri': 'no label', 'lahan koso': 'no label', 'mangrove 1': 'no label', 'teratur': 'no label', 'tdkteratur': 'no label', 'sawah': 'no label', 'tambak': 'no label', 'waduk': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Jalan_12.set('fieldLabels', {'NAMRJL': 'inline label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});