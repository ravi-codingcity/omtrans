import React, { useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Scroll_Top from "../Components/Scroll_Top";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsBuildingFillCheck } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { PiMapPinArea } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const countries = [
  { value: "afghanistan", label: "Afghanistan", code: "+93" },
  { value: "albania", label: "Albania", code: "+355" },
  { value: "algeria", label: "Algeria", code: "+213" },
  { value: "andorra", label: "Andorra", code: "+376" },
  { value: "angola", label: "Angola", code: "+244" },
  { value: "argentina", label: "Argentina", code: "+54" },
  { value: "armenia", label: "Armenia", code: "+374" },
  { value: "australia", label: "Australia", code: "+61" },
  { value: "austria", label: "Austria", code: "+43" },
  { value: "azerbaijan", label: "Azerbaijan", code: "+994" },
  { value: "bahamas", label: "Bahamas", code: "+1-242" },
  { value: "bahrain", label: "Bahrain", code: "+973" },
  { value: "bangladesh", label: "Bangladesh", code: "+880" },
  { value: "barbados", label: "Barbados", code: "+1-246" },
  { value: "belarus", label: "Belarus", code: "+375" },
  { value: "belgium", label: "Belgium", code: "+32" },
  { value: "belize", label: "Belize", code: "+501" },
  { value: "benin", label: "Benin", code: "+229" },
  { value: "bhutan", label: "Bhutan", code: "+975" },
  { value: "bolivia", label: "Bolivia", code: "+591" },
  {
    value: "bosnia_and_herzegovina",
    label: "Bosnia and Herzegovina",
    code: "+387",
  },
  { value: "botswana", label: "Botswana", code: "+267" },
  { value: "brazil", label: "Brazil", code: "+55" },
  { value: "brunei", label: "Brunei", code: "+673" },
  { value: "bulgaria", label: "Bulgaria", code: "+359" },
  { value: "burkina_faso", label: "Burkina Faso", code: "+226" },
  { value: "burundi", label: "Burundi", code: "+257" },
  { value: "cambodia", label: "Cambodia", code: "+855" },
  { value: "cameroon", label: "Cameroon", code: "+237" },
  { value: "canada", label: "Canada", code: "+1" },
  { value: "cape_verde", label: "Cape Verde", code: "+238" },
  {
    value: "central_african_republic",
    label: "Central African Republic",
    code: "+236",
  },
  { value: "chad", label: "Chad", code: "+235" },
  { value: "chile", label: "Chile", code: "+56" },
  { value: "china", label: "China", code: "+86" },
  { value: "colombia", label: "Colombia", code: "+57" },
  { value: "comoros", label: "Comoros", code: "+269" },
  {
    value: "congo_democratic_republic",
    label: "Congo (Democratic Republic)",
    code: "+243",
  },
  { value: "congo_republic", label: "Congo (Republic)", code: "+242" },
  { value: "costa_rica", label: "Costa Rica", code: "+506" },
  { value: "croatia", label: "Croatia", code: "+385" },
  { value: "cuba", label: "Cuba", code: "+53" },
  { value: "cyprus", label: "Cyprus", code: "+357" },
  { value: "czech_republic", label: "Czech Republic", code: "+420" },
  { value: "denmark", label: "Denmark", code: "+45" },
  { value: "djibouti", label: "Djibouti", code: "+253" },
  { value: "dominica", label: "Dominica", code: "+1-767" },
  { value: "dominican_republic", label: "Dominican Republic", code: "+1-809" },
  { value: "ecuador", label: "Ecuador", code: "+593" },
  { value: "egypt", label: "Egypt", code: "+20" },
  { value: "el_salvador", label: "El Salvador", code: "+503" },
  { value: "equatorial_guinea", label: "Equatorial Guinea", code: "+240" },
  { value: "eritrea", label: "Eritrea", code: "+291" },
  { value: "estonia", label: "Estonia", code: "+372" },
  { value: "eswatini", label: "Eswatini", code: "+268" },
  { value: "ethiopia", label: "Ethiopia", code: "+251" },
  { value: "fiji", label: "Fiji", code: "+679" },
  { value: "finland", label: "Finland", code: "+358" },
  { value: "france", label: "France", code: "+33" },
  { value: "gabon", label: "Gabon", code: "+241" },
  { value: "gambia", label: "Gambia", code: "+220" },
  { value: "georgia", label: "Georgia", code: "+995" },
  { value: "germany", label: "Germany", code: "+49" },
  { value: "ghana", label: "Ghana", code: "+233" },
  { value: "greece", label: "Greece", code: "+30" },
  { value: "grenada", label: "Grenada", code: "+1-473" },
  { value: "guatemala", label: "Guatemala", code: "+502" },
  { value: "guinea", label: "Guinea", code: "+224" },
  { value: "guinea_bissau", label: "Guinea-Bissau", code: "+245" },
  { value: "guyana", label: "Guyana", code: "+592" },
  { value: "haiti", label: "Haiti", code: "+509" },
  { value: "honduras", label: "Honduras", code: "+504" },
  { value: "hungary", label: "Hungary", code: "+36" },
  { value: "iceland", label: "Iceland", code: "+354" },
  { value: "india", label: "India", code: "+91" },
  { value: "indonesia", label: "Indonesia", code: "+62" },
  { value: "iran", label: "Iran", code: "+98" },
  { value: "iraq", label: "Iraq", code: "+964" },
  { value: "ireland", label: "Ireland", code: "+353" },
  { value: "israel", label: "Israel", code: "+972" },
  { value: "italy", label: "Italy", code: "+39" },
  { value: "jamaica", label: "Jamaica", code: "+1-876" },
  { value: "japan", label: "Japan", code: "+81" },
  { value: "jordan", label: "Jordan", code: "+962" },
  { value: "kazakhstan", label: "Kazakhstan", code: "+7" },
  { value: "kenya", label: "Kenya", code: "+254" },
  { value: "kiribati", label: "Kiribati", code: "+686" },
  { value: "kuwait", label: "Kuwait", code: "+965" },
  { value: "kyrgyzstan", label: "Kyrgyzstan", code: "+996" },
  { value: "laos", label: "Laos", code: "+856" },
  { value: "latvia", label: "Latvia", code: "+371" },
  { value: "lebanon", label: "Lebanon", code: "+961" },
  { value: "lesotho", label: "Lesotho", code: "+266" },
  { value: "liberia", label: "Liberia", code: "+231" },
  { value: "libya", label: "Libya", code: "+218" },
  { value: "liechtenstein", label: "Liechtenstein", code: "+423" },
  { value: "lithuania", label: "Lithuania", code: "+370" },
  { value: "luxembourg", label: "Luxembourg", code: "+352" },
  { value: "madagascar", label: "Madagascar", code: "+261" },
  { value: "malawi", label: "Malawi", code: "+265" },
  { value: "malaysia", label: "Malaysia", code: "+60" },
  { value: "maldives", label: "Maldives", code: "+960" },
  { value: "mali", label: "Mali", code: "+223" },
  { value: "malta", label: "Malta", code: "+356" },
  { value: "marshall_islands", label: "Marshall Islands", code: "+692" },
  { value: "mauritania", label: "Mauritania", code: "+222" },
  { value: "mauritius", label: "Mauritius", code: "+230" },
  { value: "mexico", label: "Mexico", code: "+52" },
  { value: "micronesia", label: "Micronesia", code: "+691" },
  { value: "moldova", label: "Moldova", code: "+373" },
  { value: "monaco", label: "Monaco", code: "+377" },
  { value: "mongolia", label: "Mongolia", code: "+976" },
  { value: "montenegro", label: "Montenegro", code: "+382" },
  { value: "morocco", label: "Morocco", code: "+212" },
  { value: "mozambique", label: "Mozambique", code: "+258" },
  { value: "myanmar", label: "Myanmar", code: "+95" },
  { value: "namibia", label: "Namibia", code: "+264" },
  { value: "nauru", label: "Nauru", code: "+674" },
  { value: "nepal", label: "Nepal", code: "+977" },
  { value: "netherlands", label: "Netherlands", code: "+31" },
  { value: "new_zealand", label: "New Zealand", code: "+64" },
  { value: "nicaragua", label: "Nicaragua", code: "+505" },
  { value: "niger", label: "Niger", code: "+227" },
  { value: "nigeria", label: "Nigeria", code: "+234" },
  { value: "north_korea", label: "North Korea", code: "+850" },
  { value: "north_macedonia", label: "North Macedonia", code: "+389" },
  { value: "norway", label: "Norway", code: "+47" },
  { value: "oman", label: "Oman", code: "+968" },
  { value: "pakistan", label: "Pakistan", code: "+92" },
  { value: "palau", label: "Palau", code: "+680" },
  { value: "palestine", label: "Palestine", code: "+970" },
  { value: "panama", label: "Panama", code: "+507" },
  { value: "papua_new_guinea", label: "Papua New Guinea", code: "+675" },
  { value: "paraguay", label: "Paraguay", code: "+595" },
  { value: "peru", label: "Peru", code: "+51" },
  { value: "philippines", label: "Philippines", code: "+63" },
  { value: "poland", label: "Poland", code: "+48" },
  { value: "portugal", label: "Portugal", code: "+351" },
  { value: "qatar", label: "Qatar", code: "+974" },
  { value: "romania", label: "Romania", code: "+40" },
  { value: "russia", label: "Russia", code: "+7" },
  { value: "rwanda", label: "Rwanda", code: "+250" },
  {
    value: "saint_kitts_and_nevis",
    label: "Saint Kitts and Nevis",
    code: "+1-869",
  },
  { value: "saint_lucia", label: "Saint Lucia", code: "+1-758" },
  {
    value: "saint_vincent_and_the_grenadines",
    label: "Saint Vincent and the Grenadines",
    code: "+1-784",
  },
  { value: "samoa", label: "Samoa", code: "+685" },
  { value: "san_marino", label: "San Marino", code: "+378" },
  {
    value: "sao_tome_and_principe",
    label: "Sao Tome and Principe",
    code: "+239",
  },
  { value: "saudi_arabia", label: "Saudi Arabia", code: "+966" },
  { value: "senegal", label: "Senegal", code: "+221" },
  { value: "serbia", label: "Serbia", code: "+381" },
  { value: "seychelles", label: "Seychelles", code: "+248" },
  { value: "sierra_leone", label: "Sierra Leone", code: "+232" },
  { value: "singapore", label: "Singapore", code: "+65" },
  { value: "slovakia", label: "Slovakia", code: "+421" },
  { value: "slovenia", label: "Slovenia", code: "+386" },
  { value: "solomon_islands", label: "Solomon Islands", code: "+677" },
  { value: "somalia", label: "Somalia", code: "+252" },
  { value: "south_africa", label: "South Africa", code: "+27" },
  { value: "south_korea", label: "South Korea", code: "+82" },
  { value: "south_sudan", label: "South Sudan", code: "+211" },
  { value: "spain", label: "Spain", code: "+34" },
  { value: "sri_lanka", label: "Sri Lanka", code: "+94" },
  { value: "sudan", label: "Sudan", code: "+249" },
  { value: "suriname", label: "Suriname", code: "+597" },
  { value: "sweden", label: "Sweden", code: "+46" },
  { value: "switzerland", label: "Switzerland", code: "+41" },
  { value: "syria", label: "Syria", code: "+963" },
  { value: "taiwan", label: "Taiwan", code: "+886" },
  { value: "tajikistan", label: "Tajikistan", code: "+992" },
  { value: "tanzania", label: "Tanzania", code: "+255" },
  { value: "thailand", label: "Thailand", code: "+66" },
  { value: "togo", label: "Togo", code: "+228" },
  { value: "tonga", label: "Tonga", code: "+676" },
  {
    value: "trinidad_and_tobago",
    label: "Trinidad and Tobago",
    code: "+1-868",
  },
  { value: "tunisia", label: "Tunisia", code: "+216" },
  { value: "turkey", label: "Turkey", code: "+90" },
  { value: "turkmenistan", label: "Turkmenistan", code: "+993" },
  { value: "tuvalu", label: "Tuvalu", code: "+688" },
  { value: "uganda", label: "Uganda", code: "+256" },
  { value: "ukraine", label: "Ukraine", code: "+380" },
  {
    value: "united_arab_emirates",
    label: "United Arab Emirates",
    code: "+971",
  },
  { value: "united_kingdom", label: "United Kingdom", code: "+44" },
  { value: "united_states", label: "United States", code: "+1" },
  { value: "uruguay", label: "Uruguay", code: "+598" },
  { value: "uzbekistan", label: "Uzbekistan", code: "+998" },
  { value: "vanuatu", label: "Vanuatu", code: "+678" },
  { value: "vatican_city", label: "Vatican City", code: "+379" },
  { value: "venezuela", label: "Venezuela", code: "+58" },
  { value: "vietnam", label: "Vietnam", code: "+84" },
  { value: "yemen", label: "Yemen", code: "+967" },
  { value: "zambia", label: "Zambia", code: "+260" },
  { value: "zimbabwe", label: "Zimbabwe", code: "+263" },
];

