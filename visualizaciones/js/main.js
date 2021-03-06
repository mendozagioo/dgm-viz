var switcher$ = $('.graficas'),
switchTarget$ = $('#marcoVisualizaciones');
switchTarget$.attr('src', switcher$.val());
getInfoChart(document.getElementById('chartBarra').options[0].text);
var padreOption=$('#chartBarra :selected').parent().attr('label');
if (padreOption == null){
  getInfoChart(document.getElementById('chartBarra').options[0].text);
} else {
  var a = "";
  a = padreOption + ": " + document.getElementById('chartBarra').options[0].text;
  getInfoChart(a);
}

$('.graficas').on('change', function() {
        $("#compartir").hide();
        document.getElementById('marcoVisualizaciones').src = this.options[this.selectedIndex].value;
        var padreOption = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');
        if (padreOption == null){
          getInfoChart(this.options[this.selectedIndex].text);
        } else {
          var a = "";
          a = padreOption + ": " + this.options[this.selectedIndex].text;
          getInfoChart(a);
        }
    }
);

function getParent(s){
  var padreOption = $("#"+s+" option:first").parent().attr('label');
  if (padreOption == null){
    getInfoChart(document.getElementById(s).options[0].text);
  } else {
    var a = "";
    a = padreOption + ": " + document.getElementById(s).options[0].text;
    getInfoChart(a);
  }
}

