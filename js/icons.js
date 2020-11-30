var icons = [
    { regex: "(.*)(\\bPE\\b|Phys(ical)? Edu?(cation)?|\\bSRLA\\b|TRK|TRACK FIELD|CROSS C|ADV COND|DECATHLON|MV BD AWR|ATHLETIC|SPORTS|FITNESS|Wellbeing|Fitness)(.*)", url: "https://www.flaticon.com/svg/static/icons/svg/763/763812.svg", source: "running_763812" },
    { regex: "(.*)(WO?R?LD HIST?(ORY)?|WHG|WLD LANG|LAT AM|INTL REL|Global Politics)(.*)", url: "https://image.flaticon.com/icons/svg/174/174249.svg", source: "internet_174249" },
    { regex: "(.*)(ANIMAL)(.*)", url: "https://image.flaticon.com/icons/svg/2109/2109342.svg", source: "barn_2109342" },
    { regex: "(.*)(ANIM)(.*)", url: "https://image.flaticon.com/icons/svg/2037/2037876.svg", source: "animation_2037876" },
    { regex: "(.*)(FOREN)(.*)", url: "https://image.flaticon.com/icons/svg/1616/1616525.svg", source: "forensic-science_1616525" },
    { regex: "(.*)(AUTO.*[TM]ECH|[MT]ECH.*AUTO|AUTO MAIN)(.*)", url: "https://image.flaticon.com/icons/svg/2040/2040989.svg", source: "car-service_2040989" },
    { regex: "(.*)(ALG(EB|EBRA)?(\\d|\\b))(.*)", url: "https://image.flaticon.com/icons/svg/167/167753.svg", source: "blackboard_167753" },
    { regex: "(.*)(ART HIST|PAINT)(.*)", url: "https://image.flaticon.com/icons/svg/214/214275.svg", source: "paint-brush_214275" },
    { regex: "(.*)(EUR)(.*)", url: "https://image.flaticon.com/icons/svg/664/664549.svg", source: "europe_664549" },
    { regex: "(.*)(PHYSICS|PHY:C)(.*)", url: "https://image.flaticon.com/icons/svg/164/164969.svg", source: "science_164969" },
    { regex: "(.*)(ASTRONOMY)(.*)", url: "https://image.flaticon.com/icons/svg/124/124553.svg", source: "telescope_124553" },
    { regex: "(.*)(PRE ?CALC)(.*)", url: "https://image.flaticon.com/icons/svg/1074/1074140.svg", source: "parabola_1074140" },
    { regex: "(.*)(BASKETBALL|BSKTBL)(.*)", url: "https://image.flaticon.com/icons/svg/500/500245.svg", source: "basketball_500245" },
    { regex: "(.*)((^|\\b)CALC(ULUS)?\\b)(.*)", url: "https://image.flaticon.com/icons/svg/1572/1572296.svg", source: "line-graph_1572296" },
    { regex: "(.*)(CHEER|DRILL)(.*)", url: "https://image.flaticon.com/icons/svg/2185/2185584.svg", source: "cheerleaders_2185584" },
    { regex: "(.*)(CHEM)(.*)", url: "https://image.flaticon.com/icons/svg/123/123381.svg", source: "flask_123381" },
    { regex: "(.*)(GAME DSG?N)(.*)", url: "https://image.flaticon.com/icons/svg/1737/1737285.svg", source: "computer_1737285" },
    { regex: "(.*)(COMP SCI?|COMPUTER|INTRO COMP|COMP PRO?G|INTRO PROG|CODING|INTE?R?NE?T|DIGITAL LIT|Computer Science)(.*)", url: "https://image.flaticon.com/icons/svg/626/626570.svg", source: "binary-code_626570" },
    { regex: "(.*)(US HIST|AMER(ICAN?)?|AM DEM|AM IMAGE|IB HS AMR)(.*)", url: "https://image.flaticon.com/icons/svg/149/149513.svg", source: "united-states-of-america_149513" },
    { regex: "(.*)(HE?A?LTH|MEDICAL|MED INTERVEN|MEDICINE|HOSP)(.*)", url: "https://image.flaticon.com/icons/svg/179/179555.svg", source: "first-aid-kit_179555" },
    { regex: "(.*)(CERAMICS|AM IND)(.*)", url: "https://image.flaticon.com/icons/svg/123/123458.svg", source: "pot_123458" },
    { regex: "(.*)(FLOR)(.*)", url: "https://image.flaticon.com/icons/svg/346/346167.svg", source: "flower_346167" },
    { regex: "(.*)(MARINE|ZOOLOGY|OCEAN)(.*)", url: "https://image.flaticon.com/icons/svg/146/146718.svg", source: "turtle_146718" },
    { regex: "(.*)(MAND)(.*)", url: "https://image.flaticon.com/icons/svg/2448/2448781.svg", source: "flag_2448781" },
    { regex: "(.*)(KOREA)(.*)", url: "https://image.flaticon.com/icons/svg/1999/1999610.svg", source: "korea_1999610" },
    { regex: "(.*)(PSYCH|IB THEORY)(.*)", url: "https://image.flaticon.com/icons/svg/552/552408.svg", source: "creativity_552408" },
    { regex: "(.*)(PIANO|KEYBOARD)(.*)", url: "https://image.flaticon.com/icons/svg/1973/1973888.svg", source: "keyboard_1973888" },
    { regex: "(.*)(EXPO TE?XT|SH STORY)(.*)", url: "https://image.flaticon.com/icons/svg/176/176690.svg", source: "writing_176690" },
    { regex: "(.*)(DISCR)(.*)", url: "https://image.flaticon.com/icons/svg/251/251986.svg", source: "calculating_251986" },
    { regex: "(.*)(VET)(.*)", url: "https://image.flaticon.com/icons/svg/2659/2659366.svg", source: "pawprint_2659366" },
    { regex: "(.*)(ORCH|VIOLIN|STRINGS)(.*)", url: "https://image.flaticon.com/icons/svg/124/124811.svg", source: "violin_124811" },
    { regex: "(.*)(BAND|MAR DYN)(.*)", url: "https://image.flaticon.com/icons/svg/718/718543.svg", source: "drums_718543" },
    { regex: "(.*)(SOCCER)(.*)", url: "https://image.flaticon.com/icons/svg/1800/1800944.svg", source: "football_1800944" },
    { regex: "(.*)(LACROSS)(.*)", url: "https://image.flaticon.com/icons/svg/2827/2827041.svg", source: "lacrosse_2827041" },
    { regex: "(.*)(MUSIC|JAZZ|CHOIR|INSTRUM|WIND PERC|HARMONY|GLEE|CHORUS|VOC ENSEMBLE)(.*)", url: "https://image.flaticon.com/icons/svg/579/579496.svg", source: "treble-clef_579496" },
    { regex: "(.*)(BIO(LOGY|TECH(NOLOGY)?|MED)?\\b|GENETICS)(.*)", url: "https://image.flaticon.com/icons/svg/620/620366.svg", source: "dna_620366" },
    { regex: "(.*)((^|\\b)LIT(ERATURE)?\\b|READ|L & L|English Literature)(.*)", url: "https://image.flaticon.com/icons/svg/167/167755.svg", source: "open-book_167755" },
    { regex: "(.*)(STAGE|THEATRE DSN|TH DSN WKSP|CHORPROC)(.*)", url: "https://image.flaticon.com/icons/svg/2673/2673346.svg", source: "spotlight_2673346" },
    { regex: "(.*)(ADVT DES)(.*)", url: "https://image.flaticon.com/icons/svg/1055/1055664.svg", source: "ads_1055664" },
    { regex: "(.*)(ECON(O(MICS)?)?|AP MA ECO|Economics)(.*)", url: "https://image.flaticon.com/icons/svg/712/712743.svg", source: "profit_712743" },
    { regex: "(.*)(STAT(STICS|ISTCS)|STATS?|STATISTICS)(.*)", url: "https://image.flaticon.com/icons/svg/1006/1006636.svg", source: "analysis_1006636" },
    { regex: "(.*)(FILM(MAKING)?\\b|VIDEO|VID PRD|BRDCST|CINEMA)(.*)", url: "https://image.flaticon.com/icons/svg/321/321799.svg", source: "video-camera_321799" },
    { regex: "(.*)((FIR|1)ST RESPONDER)(.*)", url: "https://image.flaticon.com/icons/svg/119/119083.svg", source: "ambulance_119083" },
    { regex: "(.*)(GEOLOGY|Geography)(.*)", url: "https://image.flaticon.com/icons/svg/184/184647.svg", source: "science_184647" },
    { regex: "(.*)(COOK|CULINARY|FOOD|CATER)(.*)", url: "https://image.flaticon.com/icons/svg/1142/1142696.svg", source: "cooking_1142696" },
    { regex: "(.*)(\\bGOVT\\b|YOU ADM JUS)(.*)", url: "https://image.flaticon.com/icons/svg/167/167718.svg", source: "university_167718" },
    { regex: "(.*)(GEOM)(.*)", url: "https://image.flaticon.com/icons/svg/258/258316.svg", source: "office-material_258316" },
    { regex: "(.*)(GUIT(AR)?)(.*)", url: "https://image.flaticon.com/icons/svg/1586/1586234.svg", source: "guitar_1586234" },
    { regex: "(.*)(MYP ST TECH|SEM(INAR)?\\b|ENGINEER|\\bENG DE\\b|INTRO ENGIN|CREAT EXP|STEA?M|MULTICRAFT CORE)(.*)", url: "https://image.flaticon.com/icons/svg/1460/1460471.svg", source: "idea_1460471" },
    { regex: "(.*)(FLIGHT|SPACE|AEROSPA?CE)(.*)", url: "https://image.flaticon.com/icons/svg/744/744502.svg", source: "globe_744502" },
    { regex: "(.*)(ENG(LISH)?\\b|CREAT(IVE)? WRI?T(ING)?|\\bCOMP(OSITION)?\\b|\\bERWC\\b)(.*)", url: "https://image.flaticon.com/icons/svg/254/254022.svg", source: "signing_254022" },
    { regex: "(.*)(SPAN(ISH)?\\b)(.*)", url: "https://image.flaticon.com/icons/svg/206/206724.svg", source: "spain_206724" },
    { regex: "(.*)(FREN(CH)?\\b|AP FR LANG)(.*)", url: "https://image.flaticon.com/icons/svg/206/206657.svg", source: "france_206657" },
    { regex: "(.*)(ITALIAN)(.*)", url: "https://image.flaticon.com/icons/svg/555/555668.svg", source: "italy_555668" },
    { regex: "(.*)(ENV)(.*)", url: "https://image.flaticon.com/icons/svg/291/291211.svg", source: "recycle_291211" },
    { regex: "(.*)(ROBOT|MFG|INTRO PHYS COMPUTING|MACHINING)(.*)", url: "https://image.flaticon.com/icons/svg/1546/1546683.svg", source: "robotic-arm_1546683" },
    { regex: "(.*)(MEDIA)(.*)", url: "https://image.flaticon.com/icons/svg/1649/1649092.svg", source: "media-player_1649092" },
    { regex: "(.*)(CYBER)(.*)", url: "https://image.flaticon.com/icons/svg/2084/2084028.svg", source: "cyber-security_2084028" },
    { regex: "(.*)(GEOG|HUMAN GEO)(.*)", url: "https://image.flaticon.com/icons/svg/717/717982.svg", source: "globe_717982" },
    { regex: "(.*)((^|\\b)ART\\b|DES CRAFT|CRAFTS)(.*)", url: "https://image.flaticon.com/icons/svg/1497/1497573.svg", source: "creativity_1497573" },
    { regex: "(.*)(AM SIGN LNG)(.*)", url: "https://image.flaticon.com/icons/svg/2014/2014363.svg", source: "sign-language_2014363" },
    { regex: "(.*)(DANCE?|DN CH|DNC CMNTY)(.*)", url: "https://image.flaticon.com/icons/svg/493/493507.svg", source: "dancing_493507" },
    { regex: "(.*)(APP CREAT)(.*)", url: "https://image.flaticon.com/icons/svg/186/186239.svg", source: "smartphone_186239" },
    { regex: "(.*)(MUSEUM)(.*)", url: "https://image.flaticon.com/icons/svg/252/252032.svg", source: "banks_252032" },
    { regex: "(.*)(GOLF)(.*)", url: "https://image.flaticon.com/icons/svg/1584/1584143.svg", source: "golf_1584143" },
    { regex: "(.*)(JAPAN)(.*)", url: "https://image.flaticon.com/icons/svg/206/206789.svg", source: "japan_206789" },
    { regex: "(.*)(MEX)(.*)", url: "https://image.flaticon.com/icons/svg/206/206600.svg", source: "mexico_206600" },
    { regex: "(.*)(RUSSIA)(.*)", url: "https://image.flaticon.com/icons/svg/206/206604.svg", source: "russia_206604" },
    { regex: "(.*)((^|\\b)ELD\\b|(^|\\b)ELS\\b|(^|\\b)ELL\\b)(.*)", url: "https://image.flaticon.com/icons/svg/947/947478.svg", source: "book_947478" },
    { regex: "(.*)((^|\\b)THEA(T[ER][ER])?\\b|DRAMA)(.*)", url: "https://image.flaticon.com/icons/svg/214/214351.svg", source: "theater_214351" },
    { regex: "(.*)(LEADER)(.*)", url: "https://image.flaticon.com/icons/svg/1534/1534091.svg", source: "government_1534091" },
    { regex: "(.*)(SERVICE|T\\.A\\.|PEER COUNSELING|TUTOR|INTRO SOCIO|AVID|ETHNIC|INTERACTIONS|ANTHRO)(.*)", url: "https://image.flaticon.com/icons/svg/1402/1402119.svg", source: "collaboration_1402119" },
    { regex: "(.*)(LATIN|\\bLAW\\b|CALLIGRAPHY|Chinese)(.*)", url: "https://image.flaticon.com/icons/svg/1020/1020074.svg", source: "manuscript_1020074" },
    { regex: "(.*)(HUMANITI?E?S?|LIFE (MGMT|SKI?L?LS)|PHIL|Theory of Knowledge)(.*)", url: "https://image.flaticon.com/icons/svg/1205/1205495.svg", source: "discussion_1205495" },
    { regex: "(.*)(YEARBOOK|DIG IMAG|PHOTO)(.*)", url: "https://image.flaticon.com/icons/svg/1006/1006107.svg", source: "memories_1006107" },
    { regex: "(.*)(NETWORKING)(.*)", url: "https://image.flaticon.com/icons/svg/1554/1554377.svg", source: "network_1554377" },
    { regex: "(.*)(RES(EA)?RCH)(.*)", url: "https://image.flaticon.com/icons/svg/164/164996.svg", source: "research_164996" },
    { regex: "(.*)(COL(LEGE)?\\b|CLASS OF)(.*)", url: "https://image.flaticon.com/icons/svg/167/167743.svg", source: "mortarboard_167743" },
    { regex: "(.*)(CAREER|JOB|GEN WRK|ENTERP)(.*)", url: "https://image.flaticon.com/icons/svg/149/149018.svg", source: "briefcase_149018" },
    { regex: "(.*)(ADVIS|HOME|SOCIAL COM|GRADE \\d|BOOKS)(.*)", url: "https://www.flaticon.com/svg/static/icons/svg/167/167729.svg", source: "desk_167729" },
    { regex: "(.*)(SWIM)(.*)", url: "https://image.flaticon.com/icons/svg/124/124212.svg", source: "swimming_124212" },
    { regex: "(.*)(CONSTRUCTION|WOOD|CARPENTRY)(.*)", url: "https://image.flaticon.com/icons/svg/1973/1973946.svg", source: "woodworking_1973946" },
    { regex: "(.*)(VO?LLE?YBA?LL?)(.*)", url: "https://image.flaticon.com/icons/svg/68/68175.svg", source: "volley-ball_68175" },
    { regex: "(.*)(FOOTBALL)(.*)", url: "https://image.flaticon.com/icons/svg/167/167741.svg", source: "american-football_167741" },
    { regex: "(.*)(JOURNALI?SM)(.*)", url: "https://image.flaticon.com/icons/svg/1720/1720094.svg", source: "communication_1720094" },
    { regex: "(.*)(TENNIS)(.*)", url: "https://image.flaticon.com/icons/svg/1645/1645793.svg", source: "tennis_1645793" },
    { regex: "(.*)(SPEECH)(.*)", url: "https://image.flaticon.com/icons/svg/512/512500.svg", source: "speak_512500" },
    { regex: "(.*)(WRESTLING)(.*)", url: "https://image.flaticon.com/icons/svg/577/577132.svg", source: "wrestling_577132" },
    { regex: "(.*)(GRAPH(IC)? (DESIGN|COMM|ARTS)|INTR INT VD)(.*)", url: "https://image.flaticon.com/icons/svg/148/148862.svg", source: "layers_148862" },
    { regex: "(.*)(FASH DSN)(.*)", url: "https://image.flaticon.com/icons/svg/770/770088.svg", source: "dress_770088" },
    { regex: "(.*)(JROTC)(.*)", url: "https://image.flaticon.com/icons/svg/942/942444.svg", source: "rank_942444" },
    { regex: "(.*)(WATERPOLO)(.*)", url: "https://image.flaticon.com/icons/svg/625/625383.svg", source: "water-polo_625383" },
    { regex: "(.*)(HORT|LANDSCAP)(.*)", url: "https://image.flaticon.com/icons/svg/346/346195.svg", source: "sprout_346195" },
    { regex: "(.*)(ARABIC)(.*)", url: "https://image.flaticon.com/icons/svg/1704/1704491.svg", source: "pattern_1704491" },
    { regex: "(.*)(HIST)(.*)", url: "https://image.flaticon.com/icons/svg/1501/1501478.svg", source: "parchment_1501478" },
    { regex: "(.*)(SCULPT)(.*)", url: "https://image.flaticon.com/icons/svg/2071/2071211.svg", source: "sculpture_2071211" },
    { regex: "(.*)(SCI|ISCS)(.*)", url: "https://image.flaticon.com/icons/svg/167/167733.svg", source: "microscope_167733" },
    { regex: "(.*)((BASE|SOFT)BALL)(.*)", url: "https://image.flaticon.com/icons/svg/1668/1668514.svg", source: "baseball_1668514" },
    { regex: "(.*)(PHYSIO|HUM BODY)(.*)", url: "https://image.flaticon.com/icons/svg/2044/2044715.svg", source: "x-ray_2044715" },
    { regex: "(.*)((^|\\b)MATH|IB MTH)(.*)", url: "https://image.flaticon.com/icons/svg/1284/1284095.svg", source: "mathematics_1284095" },
    { regex: "(.*)(DRAW|2D|3D|DESIGN|DE?SN|DRAFT ARC|SCREEN PRINT|EXPL ARCH)(.*)", url: "https://image.flaticon.com/icons/svg/681/681560.svg", source: "sketch_681560" },
    { regex: "(.*)(SANDBOX)(.*)", url: "https://www.flaticon.com/svg/static/icons/svg/1588/1588745.svg", source: "sandbox_1588745" },
    { regex: "(.*)(.)(.*)", url: "https://image.flaticon.com/icons/svg/164/164949.svg", source: "bookshelf_164949" }
];