const states = {
  india: [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Delhi",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ],
  afghanistan: ["Kabul", "Kandahar", "Herat"],
  albania: ["Tirana", "Durrës", "Vlorë"],
  algeria: ["Algiers", "Oran", "Constantine"],
  andorra: ["Andorra la Vella", "Canillo", "Encamp"],
  angola: ["Luanda", "Benguela", "Huíla"],
  argentina: ["Buenos Aires", "Córdoba", "Santa Fe"],
  armenia: ["Yerevan", "Gyumri", "Vanadzor"],
  australia: ["New South Wales", "Victoria", "Queensland"],
  austria: ["Vienna", "Salzburg", "Tyrol"],
  azerbaijan: ["Baku", "Ganja", "Sumqayit"],
  bahamas: ["New Providence", "Grand Bahama", "Abaco"],
  bahrain: ["Capital", "Muharraq", "Northern"],
  bangladesh: ["Dhaka", "Chittagong", "Khulna"],
  barbados: ["Saint Michael", "Saint Philip", "Saint James"],
  belarus: ["Minsk", "Brest", "Gomel"],
  belgium: ["Flanders", "Wallonia", "Brussels"],
  belize: ["Belize District", "Cayo District", "Toledo District"],
  benin: ["Cotonou", "Porto-Novo", "Parakou"],
  bhutan: ["Thimphu", "Paro", "Punakha"],
  bolivia: ["La Paz", "Santa Cruz", "Cochabamba"],
  bosnia_and_herzegovina: ["Sarajevo", "Banja Luka", "Mostar"],
  botswana: ["Gaborone", "Francistown", "Maun"],
  brazil: ["São Paulo", "Rio de Janeiro", "Minas Gerais"],
  brunei: ["Brunei-Muara", "Belait", "Tutong"],
  bulgaria: ["Sofia", "Plovdiv", "Varna"],
  burkina_faso: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou"],
  burundi: ["Bujumbura", "Gitega", "Ngozi"],
  cambodia: ["Phnom Penh", "Siem Reap", "Battambang"],
  cameroon: ["Yaoundé", "Douala", "Bamenda"],
  canada: ["Ontario", "Quebec", "British Columbia"],
  cape_verde: ["Praia", "Mindelo", "Espargos"],
  central_african_republic: ["Bangui", "Bambari", "Birao"],
  chad: ["N'Djamena", "Moundou", "Sarh"],
  chile: ["Santiago", "Valparaíso", "Concepción"],
  china: ["Beijing", "Shanghai", "Guangdong"],
  colombia: ["Bogotá", "Medellín", "Cali"],
  comoros: ["Moroni", "Moutsamoudou", "Fomboni"],
  congo_democratic_republic: ["Kinshasa", "Lubumbashi", "Mbuji-Mayi"],
  congo_republic: ["Brazzaville", "Pointe-Noire", "Dolisie"],
  costa_rica: ["San José", "Alajuela", "Cartago"],
  croatia: ["Zagreb", "Split", "Rijeka"],
  cuba: ["Havana", "Santiago de Cuba", "Camagüey"],
  cyprus: ["Nicosia", "Limassol", "Larnaca"],
  czech_republic: ["Prague", "Brno", "Ostrava"],
  denmark: ["Copenhagen", "Aarhus", "Odense"],
  djibouti: ["Djibouti City", "Ali Sabieh", "Tadjourah"],
  dominica: ["Saint George", "Saint Andrew", "Saint David"],
  dominican_republic: ["Santo Domingo", "Santiago", "La Romana"],
  ecuador: ["Quito", "Guayaquil", "Cuenca"],
  egypt: ["Cairo", "Alexandria", "Giza"],
  el_salvador: ["San Salvador", "Santa Ana", "San Miguel"],
  equatorial_guinea: ["Malabo", "Bata", "Ebebiyin"],
  eritrea: ["Asmara", "Keren", "Massawa"],
  estonia: ["Tallinn", "Tartu", "Narva"],
  eswatini: ["Mbabane", "Manzini", "Siteki"],
  ethiopia: ["Addis Ababa", "Dire Dawa", "Mekelle"],
  fiji: ["Suva", "Nadi", "Lautoka"],
  finland: ["Helsinki", "Espoo", "Tampere"],
  france: ["Paris", "Marseille", "Lyon"],
  gabon: ["Libreville", "Port-Gentil", "Franceville"],
  gambia: ["Banjul", "Serekunda", "Brikama"],
  georgia: ["Tbilisi", "Kutaisi", "Batumi"],
  germany: ["Berlin", "Munich", "Hamburg"],
  ghana: ["Accra", "Kumasi", "Tamale"],
  greece: ["Athens", "Thessaloniki", "Patras"],
  grenada: ["Saint George's", "Grenville", "Gouyave"],
  guatemala: ["Guatemala City", "Quetzaltenango", "Escuintla"],
  guinea: ["Conakry", "Nzérékoré", "Kankan"],
  guinea_bissau: ["Bissau", "Bafatá", "Gabu"],
  guyana: ["Georgetown", "Linden", "New Amsterdam"],
  haiti: ["Port-au-Prince", "Cap-Haïtien", "Gonaïves"],
  honduras: ["Tegucigalpa", "San Pedro Sula", "La Ceiba"],
  hungary: ["Budapest", "Debrecen", "Szeged"],
  iceland: ["Reykjavik", "Akureyri", "Keflavik"],

  indonesia: ["Jakarta", "Bali", "Sumatra"],
  iran: ["Tehran", "Mashhad", "Isfahan"],
  iraq: ["Baghdad", "Basra", "Mosul"],
  ireland: ["Dublin", "Cork", "Galway"],
  israel: ["Tel Aviv", "Jerusalem", "Haifa"],
  italy: ["Rome", "Milan", "Naples"],
  jamaica: ["Kingston", "Montego Bay", "Spanish Town"],
  japan: ["Tokyo", "Osaka", "Kyoto"],
  jordan: ["Amman", "Aqaba", "Irbid"],
  kazakhstan: ["Nur-Sultan", "Almaty", "Shymkent"],
  kenya: ["Nairobi", "Mombasa", "Kisumu"],
  kiribati: ["Tarawa", "Betio", "Bairiki"],
  kuwait: ["Kuwait City", "Hawalli", "Salmiya"],
  kyrgyzstan: ["Bishkek", "Osh", "Jalal-Abad"],
  laos: ["Vientiane", "Luang Prabang", "Pakse"],
  latvia: ["Riga", "Daugavpils", "Liepaja"],
  lebanon: ["Beirut", "Tripoli", "Sidon"],
  lesotho: ["Maseru", "Teyateyaneng", "Hlotse"],
  liberia: ["Monrovia", "Gbarnga", "Harper"],
  libya: ["Tripoli", "Benghazi", "Misrata"],
  liechtenstein: ["Vaduz", "Schaan", "Balzers"],
  lithuania: ["Vilnius", "Kaunas", "Klaipėda"],
  luxembourg: ["Luxembourg City", "Esch-sur-Alzette", "Differdange"],
  madagascar: ["Antananarivo", "Toamasina", "Antsirabe"],
  malawi: ["Lilongwe", "Blantyre", "Mzuzu"],
  malaysia: ["Kuala Lumpur", "Penang", "Sabah"],
  maldives: ["Malé", "Addu City", "Fuvahmulah"],
  mali: ["Bamako", "Sikasso", "Mopti"],
  malta: ["Valletta", "Sliema", "Birkirkara"],
  marshall_islands: ["Majuro", "Ebeye", "Jabor"],
  mauritania: ["Nouakchott", "Nouadhibou", "Kiffa"],
  mauritius: ["Port Louis", "Curepipe", "Vacoas-Phoenix"],
  mexico: ["Mexico City", "Guadalajara", "Monterrey"],
  micronesia: ["Palikir", "Weno", "Kolonia"],
  moldova: ["Chișinău", "Tiraspol", "Bălți"],
  monaco: ["Monaco-Ville", "Monte Carlo", "La Condamine"],
  mongolia: ["Ulaanbaatar", "Erdenet", "Darkhan"],
  montenegro: ["Podgorica", "Nikšić", "Herceg Novi"],
  morocco: ["Rabat", "Casablanca", "Marrakech"],
  mozambique: ["Maputo", "Beira", "Nampula"],
  myanmar: ["Yangon", "Mandalay", "Naypyidaw"],
  namibia: ["Windhoek", "Walvis Bay", "Swakopmund"],
  nauru: ["Yaren", "Anibare", "Meneng"],
  nepal: ["Kathmandu", "Pokhara", "Lalitpur"],
  netherlands: ["Amsterdam", "Rotterdam", "The Hague"],
  new_zealand: ["Auckland", "Wellington", "Christchurch"],
  nicaragua: ["Managua", "León", "Granada"],
  niger: ["Niamey", "Zinder", "Maradi"],
  nigeria: ["Lagos", "Abuja", "Kano"],
  north_korea: ["Pyongyang", "Hamhung", "Wonsan"],
  north_macedonia: ["Skopje", "Bitola", "Ohrid"],
  norway: ["Oslo", "Bergen", "Stavanger"],
  oman: ["Muscat", "Salalah", "Nizwa"],
  pakistan: ["Karachi", "Lahore", "Islamabad"],
  palau: ["Ngerulmud", "Melekeok", "Koror"],
  palestine: ["Ramallah", "Gaza", "Hebron"],
  panama: ["Panama City", "Colón", "David"],
  papua_new_guinea: ["Port Moresby", "Lae", "Mount Hagen"],
  paraguay: ["Asunción", "Ciudad del Este", "Encarnación"],
  peru: ["Lima", "Cusco", "Arequipa"],
  philippines: ["Manila", "Cebu", "Davao"],
  poland: ["Warsaw", "Kraków", "Łódź"],
  portugal: ["Lisbon", "Porto", "Coimbra"],
  qatar: ["Doha", "Al Wakrah", "Al Khor"],
  romania: ["Bucharest", "Cluj-Napoca", "Timișoara"],
  russia: ["Moscow", "Saint Petersburg", "Novosibirsk"],
  rwanda: ["Kigali", "Butare", "Gisenyi"],
  saint_kitts_and_nevis: ["Basseterre", "Charlestown", "Dieppe Bay Town"],
  saint_lucia: ["Castries", "Vieux Fort", "Gros Islet"],
  saint_vincent_and_the_grenadines: ["Kingstown", "Georgetown", "Barrouallie"],
  samoa: ["Apia", "Vaitele", "Faleasiu"],
  san_marino: ["San Marino", "Serravalle", "Borgo Maggiore"],
  sao_tome_and_principe: ["São Tomé", "Trindade", "Guadalupe"],
  saudi_arabia: ["Riyadh", "Jeddah", "Mecca"],
  senegal: ["Dakar", "Thiès", "Saint-Louis"],
  serbia: ["Belgrade", "Novi Sad", "Niš"],
  seychelles: ["Victoria", "Anse Boileau", "Beau Vallon"],
  sierra_leone: ["Freetown", "Bo", "Kenema"],
  singapore: ["Central", "East", "West"],
  slovakia: ["Bratislava", "Košice", "Prešov"],
  slovenia: ["Ljubljana", "Maribor", "Celje"],
  solomon_islands: ["Honiara", "Gizo", "Auki"],
  somalia: ["Mogadishu", "Hargeisa", "Kismayo"],
  south_africa: ["Johannesburg", "Cape Town", "Durban"],
  south_korea: ["Seoul", "Busan", "Incheon"],
  south_sudan: ["Juba", "Wau", "Malakal"],
  spain: ["Madrid", "Barcelona", "Seville"],
  sri_lanka: ["Colombo", "Kandy", "Galle"],
  sudan: ["Khartoum", "Omdurman", "Port Sudan"],
  suriname: ["Paramaribo", "Lelydorp", "Nieuw Nickerie"],
  sweden: ["Stockholm", "Gothenburg", "Malmö"],
  switzerland: ["Zurich", "Geneva", "Basel"],
  syria: ["Damascus", "Aleppo", "Homs"],
  taiwan: ["Taipei", "Kaohsiung", "Taichung"],
  tajikistan: ["Dushanbe", "Khujand", "Kulob"],
  tanzania: ["Dar es Salaam", "Dodoma", "Arusha"],
  thailand: ["Bangkok", "Chiang Mai", "Pattaya"],
  togo: ["Lomé", "Sokodé", "Kara"],
  tonga: ["Nukuʻalofa", "Neiafu", "Vaini"],
  trinidad_and_tobago: ["Port of Spain", "San Fernando", "Chaguanas"],
  tunisia: ["Tunis", "Sfax", "Sousse"],
  turkey: ["Istanbul", "Ankara", "Izmir"],
  turkmenistan: ["Ashgabat", "Turkmenabat", "Dashoguz"],
  tuvalu: ["Funafuti", "Nukulaelae", "Nanumea"],
  uganda: ["Kampala", "Entebbe", "Gulu"],
  ukraine: ["Kyiv", "Lviv", "Odessa"],
  united_arab_emirates: ["Abu Dhabi", "Dubai", "Sharjah"],
  united_kingdom: ["England", "Scotland", "Wales"],
  united_states: ["California", "Texas", "New York"],
  uruguay: ["Montevideo", "Salto", "Paysandú"],
  uzbekistan: ["Tashkent", "Samarkand", "Bukhara"],
  vanuatu: ["Port Vila", "Luganville", "Norsup"],
  vatican_city: ["Vatican City"],
  venezuela: ["Caracas", "Maracaibo", "Valencia"],
  vietnam: ["Hanoi", "Ho Chi Minh City", "Da Nang"],
  yemen: ["Sana'a", "Aden", "Taiz"],
  zambia: ["Lusaka", "Ndola", "Kitwe"],
  zimbabwe: ["Harare", "Bulawayo", "Mutare"],
};

function Air_import_step2() {
  const navigate = useNavigate();
  const form = useRef();
  const [pending, setPending] = useState(false);
  const [form2Data, setForm2Data] = useState({
    user_name: "",
    company_address: "",
    user_email: "",
    user_country: "",
    user_state: "",
    user_number: "",
    // Add more form fields as needed
  });

  const handleChange = (e) => {
    setForm2Data({
      ...form2Data,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);

    // Retrieve data from local storage
    const form1Data = JSON.parse(localStorage.getItem("form1Data"));

    // Combine data from form1 and form2
    const combinedData = {
      ...form1Data,
      ...form2Data,
    };

    // Send combined data via EmailJS
    emailjs
      .send("service_inkbhof", "template_93rg6vf", combinedData, {
        publicKey: "WP8GUCcsZ82MFUSAr",
      })
      .then(
        () => {
          setPending(false);
          console.log("SUCCESS!");
          form.current.reset();
          localStorage.removeItem("form1Data"); // Clear local storage
          navigate("/air_export/thank_you");
          window.scrollTo(0, 0);
        },
        (error) => {
          setPending(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  const [filteredStates, setFilteredStates] = useState([]);
  const [phoneCode, setPhoneCode] = useState("");

  // Handle country change
  const handleCountryChange = (event) => {
    const countryValue = event.target.value;
    setForm2Data((prevData) => ({
      ...prevData,
      user_country: countryValue,
      user_state: "", // Reset state when the country changes
    }));
    setFilteredStates(states[countryValue] || []);

    const country = countries.find((c) => c.value === countryValue);
    setPhoneCode(country ? country.code : "+00");
  };

  // Handle state change
  const handleStateChange = (event) => {
    setForm2Data((prevData) => ({
      ...prevData,
      user_state: event.target.value,
    }));
  };

  // Handle phone number change
  const handlePhoneNumberChange = (event) => {
    setForm2Data((prevData) => ({
      ...prevData,
      user_number: event.target.value,
    }));
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-slate-200">
        <div className="max-w-screen-lg m-auto py-3">
          <h1 className="text-4xl py-3 font-bold">Air Export</h1>
          <p className="py-1">
            Fill in our form below and our freight forward experts will contact
            you as soon as possible.
          </p>
        </div>
      </div>
      <div className="py-7 bg-slate-100">
        <div className="max-w-screen-md m-auto">
          <div className="flex items-center py-3">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-3xl font-bold text-red-500">Step 2</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <h1 className="text-2xl pb-3 font-bold text-center ">
            Customer Details
          </h1>
        </div>

        {/*   <Form_animation />*/}

        <form ref={form} onSubmit={sendEmail}>
          <div className="max-w-screen-lg m-auto px-4 text-base">
            <div className="pt-2 pb-6">
              <div className="flex items-center space-x-4 py-3">
                <h1 className="text-xl font-bold text-red-600">
                  Company Details
                </h1>
                <HiOutlineBuildingOffice2 className="ml-1 text-4xl text-red-600" />
                <hr className="flex-grow h-[2px] bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full border-0 animate-pulse" />
              </div>

              <div className="grid grid-cols-2 grid-rows-1">
                {/* Port of Loading Field */}
                <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                  <label
                    htmlFor="company_name"
                    className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                  >
                    Company Name
                    <BsBuildingFillCheck className="ml-2 text-2xl text-red-600" />
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    id="company_name"
                    className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                    placeholder="Enter Your Company Name"
                    value={form2Data.user_name}
                    required
                    onChange={handleChange}
                  />
                </div>
                {/* Port of Destination Field */}
                <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                  <label
                    htmlFor="company_address"
                    className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                  >
                    Company Address
                    <IoLocationOutline className="ml-1 text-2xl text-red-600" />
                  </label>
                  <textarea
                    name="company_address"
                    rows={2}
                    type="text"
                    id="company_address"
                    className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                    placeholder="Enter Your Company Address"
                    value={form2Data.company_address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 pb-5">
              <div className="flex items-center space-x-4 py-3">
                <h1 className="text-xl font-bold text-red-600">
                  Your Contact Details
                </h1>
                <MdContactMail className="ml-1 text-4xl text-red-600" />
                <hr className="flex-grow h-[2px] bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full border-0 animate-pulse" />
              </div>

              <>
                <div className="grid grid-cols-2 grid-rows-1 items-center">
                  {/* Country Dropdown */}
                  <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                    <label
                      htmlFor="country"
                      className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                    >
                      Country{" "}
                      <IoMdGlobe className="ml-2 text-2xl text-red-600" />
                    </label>
                    <select
                      name="user_country"
                      id="country"
                      value={form2Data.user_country}
                      onChange={handleCountryChange}
                      className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                      required
                    >
                      <option value="" disabled>
                        Enter your country name
                      </option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* State Dropdown */}
                  <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                    <label
                      htmlFor="state"
                      className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                    >
                      State
                      <PiMapPinArea className="ml-2 text-2xl text-red-600" />
                    </label>
                    <select
                      name="user_state"
                      id="state"
                      value={form2Data.user_state}
                      onChange={handleStateChange}
                      className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                      required
                      disabled={!form2Data.user_country}
                    >
                      <option value="" disabled>
                        {form2Data.user_country
                          ? "Select your state name"
                          : "Select a country first"}
                      </option>
                      {filteredStates.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Phone Number Input */}
                <div className="grid grid-cols-2 grid-rows-1 items-center">
                  <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                    <label
                      htmlFor="number"
                      className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                    >
                      Phone number
                      <IoCall className="ml-2 text-2xl text-red-600" />
                    </label>
                    <div className="col-span-3 flex items-center">
                      <span className="bg-gray-200 px-3 py-2 rounded-l-lg text-gray-900 text-sm ml-2">
                        {phoneCode}
                      </span>
                      <input
                        name="user_number"
                        type="tel"
                        id="number"
                        value={form2Data.user_number}
                        onChange={handlePhoneNumberChange}
                        className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  {/* Additional form fields for company email and address */}

                  <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                    <label
                      htmlFor="email"
                      className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                    >
                      Email{" "}
                      <MdOutlineMail className="ml-2 text-2xl text-red-600" />
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      id="email"
                      value={form2Data.company_email}
                      onChange={handleChange}
                      className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                      placeholder="Enter your company email"
                      required
                    />
                  </div>
                </div>
              </>
            </div>

            {/* Add more fields as needed */}
            <div className="my-3">
              <button
                type="submit"
                className="bg-red-600 text-white font-semibold relative px-5 py-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                disabled={pending}
              >
                {pending ? "Sending..." : "Send Request"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Scroll_Top />
      <Footer />
    </div>
  );
}

export default Air_import_step2;
