// ---------------- species-data.js ----------------
// Datos de especies y lógica de puntuación climática, compartidos entre
// index.html (radar por zonas) y mapa.html (chinchetas personales).
//
// seasonMonths: [inicio, fin] en número de mes (1-12)
// rainThreshold: mm acumulados necesarios en lookbackDays para considerar "lluvia suficiente"
// lagMin/lagMax: días desde la última lluvia fuerte en los que suele salir la seta
// img: nombre de archivo en Wikimedia Commons, servido vía Special:FilePath (foto real, licencia libre)

const ALL_ZONES = ['bizkaia','gipuzkoa','araba','cantabria','palencia','burgos','soria'];

const SPECIES = [
  {
    id:'boletus', name:'Boletus edulis', latin:'Boletus edulis', local:'hongo, miguel',
    habitat:'Hayedos y pinares de media-alta montaña, suelo fresco.',
    img:'Boletus_edulis_JPG9.jpg',
    seasonMonths:[9,11], tempMin:7, tempMax:25, rainThreshold:40, lookbackDays:20,
    lagMin:10, lagMax:21, windSensitive:true, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'niscalo', name:'Níscalo', latin:'Lactarius deliciosus', local:'robellón, gibelurdin',
    habitat:'Pinares (Pinus sylvestris / pinaster), suelos ácidos bien drenados.',
    img:'Lactarius_deliciosus,_Spain.jpg',
    seasonMonths:[8,12], tempMin:5, tempMax:22, rainThreshold:35, lookbackDays:20,
    lagMin:12, lagMax:24, windSensitive:false, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'perretxiko', name:'Perretxiko', latin:'Calocybe gambosa', local:'seta de San Jorge',
    habitat:'Prados y pastizales calizos, bordes de bosque.',
    img:'Fungo_Calocybe_gambosa.jpg',
    seasonMonths:[3,6], tempMin:8, tempMax:20, rainThreshold:25, lookbackDays:15,
    lagMin:7, lagMax:15, windSensitive:false, frostSensitive:true, zones: ALL_ZONES,
  },
  {
    id:'rebozuelo', name:'Rebozuelo', latin:'Cantharellus cibarius', local:'ziza hori',
    habitat:'Hayedos y robledales húmedos, hojarasca.',
    img:'Cantharellus_cibarius_1.jpg',
    seasonMonths:[6,11], tempMin:10, tempMax:24, rainThreshold:30, lookbackDays:15,
    lagMin:8, lagMax:18, windSensitive:false, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'trompeta', name:'Trompeta de los muertos', latin:'Craterellus cornucopioides', local:'trompeta negra',
    habitat:'Hojarasca de hayedos y castañares.',
    img:'Craterellus_cornucopioides_JPG1.jpg',
    seasonMonths:[8,11], tempMin:6, tempMax:20, rainThreshold:35, lookbackDays:20,
    lagMin:12, lagMax:25, windSensitive:true, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'marzuelo', name:'Marzuelo', latin:'Hygrophorus marzuolus', local:'marzuolo',
    habitat:'Pinares y abetales de montaña, ligado al deshielo.',
    img:'Hygrophorus_marzuolus-6.jpg',
    seasonMonths:[2,4], tempMin:-1, tempMax:12, rainThreshold:20, lookbackDays:15,
    lagMin:5, lagMax:15, windSensitive:false, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'oronja', name:'Oronja', latin:'Amanita caesarea', local:'huevo de rey',
    habitat:'Encinares, robledales y castañares térmicos, suelo suelto. Especie termófila, poco habitual en la vertiente atlántica más húmeda.',
    img:'Amanita_caesarea_(16489941652).jpg',
    seasonMonths:[7,10], tempMin:15, tempMax:32, rainThreshold:25, lookbackDays:12,
    lagMin:5, lagMax:12, windSensitive:false, frostSensitive:false,
    zones: ['araba','burgos','soria','cantabria','palencia'],
  },
  {
    id:'senderuela', name:'Senderuela', latin:'Marasmius oreades', local:'seta de carrerilla',
    habitat:'Prados, pastizales y bordes de camino, formando "corros de brujas".',
    img:'Marasmius_oreades._Fairy_ring_Champignon_(36235414290).jpg',
    seasonMonths:[4,11], tempMin:8, tempMax:27, rainThreshold:15, lookbackDays:8,
    lagMin:4, lagMax:10, windSensitive:false, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'colmenilla', name:'Colmenilla', latin:'Morchella spp.', local:'morilla',
    habitat:'Riberas y bosques de caducifolias alteradas (chopos, fresnos, avellanos), suelo removido.',
    img:'Morchella_esculenta_2.jpg',
    seasonMonths:[3,5], tempMin:7, tempMax:18, rainThreshold:20, lookbackDays:12,
    lagMin:6, lagMax:14, windSensitive:false, frostSensitive:true, zones: ALL_ZONES,
  },
  {
    id:'parasol', name:'Parasol', latin:'Macrolepiota procera', local:'galanperna',
    habitat:'Praderas, claros de bosque y bordes de camino, suelo bien drenado.',
    img:'Macrolepiota_procera_(Hungary).jpg',
    seasonMonths:[7,11], tempMin:10, tempMax:26, rainThreshold:30, lookbackDays:15,
    lagMin:8, lagMax:18, windSensitive:false, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'boletus-aereus', name:'Boletus aereus', latin:'Boletus aereus', local:'hongo negro',
    habitat:'Encinares, robledales y castañares térmicos a pleno sol; suelo ligeramente ácido. Especie termófila, más propia del interior seco que de la costa atlántica húmeda.',
    img:'Boletus_aereus_var._mamorensis_11.jpg',
    seasonMonths:[6,10], tempMin:14, tempMax:27, rainThreshold:35, lookbackDays:18,
    lagMin:9, lagMax:18, windSensitive:true, frostSensitive:false,
    zones: ['araba','burgos','soria','cantabria','palencia'],
  },
  {
    id:'russula-virescens', name:'Russula virescens', latin:'Russula virescens', local:'gorro verde, gibelurdin',
    habitat:'Robledales, castañares y hayedos, sobre hojarasca. Especie termófila que responde rápido a tormentas de verano.',
    img:'Russula_virescens3.JPG',
    seasonMonths:[6,10], tempMin:12, tempMax:28, rainThreshold:25, lookbackDays:12,
    lagMin:5, lagMax:12, windSensitive:false, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'agaricus-campestris', name:'Champiñón silvestre', latin:'Agaricus campestris', local:'barren-gorri, larre-sulsoa',
    habitat:'Praderas y pastizales abiertos, ricos en materia orgánica; a menudo en corros.',
    img:'Agaricus_campestris_051011A.JPG',
    seasonMonths:[4,11], tempMin:8, tempMax:24, rainThreshold:20, lookbackDays:10,
    lagMin:4, lagMax:10, windSensitive:false, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'hydnum-repandum', name:'Lengua de vaca', latin:'Hydnum repandum', local:'gamuza, lengua de gato',
    habitat:'Bosques mixtos de caducifolias y coníferas, suelo ácido. Muy resistente al frío, aguanta heladas suaves.',
    img:'Hydnum_repandum_semmelstoppelpilz.jpg',
    seasonMonths:[8,12], tempMin:-2, tempMax:20, rainThreshold:30, lookbackDays:18,
    lagMin:10, lagMax:22, windSensitive:false, frostSensitive:false, zones: ALL_ZONES,
  },
  {
    id:'lepista-nebularis', name:'Pardilla', latin:'Lepista nebularis', local:'illarraka, ilarraka',
    habitat:'Bosques diversos (pino, roble, haya) y praderas con brezales; aparece tarde, a veces tras las primeras heladas.',
    img:'Clitocybe_Nebularis.JPG',
    seasonMonths:[9,12], tempMin:2, tempMax:15, rainThreshold:25, lookbackDays:15,
    lagMin:8, lagMax:20, windSensitive:false, frostSensitive:false, zones: ALL_ZONES,
  },
];