function getInfoChart(var1) {
    var grafica = var1;
    var descripcion = "";
    var datos = ["", "", "", "", ""];
    switch (grafica) {
        case (grafica.match(/Población media Total.*/) || {}).input:
            descripcion = "Conjunto de indicadores que muestran un panorama general del cambio en la estructura y dinámica de la población así como en las tendencias y niveles de los fenómenos demográficos en México y las entidades federativas, entre los que encontramos esperanzas de vida, tasas demográficas, entre varios.";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/en/CONAPO/Indicadores"];
            break;
        case (grafica.match(/Nacimientos Anuales.*/) || {}).input:
            descripcion = "El más reciente ejercicio de prospectiva realizado por el Conapo ofrece insumos valiosos para describir la situación actual de la dinámica demográfica. El conocimiento de los cambios en la esperanza de vida, la estructura demográfica de la mortalidad, el potencial que ofrece el bono demográfico, el envejecimiento, los niveles y calendario de la fecundidad, son insumos para afrontar los diversos retos que en este campo se imponen a la sociedad y el Estado mexicano.";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/work/models/CONAPO/Resource/1720/1/images/1_La_Situacion_Demografica_En_Mexico.pdf"];
            break;
        case (grafica.match(/rezago.*/) || {}).input:
            descripcion = "El Índice de Rezago Social (IRS) permite ordenar las entidades federativas y municipios  de mayor a menor grado de rezago social en un momento del tiempo. <br>Es una medida en la que un solo índice agrega variables de educación, de acceso a servicios de salud, de servicios básicos en la vivienda, de calidad y espacios en la misma, y de activos en el hogar. Es decir, proporciona el resumen de cuatro carencias sociales de la medición de pobreza del CONEVAL: rezago educativo, acceso a los servicios de salud, acceso a los servicios básicos en la vivienda y la calidad y espacios en la vivienda.";
            datos = ["Índice de Rezago Social,2000-2010 (nacional,estatal,municipal, localidad y ageb)", "CONEVAL", "CSV", "https://datos.gob.mx/busca/dataset/indice-de-rezago-social20002005-y-2010-nacionalestatalmunicipal-y-localidad", "http://www.coneval.org.mx/Medicion/IRS/Paginas/Que-es-el-indice-de-rezago-social.aspx"];
            break;
        case (grafica.match(/Crecimiento.*/) || {}).input:
            descripcion = "Conjunto de indicadores que muestran un panorama general del cambio en la estructura y dinámica de la población así como en las tendencias y niveles de los fenómenos demográficos en México y las entidades federativas, entre los que encontramos esperanzas de vida, tasas demográficas, entre varios.";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/es/CONAPO/Proyecciones"]
            break;
        case (grafica.match(/Esperanza de vida.*/) || {}).input:
            descripcion = "Conjunto de indicadores que muestran un panorama general del cambio en la estructura y dinámica de la población así como en las tendencias y niveles de los fenómenos demográficos en México y las entidades federativas, entre los que encontramos esperanzas de vida, tasas demográficas, entre varios.";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/es/CONAPO/Proyecciones"]
            break;
        case (grafica.match(/Calidad general del agua.*/) || {}).input:
            descripcion = "Contiene las principales variables para medir la calidad del agua por sitio, cuenca, estado. A su vez indica el tipo de sistema ambiental que se mide.";
            datos = ["Red Nacional de Monitoreo de la Calidad de las Aguas Nacionales", "CONAGUA", "XLS", "https://datos.gob.mx/busca/dataset/red-nacional-de-monitoreo-de-la-calidad-de-las-aguas-nacionales", "http://201.116.60.25/sina/index_jquery-mobile2.html?tema=calidadAgua"]
            break;
        case (grafica.match(/Escuelas por Estado.*/) || {}).input:
            descripcion = "Contiene datos sobre escuelas a nivel estatal donde se incluye información respectiva sobre el nombre de la escuela, domicilio,  localización, tipo de sostenimiento de la escuela, así como nivel y tipo de educación.";
            datos = ["Matrícula por Institución y Entidad Federativa", "SEP", "CSV", "https://datos.gob.mx/busca/dataset/censo-de-escuelas-maestros-y-alumnos-de-educacion-basica-y-especial", "http://www.snie.sep.gob.mx/estadisticas_educativas.html "]
            break;
        case (grafica.match(/Inscritos en RETC.*/) || {}).input:
            descripcion = " La gráfica representa los porcentajes de empresas, industrias y organizaciones por estado que se encuentran inscritas en el RETC; base de datos nacional con información de sustancias contaminantes emitidas al ambiente: aire, agua, suelo y subsuelo o que son transferidas en el agua residual y/o en los residuos peligrosos.";
            datos = ["Registro de Emisiones y Transferencia de Contaminantes", "SEMARNAT", "XLS", "https://datos.gob.mx/busca/dataset/registro-de-emisiones-y-transferencia-de-contaminantes", "http://www.semarnat.gob.mx/temas/gestion-ambiental/calidad-del-aire/registro-de-emisiones-y-transferencia-de-contaminantes-retc"]
            break;
        case (grafica.match(/Llegadas a hoteles.*/) || {}).input:
            descripcion = "Con información del Sistema de Monitoreo DataTur, se reportan los principales resultados para las variables de las actividades de alojamiento en los principales destinos del país. Entre las principales variables que podrá consultar los cuartos disponibles, cuartos ocupados, porcentaje de ocupación, entre otras.";
            datos = ["Actividad Hotelera por Entidad Federativa", "SECTUR", "CSV", "https://datos.gob.mx/busca/dataset/actividad-hotelera-por-entidad-federativa", "http://www.datatur.sectur.gob.mx/SitePages/CompendioEstadistico.aspx"]
            break;
        case (grafica.match(/pueblos magicos.*/) || {}).input:
            descripcion = "Tabla de las localidades que cuentan con el nombramiento de Pueblo Mágico por Estado y año de incorporación al Programa";
            datos = ["Localidades que cuentan con el nombramiento de Pueblo Mágico", "SECTUR", "XLS", "https://datos.gob.mx/busca/dataset/localidades-que-cuentan-con-el-nombramiento-de-pueblo-magico", "http://www.gob.mx/sectur/acciones-y-programas/programa-pueblos-magicos"]
            break;
        case (grafica.match(/Población por estado.*/) || {}).input:
            descripcion = "Es una medida en la que un solo índice agrega variables de educación, de acceso a servicios de salud, de servicios básicos en la vivienda, de calidad y espacios en la misma, y de activos en el hogar. Es decir, proporciona el resumen de cuatro carencias sociales de la medición de pobreza del CONEVAL: rezago educativo, acceso a los servicios de salud, acceso a los servicios básicos en la vivienda y la calidad y espacios en la vivienda.";
            datos = ["Índice de Rezago Social,2000-2010 (nacional,estatal,municipal, localidad y ageb)", "CONEVAL", "CSV", "https://datos.gob.mx/busca/dataset/indice-de-rezago-social20002005-y-2010-nacionalestatalmunicipal-y-localidad", "http://www.coneval.gob.mx/Informes/Pobreza/Datos_abiertos/IRS/Rezago_Social_2010_localidades_DIC.txt"]
            break;
        case (grafica.match(/Residuos solidos.*/) || {}).input:
            descripcion = "Tabla con total de puntos muestreados, % eficiencia de cloración, % cobertura de vigilancia, % población con cobertura de vigilancia, % muestras aptas para consumo, % dentro y...";
            datos = ["Calidad del agua de uso y consumo humano", "COFEPRIS", "XLS", "https://datos.gob.mx/busca/dataset/indicadores-urbanos"]
            break;
        case (grafica.match(/Proyecciones de los hogares.*/) || {}).input:
            descripcion = "En esta sección se presenta la información sobre los datos, metodología y análisis de los resultados de las estimaciones demográficas para el periodo 1990-2010 y las proyecciones de población para el horizonte 2010-2030. Dicha información es necesaria y relevante para llevar a cabo la planeación demográfica, económica y social del país, al mismo tiempo que presenta una herramienta de conocimiento valiosa para estimar múltiples requerimientos futuros en servicios e infraestructura, así como otras necesidades sociales.";
            datos = ["Proyecciones de la población de México", "CONAPO", "CSV", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/es/CONAPO/Proyecciones"]
            break;
        case (grafica.match(/Proyecciones de los hogares índigenas.*/) || {}).input:
            descripcion = "En esta sección se presenta la información sobre los datos, metodología y análisis de los resultados de las estimaciones demográficas de los hogares indígenas en México para el periodo 2010-2020  Dicha información es necesaria y relevante para llevar a cabo la planeación demográfica, económica y social del país, al mismo tiempo que presenta una herramienta de conocimiento valiosa para estimar múltiples requerimientos futuros en servicios e infraestructura, así como otras necesidades sociales.";
            datos = ["Proyecciones de la población de México", "CONAPO", "CSV", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/en/CONAPO/Proyecciones_de_Hogares_Indigenas_de_Mexico_y_las_Entidades_Federativas_2010-2020"]
            break;
        case (grafica.match(/Tasa específica de fecundidad.*/) || {}).input:
            descripcion = "El más reciente ejercicio de prospectiva realizado por el Conapo ofrece insumos valiosos para describir la situación actual de la dinámica demográfica. El conocimiento de los cambios en la esperanza de vida, la estructura demográfica de la mortalidad, el potencial que ofrece el bono demográfico, el envejecimiento, los niveles y calendario de la fecundidad, son insumos para afrontar los diversos retos que en este campo se imponen a la sociedad y el Estado mexicano.";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.gob.mx/conapo/documentos/dinamica-demografica-1990-2010-y-proyecciones-de-poblacion-2010-2030"]
            break;
        case (grafica.match(/Emigrantes.*/) || {}).input:
            descripcion = "El ejercicio representa una estimación de personas que se van de la entidad, con un  horizonte de proyección para la República Mexicana  hasta 2050 y para las Entidades Federativas hasta 2030.";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/es/CONAPO/Proyecciones_de_la_migracion_interestatal_por_entidad_federativa"]
            break;
        case (grafica.match(/Inmigrantes.*/) || {}).input:
            descripcion = "Estimación de personas que llegan a la entidad donde el horizonte de proyección para la República Mexicana es hasta 2050 y para las Entidades Federativas hasta 2030.";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/es/CONAPO/Proyecciones_de_la_migracion_interestatal_por_entidad_federativa"]
            break;
        case (grafica.match(/Defunciones.*/) || {}).input:
            descripcion = "Estimación de fallecimientos en la República Mexicana (1990-2050) y Entidades Federativas (1990-2030).";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/es/CONAPO/Proyecciones"]
            break;
        case (grafica.match(/Por localidad.*/) || {}).input:
            descripcion = "Representa proyecciones de crecimiento de la población por localidad de 2010 a 2030.";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/work/models/CONAPO/Proyecciones/Datos/Bases_de_Datos/Proyecciones_Localidades/Descriptor/Diccionario_Proyecciones_por_Localidad.csv", "http://www.conapo.gob.mx/es/CONAPO/Proyecciones"]
            break;
        case (grafica.match(/Municipios 2010.*/) || {}).input:
            descripcion = "Representa proyecciones de crecimiento de la  Población a nivel Municipal del año  2010 - 2030.";
            datos = ["Proyecciones de la población de México", "CONAPO", "JSON", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/work/models/CONAPO/Proyecciones/Datos/Bases_de_Datos/Proyecciones_Municipios/Descriptor/Diccionario_Proyecciones_por_Municipios.csv", "http://www.conapo.gob.mx/es/CONAPO/Proyecciones"]
            break;
        case (grafica.match(/Centros de Trabajo.*/) || {}).input:
            descripcion = "Unidad mínima de responsabilidad que tiene como propósito general ordenar y sistematizar la información que servirá a las autoridades para tomar decisiones acerca de los recursos humanos, financieros y materiales y para llevar el control escolar de los servicios que se van a proporcionar.";
            datos = ["Catálogo de Centros de Trabajo", "SEP", "XLS", "catalogo", "https://datos.gob.mx/busca/dataset/catalogo-de-centros-de-trabajo", "http://www.rname.sep.gob.mx/SIGED/glosario/index.html"]
            break;
        case (grafica.match(/Matrícula por Institución.*/) || {}).input:
            descripcion = "Muestra información por institución educativa respecto al nivel de educación superior, la cual se se imparte después del bachillerato o de sus equivalentes. Está compuesta por la licenciatura, la especialidad, la maestría y el doctorado, así como por opciones terminales públicas o privadas.";
            datos = ["Matrícula por Institución y Entidad Federativa por clave de centro de trabajo", "SEP", "ZIP", "https://datos.gob.mx/busca/dataset/censo-de-escuelas-maestros-y-alumnos-de-educacion-basica-y-especial", "http://www.rname.sep.gob.mx/SIGED/glosario/index.html"]
            break;
        case (grafica.match(/Agua de Consumo Humano.*/) || {}).input:
            descripcion = "Tabla con total de puntos muestreados, porcentaje de eficiencia de cloración, porcentaje de cobertura de vigilancia, porcentaje de población con cobertura de vigilancia, porcentaje de muestras aptas para consumo, porcentaje dentro y arriba de NOM. Por cada Entidad Federativa.";
            datos = ["Calidad del agua de uso y consumo humano.", "COFEPRIS", "XLS", "https://datos.gob.mx/busca/dataset/calidad-del-agua-de-uso-y-consumo-humano", "http://www.cofepris.gob.mx/Paginas/Inicio.aspx"]
            break;
        case (grafica.match(/Concesiones mineras.*/) || {}).input:
            descripcion = "Las concesiones mineras otorgan a sus titulares el derecho a explotar, explotar y beneficiar todas las sustancias concesibles que se localicen dentro del lote minero que amparen.";
            datos = ["Concesiones Mineras", "SE", "CSV", "https://datos.gob.mx/busca/dataset/concesiones-mineras", "http://www.siam.economia.gob.mx/work/models/siam/Resource/Avisos/Fund_basicos_conc_min.pdf"]
            break;
        case (grafica.match(/Cultivos de tu Municipio 2015.*/) || {}).input:
            descripcion = "La gráfica de composición muestra la información cierre de los cultivos con mayor rendimiento a nivel estatal y municipal en 2015.";
            datos = ["Proveedores, Comercialización y Cultivos", "SAGARPA", "XLS", "https://datos.gob.mx/busca/dataset/proveedores-comercializacion-y-cultivos", "http://www.gob.mx/siap/acciones-y-programas/produccion-agricola-33119"]
            break;
        case (grafica.match(/Entidades Federativas.*/) || {}).input:
            descripcion = "En esta sección se presenta la información sobre los datos, metodología y análisis de los resultados de las estimaciones demográficas de los hogares indígenas en México para el periodo 2010-2020  Dicha información es necesaria y relevante para llevar a cabo la planeación demográfica, económica y social del país, al mismo tiempo que presenta una herramienta de conocimiento valiosa para estimar múltiples requerimientos futuros en servicios e infraestructura, así como otras necesidades sociales.";
            datos = ["Proyecciones de la población de México", "CONAPO", "CSV", "https://datos.gob.mx/busca/dataset/proyecciones-de-la-poblacion-de-mexico", "http://www.conapo.gob.mx/es/CONAPO/Proyecciones"]
            break;
        case (grafica.match(/Catálogo de Centros de Trabajo por Entidad - .*/) || {}).input:
            descripcion = "En esta sección se presenta la información sobre los Centros escolares de Educación Básica, Media Superior, Superior, Especial, Inicial y Formación para el Trabajo con sus características básicas relativas a su situación geográfica y administrativa.";
            datos = ["Catálogo de Centros de Trabajo", "SEP", "XLSX", "https://datos.gob.mx/busca/dataset/catalogo-de-centros-de-trabajo", "http://www.sep.gob.mx/es/sep1/directorio_de_escuelas"]
            break;
        default:
            descripcion = "";
            datos = ["", "", "", "", ""];
            break;
    }
    $("#descripcion").html("");
    $("#descripcion").append(descripcion);
    $("#titulo").html("");
    $("#titulo").html(grafica);
    $("#nombreDato").html("");
    $("#fuente").html("");
    $("#institucionDato").html("");
    $("#tipoDato").html("");
    $("#dato").attr("data-href", "");
    document.getElementById("nombreDato").innerHTML = datos[0];
    document.getElementById("institucionDato").innerHTML = datos[1];
    document.getElementById("tipoDato").innerHTML = datos[2];
    document.getElementById("fuente").innerHTML = "<i>FUENTE: <a class='fuente2' target='blank_' href='" + datos[4] + "'>" + datos[4] + "</i>";
    $("#tipoDato").attr("data-format", datos[2]);
    $("#dato").attr("data-href", datos[3]);
}

$('#dato').click(function() {
        var liga = $(this).attr("data-href");
        window.open(liga, '_blank');
    }

);
document.getElementById("btnDescargar").addEventListener("click", function() {
        var baseElement = document.getElementById('marcoVisualizaciones').contentWindow.document.querySelector('body');
        document.getElementById("output").innerHTML = (baseElement.querySelector("div").innerHTML);
        var url = document.getElementById("marcoVisualizaciones").contentWindow.location.href;
        var filename = url.match(/([^\/]+)(?=\.\w+$)/)[0];
        saveSvgAsPng(document.querySelector('svg'), filename + ".png");
    }

);
$('#tipoGrafica').on('click', function() {
        $("#compartir").hide();
    }

);
$("#btnEmbeber").click(function() {
        $("#compartir").empty();
        $("#compartir").fadeToggle("slow", function() {
            var fuente = $('#marcoVisualizaciones').contents().get(0).location.href;
            $("#compartir").text('<iframe src="' + fuente + '" frameborder="0" scrolling="no" style="overflow: hidden; width: 100%; height: 600px;"></iframe>');
        });
    }

);
