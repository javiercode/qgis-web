var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_predios_1 = new ol.format.GeoJSON();
var features_predios_1 = format_predios_1.readFeatures(json_predios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_predios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_predios_1.addFeatures(features_predios_1);
var lyr_predios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_predios_1, 
                style: style_predios_1,
                popuplayertitle: "predios",
                interactive: true,
                title: '<img src="styles/legend/predios_1.png" /> predios'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_predios_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_predios_1];
lyr_predios_1.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'propietario': 'propietario', 'codigo': 'codigo', 'gestion': 'gestion', 'nro_titulo': 'nro_titulo', 'perimetro': 'perimetro', 'area': 'area', });
lyr_predios_1.set('fieldImages', {'fid': 'TextEdit', 'tipo': 'TextEdit', 'propietario': 'TextEdit', 'codigo': 'Range', 'gestion': '', 'nro_titulo': '', 'perimetro': '', 'area': '', });
lyr_predios_1.set('fieldLabels', {'fid': 'header label - always visible', 'tipo': 'no label', 'propietario': 'inline label - always visible', 'codigo': 'no label', 'gestion': 'no label', 'nro_titulo': 'inline label - always visible', 'perimetro': 'no label', 'area': 'no label', });
lyr_predios_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});