function speciesImageUrl(filename){
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=240`;
}
const BAND_COLORS = { alta:'#71805a', media:'#b98a44', baja:'#9aa08f', fuera:'#9aa08f' };
function onSpeciesImgError(imgEl, band){
  const wrap = imgEl.parentElement;
  const color = BAND_COLORS[band] || '#9aa08f';
  wrap.innerHTML = `<div class="photo-fallback" style="background:${color}">🍄</div>`;
}

// ---------------- Utilidades de fecha ----------------
function isoDate(d){ return d.toISOString().slice(0,10); }
function inSeason(range, month){
  const [a,b] = range;
  return a <= b ? (month>=a && month<=b) : (month>=a || month<=b);
}
function monthName(n){
  return ['','enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'][n];
}

// ---------------- Llamada al clima ----------------
async function fetchWeather(spot){
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${spot.lat}&longitude=${spot.lon}` +
    `&daily=precipitation_sum,temperature_2m_mean,temperature_2m_min,windspeed_10m_max` +
    `&past_days=21&forecast_days=1&timezone=Europe%2FMadrid`;
  const res = await fetch(url);
  if(!res.ok) throw new Error('No se pudo obtener el clima');
  const json = await res.json();
  const d = json.daily;
  return {
    dates: d.time,
    precip: d.precipitation_sum.map(v => v ?? 0),
    tempMean: d.temperature_2m_mean,
    tempMin: d.temperature_2m_min,
    wind: d.windspeed_10m_max,
  };
}

