ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11844430.850825, 3714983.921715, -11841139.059483, 3717451.025374]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ParqueIndustrialSupHa_1 = new ol.format.GeoJSON();
var features_ParqueIndustrialSupHa_1 = format_ParqueIndustrialSupHa_1.readFeatures(json_ParqueIndustrialSupHa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueIndustrialSupHa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueIndustrialSupHa_1.addFeatures(features_ParqueIndustrialSupHa_1);
var lyr_ParqueIndustrialSupHa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueIndustrialSupHa_1, 
                style: style_ParqueIndustrialSupHa_1,
                popuplayertitle: 'Parque Industrial (Sup/Ha)',
                interactive: true,
    title: 'Parque Industrial (Sup/Ha)<br />\
    <img src="styles/legend/ParqueIndustrialSupHa_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/ParqueIndustrialSupHa_1_1.png" /> 0 - 20<br />\
    <img src="styles/legend/ParqueIndustrialSupHa_1_2.png" /> 20 - 45<br />\
    <img src="styles/legend/ParqueIndustrialSupHa_1_3.png" /> 45 - 80<br />\
    <img src="styles/legend/ParqueIndustrialSupHa_1_4.png" /> 80 - 630<br />' });
var format_Intersecciones_viales_2 = new ol.format.GeoJSON();
var features_Intersecciones_viales_2 = format_Intersecciones_viales_2.readFeatures(json_Intersecciones_viales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersecciones_viales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersecciones_viales_2.addFeatures(features_Intersecciones_viales_2);
var lyr_Intersecciones_viales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersecciones_viales_2, 
                style: style_Intersecciones_viales_2,
                popuplayertitle: 'Intersecciones_viales',
                interactive: true,
                title: '<img src="styles/legend/Intersecciones_viales_2.png" /> Intersecciones_viales'
            });
var group_Insumos = new ol.layer.Group({
                                layers: [lyr_ParqueIndustrialSupHa_1,lyr_Intersecciones_viales_2,],
                                fold: 'open',
                                title: 'Insumos'});

lyr_OpenStreetMap_0.setVisible(true);lyr_ParqueIndustrialSupHa_1.setVisible(true);lyr_Intersecciones_viales_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Insumos];
lyr_ParqueIndustrialSupHa_1.set('fieldAliases', {'SHAPE_LENG': 'Longitud', 'SHAPE_AREA': 'Area', 'ID_COLO': 'ID_COLO', 'NOMBRE': 'NOMBRE', 'RESCATE': 'RESCATE', 'TIPO': 'Tipología', 'Área (Ha)': 'Superficie', });
lyr_Intersecciones_viales_2.set('fieldAliases', {'FID_Export': 'Identificador', });
lyr_ParqueIndustrialSupHa_1.set('fieldImages', {'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'ID_COLO': 'TextEdit', 'NOMBRE': 'TextEdit', 'RESCATE': 'TextEdit', 'TIPO': 'TextEdit', 'Área (Ha)': 'TextEdit', });
lyr_Intersecciones_viales_2.set('fieldImages', {'FID_Export': 'TextEdit', });
lyr_ParqueIndustrialSupHa_1.set('fieldLabels', {'SHAPE_LENG': 'hidden field', 'SHAPE_AREA': 'hidden field', 'ID_COLO': 'hidden field', 'NOMBRE': 'header label - always visible', 'RESCATE': 'hidden field', 'TIPO': 'inline label - always visible', 'Área (Ha)': 'inline label - always visible', });
lyr_Intersecciones_viales_2.set('fieldLabels', {'FID_Export': 'inline label - always visible', });
lyr_Intersecciones_viales_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});