function todayIndex(data){
  const today = isoDate(new Date());
  let idx = data.dates.indexOf(today);
  if(idx === -1) idx = data.dates.length - 1; // fallback: usa el último día disponible
  return idx;
}

function sumLastN(arr, endIdx, n){
  let s=0;
  for(let i=Math.max(0,endIdx-n+1); i<=endIdx; i++) s += (arr[i] ?? 0);
  return s;
}
function avgLastN(arr, endIdx, n){
  let vals=[];
  for(let i=Math.max(0,endIdx-n+1); i<=endIdx; i++) if(arr[i]!=null) vals.push(arr[i]);
  if(!vals.length) return null;
  return vals.reduce((a,b)=>a+b,0)/vals.length;
}
function minLastN(arr, endIdx, n){
  let vals=[];
  for(let i=Math.max(0,endIdx-n+1); i<=endIdx; i++) if(arr[i]!=null) vals.push(arr[i]);
  return vals.length ? Math.min(...vals) : null;
}
function maxLastN(arr, endIdx, n){
  let vals=[];
  for(let i=Math.max(0,endIdx-n+1); i<=endIdx; i++) if(arr[i]!=null) vals.push(arr[i]);
  return vals.length ? Math.max(...vals) : null;
}
function daysSinceBigRain(data, endIdx, threshold, lookback){
  for(let i=endIdx; i>=Math.max(0,endIdx-lookback); i--){
    if((data.precip[i] ?? 0) >= threshold) return endIdx - i;
  }
  return null;
}

// ---------------- Puntuación por especie ----------------
function scoreSpecies(sp, data, endIdx){
  const month = new Date().getMonth()+1;
  if(!inSeason(sp.seasonMonths, month)){
    return {
      score:0, band:'fuera',
      label:'Fuera de temporada',
      verdict:`Su temporada va de ${monthName(sp.seasonMonths[0])} a ${monthName(sp.seasonMonths[1])}.`,
      accumRain:null, avgTemp:null, daysSince:null,
    };
  }

  const accumRain = sumLastN(data.precip, endIdx, sp.lookbackDays);
  const rainRatio = Math.min(accumRain / sp.rainThreshold, 1);
  const rainScore = rainRatio * 35;

  const daysSince = daysSinceBigRain(data, endIdx, 5, 21);
  let lagScore = 0, lagMsg;
  if(daysSince === null){
    lagMsg = 'No hay lluvias significativas registradas en las últimas 3 semanas.';
  } else if(daysSince < sp.lagMin){
    lagScore = 15 * (daysSince / sp.lagMin);
    lagMsg = `Aún en camino: suele tardar ${sp.lagMin}-${sp.lagMax} días tras una lluvia fuerte, van ${daysSince}.`;
  } else if(daysSince <= sp.lagMax){
    lagScore = 35;
    lagMsg = `Dentro de la ventana de brote (${sp.lagMin}-${sp.lagMax} días tras la lluvia).`;
  } else {
    lagScore = Math.max(35 - (daysSince - sp.lagMax) * 2, 0);
    lagMsg = `La ventana de esta lluvia ya pasó (hace ${daysSince} días); toca esperar un nuevo frente.`;
  }

  const avgTemp = avgLastN(data.tempMean, endIdx, 10);
  let tempScore = 0;
  if(avgTemp != null){
    if(avgTemp >= sp.tempMin && avgTemp <= sp.tempMax) tempScore = 20;
    else{
      const dist = avgTemp < sp.tempMin ? sp.tempMin - avgTemp : avgTemp - sp.tempMax;
      tempScore = Math.max(20 - dist*4, 0);
    }
  }

  let windPenalty = 0;
  if(sp.windSensitive){
    const w = maxLastN(data.wind, endIdx, 3);
    if(w != null){ if(w > 40) windPenalty = 10; else if(w > 25) windPenalty = 5; }
  }
  let frostPenalty = 0;
  if(sp.frostSensitive){
    const mt = minLastN(data.tempMin, endIdx, 5);
    if(mt != null && mt < 0) frostPenalty = 25;
  }

  let total = Math.round(rainScore + lagScore + tempScore - windPenalty - frostPenalty);
  total = Math.max(0, Math.min(100, total));

  let band, label;
  if(total >= 70){ band='alta'; label='Alta probabilidad'; }
  else if(total >= 40){ band='media'; label='Probabilidad media'; }
  else { band='baja'; label='Baja / fuera de ventana'; }

  return { score: total, band, label, verdict: lagMsg, accumRain, avgTemp, daysSince };
}
