let rainbow;

const a = [0.022005877678918415,0.00008753394535351844,0.014515601482557568,-0.012398709842487154,-0.016845830617314317,0.024496428981490945,0.013161944946182131,-0.005730482107608,-0.001752132612742062,-0.030771151426540463,0.01711929869796828,-0.05015147829062397,0.0007116779105416152,-0.02323500213500131,0.012939749717008255,-0.0343885509553695,0.006641583498186017,-0.0244026063005699,0.01770733197919375,0.02750624898378828,-0.009075901380805225,-0.016217092519013536,-0.0033065261215041077,-0.03246407405227396,0.08941145214448126,-0.004393367404279945,0.00012403583862312644,-0.026373192011122773,0.023592483912033228,0.008647920397669812,-0.027473287442264082,-0.0696478063197587,-0.03672721174624059,0.021175135666564874,0.05025413661475879,0.024674614321455002,0.007541271799126559,-0.030559823426781114,-0.0016929088678266056,0.08913315902406158,-0.01536083812324096,0.004859563028073262,-0.002204586199147987,-0.00598616039934801,0.05060851611249447,0.015617357678789096,-0.05186452669397693,-0.03115713396553139,0.03774662292557254,0.024191971801103843,-0.07026307904806342,0.031730893447397705,-0.04038392151543927,-0.020493674187513737,-0.019225987885322704,0.007468816227143951,0.0011210690714877473,0.006233946876849851,0.011064583253979689,-0.041306782162756135,-0.01061383254097955,-0.030893971306238253,-0.004181511893532015,0.006043134204729379,-0.06664255169699548,-0.003089859722705263,0.003810727687665467,0.03861458737930905,0.05486800290647137,-0.012161746449974406,-0.0037921149918904423,-0.05262498588481814,-0.020813694749934653,0.04928720095904866,-0.0065537532745289055,0.011453638610917789,-0.0013932149956379578,-0.04318629238690434,0.008942285077667244,0.021948331543359297,-0.010375798046177862,0.05495675005302058,0.031584043312745474,-0.005119716180350371,-0.04268124630056027,-0.010238239148473249,-0.04269385601278087,0.072879422313218,-0.009760390462794841,-0.0005561389615012964,-0.013161731987140969,0.046707897104949186,0.01635200167065489,0.014673793039557173,0.005886755701059298,-0.0004223863071913664,-0.027460876585142263,-0.05996164327295716,-0.016542401771681533,-0.09596772625359816,0.003715378315536512,-0.007098350826599535,0.013788627342961088,-0.04598824975819668,0.003926860562226516,0.021034515904722894,-0.043085630042999076,-0.026435196516889976,0.019285261641168384,-0.004561573083682205,0.01834521401349242,0.013327927927298769,-0.0017136140855583642,-0.036448892863300913,-0.05513190277444088,-0.03243478208709407,-0.017248950127373534,0.010084396981130228,-0.017302932091396855,0.004249649376984662,-0.03729565080448009,-0.011188828441152442,0.00964040955621642,-0.01397747431251911,0.00899623780703861,0.005193019371935363,0.029762982045052823,0.041446566567361856,-0.036351833451721674,0.018645669497028665,0.021401967145152183,0.05105255886055181,0.014957414499156808,0.012624886530424088,-0.011473451239681895,0.04275101643905836,0.02010419822793609,0.02161482316924151,0.013585267473295703,-0.01851147395706361,0.0334401302486762,0.008323739861315543,0.024530356644138322,-0.050267595622422785,-0.00034242699904821726,0.012725856923498582,-0.032819693469514064,-0.02522501865967342,-0.006566347465121348,0.0062917511304723915,0.010172632249520107,0.013064036186858863,-0.04370027307613716,-0.0055462082963968345,0.012200525283257862,0.00006027671161057055,-0.06661691247334314,-0.00679873739686683,0.010219756036998838,-0.031755459277806646,0.010002818892681564,0.008055170924485487,-0.005893356032708116,-0.07180255600961932,-0.04071001352216049,0.05059211142399421,0.008706868494798303,0.013056682244580852,0.01576679860152812,0.002548573469113082,0.02667714179258922,0.04437107478391447,-0.033912692589725076,-0.011297231334350758,0.010402639147919878,-0.016623388175024845,-0.004039900457964738,-0.0137816356678544,-0.023548432292264034,0.01970802269193935,-0.03963430790864031,0.026949950043370353,-0.03937682175879395,0.003974576218349048,0.018264323433881405,0.021751253357359737,0.02070549550026571,-0.011461357380054073,0.022178213092314464,0.015732557146832856,0.00035232355112253116,0.044011263873817257,0.020699502002353938,0.03406000174004421,0.01413340008663289,0.012538096942575135,-0.034305300710997425,-0.014191947910065944,0.0035637287272087814,-0.012357670100197855,-0.009859868071332116,-0.0005900229789134095,-0.0422560977727232,0.015127548354948343,0.003597501740801151,-0.019906783724333594,0.013145894784394506,-0.02301906086807234,0.0022699756495790863,-0.005123274276993847,0.01284789802594959,0.026052369809530598,0.001756081669601541,-0.05965246020759743,0.006560047696961151,-0.015060707888392241,-0.005770684812356829,-0.004618702495249025,-0.011544613392211363,0.008090883837806092,0.04568857046531645,-0.006791808248695602,-0.04082002659654976,-0.010817559758236221,0.01913830954316242,0.006118737150074185,0.0042299705599132325,-0.006980117500880267,0.0499523810787741,-0.042621241677757896,-0.013403639027706506,0.0021145289321198996,-0.007305806978873254,0.02105084656072913,0.025381632273911527,0.03333171753411843,-0.027693552020148653,-0.034871863351234794,0.0458000056422113,0.027347362966333243,0.03851843079254258,-0.037901445120425606,0.046893235788077685,0.0013493813469380002,0.011376995050254333,-0.030531273739598082,-0.004316165007377172,-0.00551946064222547,0.06933729549632715,0.03481331008330097,-0.003476633605829907,0.0037085310774917094,-0.004532758084890396,-0.0010710554049268711,-0.008544919816686137,-0.013262487134931018,0.023016382459768687,-0.02301923500405618,0.016013878812633803,-0.008268706975413237,0.017111796103423782,0.008577461314579659,-0.03941537124731691,-0.03813245661527415,0.01324188250787739,0.005598453920069883,-0.023782165356524377,-0.01995586769495613,-0.0018052670366785805,0.032411163097371624,-0.033212061635694345,-0.029277612161968336,-0.0144748190723342,0.03740833070281935,-0.0009844664980152348,-0.01588614768981277,-0.01544250002121764,-0.008011030765373232,0.004790385752049308,-0.03509968014293122,0.015058175232717585,-0.0826161973727274,-0.05866587662635332,-0.014549350280842014,0.004570478399570001,0.034668295574745,-0.014270337302334905,0.004648825691071935,-0.034890345768528105,-0.016012487463450683,0.0004001945980176471,0.03579056717548916,-0.005003669220963514,-0.003942781132326014,0.00952199564150798,-0.023516354957876174,0.02548356616637113,0.038813869255668716,-0.012155655529084014,-0.02726172521558105,0.02654602532894238,0.04103965239720184,-0.05145907021418505,0.007745971742751644,0.03804524787031262,-0.013965193951654171,0.022329229744714726,0.03371350160785993,-0.004286554899762769,-0.014414006441954574,0.03692762256984647,-0.04051950815759603,-0.07550419974231774,0.07437165337256497,0.0246375543549959,-0.026874510175273144,-0.006816145611104416,0.014684426554619254,-0.02887328066517179,-0.002180147705408874,-0.034297494838906706,-0.016432614035103977,-0.0010997916380438262,-0.021459246606600223,-0.03179439411827243,-0.021775344153719303,0.048369156460729715,0.006321932739201022,-0.020691984228370642,0.021913499932528804,-0.043362648851642024,0.016857528795008847,-0.013211147197283436,-0.057791033470156565,0.02738745761757328,-0.05867256070903054,0.015188701089959487,-0.0002750452657788059,0.022527554806685737,0.02102338609611099,0.014488226200017464,0.03090515037575036,0.01204363459076711,-0.04178626029495293,-0.008654157506755316,0.006743177155337409,-0.03118008378379235,-0.0064360542393523375,-0.019506809594602628,-0.008515285356229894,-0.05868691673987938,0.02382558566367554,-0.032463511076213356,-0.012716592195796832,-0.012203624085408385,0.021231235243530863,0.006097478137247614,-0.02398012062537654,0.005400373034426519,0.013446774867797332,-0.010804756175344717,0.018661226140200028,0.03931944031502907,0.009011873230958317,-0.01868827308544644,-0.028893670516077337,0.014427895468862025,-0.021239563583254434,0.009975868979090792,0.01277180035348564,0.04581800391628565,0.06276907821257402,-0.03743516754118953,0.04592857170140034,0.022753423734806648,0.037270261438249165,-0.004996514938465226,0.023984505215736043,0.033096978333538925,-0.0523257401511114,-0.017410552113450835,0.03956920003122459,-0.025995240317776135,0.0493385521454286,-0.045201172279117595,-0.016924553618675005,-0.07613323834483346,0.00980525747203514,-0.035018984208368596,-0.017677625101852053,0.05553902885486228,0.0087301635271829,0.010111045036076223,-0.0005161676265314045,0.0511501849639418,0.030511032430195893,-0.057384628618742294,-0.032939998450472956,0.028246297643767005,-0.00876503895425924,-0.021065889077002423,0.045993981349425755,0.04188366304580275,-0.011661302512138046,0.005840195150680152,0.03638157483795875,-0.014897228847552464,0.023902259617227452,-0.0004584180959557385,0.0076132185137124594,0.009523505476508279,-0.03025018798399263,0.0005875282508341485,0.023244669932575276,-0.0006866502394068193,0.011490013409072597,0.0011393358338363194,0.009695473128459274,-0.018382733550337958,0.006100286182115153,-0.023510126204084342,0.04997181321342841,0.05112126122470334,-0.011837192325672891,-0.0282887131301867,0.03543203546275162,0.0691712932279109,0.02956443701967307,-0.03244646772596822,0.0466216727054049,0.07825435996997994,0.01644278970230195,0.04068687996140752,0.03934540543367396,0.007954571520839419,-0.01201159305951776,-0.030805685542379932,0.042962403786506786,0.02684047079984289,0.0032912736864457726,-0.02200469903709488,-0.015675470329070188,0.0016487323576290028,-0.0011384497374246228,0.015402718826426798,-0.020945560308288917,0.00795132497944401,0.021967907284267355,0.00832637929323924,-0.02261926648112762,0.06961330346077059,-0.057309809053264577,-0.02993714472901442,0.008199545708334774,-0.015827450236009927,-0.020438680853355238,-0.0007612218312472718,-0.008929041126398633,-0.05670088708120959,0.009538314260782107,0.009327066055791998,-0.0046570909632054295,0.004901378265344971,0.025337642285244735,-0.021970037798722277,0.019680469228600006,-0.07157657320619334,-0.055916124191599734,-0.007972821625016727,0.020450967324517014,0.002577844959053067,-0.024974999894138927,-0.0006268983742217368,0.022545650590379728,0.006528498192072142,0.035196494240028145,-0.007187101055958461,-0.05002081097269913,0.04221572208975457,0.03720497842722682,0.0032304416096764527,-0.012796215506018227,-0.029312405736622915,-0.018458933814597168,0.006905496831434151,0.007191367629463314,0.0660797669119956,-0.024862483029838945,0.010277096958682832,0.03474874742232952,0.004949556116367072,0.06876773845622343,-0.007505712039723857,-0.002610228750384932,-0.012846152061045259,0.004682357909947173,0.0033772633552081183,-0.030769081222259513,-0.014189549122108371,-0.05513901419180551,0.04818912634710988,-0.011293593336915056,0.03842156334435546,0.029678608576503375,0.0012747686686468834,0.022366196524951015,0.0038238298003614273,0.014972473139795604,-0.04394607285900517,-0.008944250664554933,0.0015880934138389688,0.03254718778482167];
const n = [];
//const b = [-0.005472414176445083, 0.30621990567594276, -0.02062242691055311, 0.05265954411818593, 0.03347544829899553, -0.05132921943195638, -0.008803800334151027, -0.035127480952892455, -0.03285862323943144, -0.08042647122274602, -0.0698914059778593, 0.2785280488957236, 0.11529185876568644, -0.018458650775145566, 0.036682512625652086, 0.13828935564935219, -0.06961502790901401, 0.23074704562322876, 0.15262821088858589, -0.03673447389981903, 0.10670931240943003, 0.16441370949135617, -0.04599555047041182, 0.07707739834341937, -0.04350353410099079, 0.023534480534573115, -0.24126734282506868, -0.0522153815548816, 0.10139867073526668, 0.02985389692346381, -0.0657334341991343, 0.2660334290457276, -0.3010191718223793, 0.17612429934457974, 0.17997788794376224, -0.1272731348507955, -0.19281240979095657, -0.07295830493930752, -0.25295847680679157, 0.009824527213469908, -0.04428709428208688, -0.22560303334604642, 0.0691854408332484, -0.09929877214873017, 0.19160427829406074, 0.054290525712598715, -0.06535921202503621, -0.10397860677380148, -0.056399269311512505, -0.06933285142790951, -0.011724639066993378, -0.32640514411283267, -0.2799943284677463, -0.29999546394500093, -0.0318759143936819, 0.25317044529511257, 0.13331166903778843, 0.06542555435445954, 0.02493344732701075, 0.18042027773043356, 0.14984478940709361, -0.04036493741682924, -0.06152662908207707, 0.11037375595276958, 0.1508544981593833, -0.12290824510705896, -0.021170329869559974, -0.1684575605973474, -0.18123024612038244, 0.04087011671914312, 0.07527716831066317, 0.03386815987865466, 0.09352897911773364, 0.1565597486003555, 0.1186248610071752, -0.15519110802345135, -0.3064996333636789, 0.06214875360351131, 0.05142884601744625, -0.1941784517303508, 0.18642070308964911, -0.02374228797691314, 0.3060217178827256, 0.06382359384189146, -0.08016580264424229, -0.1766493658815504, -0.09132257847566258, 0.13977001570040787, -0.03200799244200706, -0.07623102104667169, -0.012317298265372199, 0.14130052764860693, 0.028754063285359743, -0.07039947938790424, -0.05758420912033066, 0.12989361415138365, -0.11597166044187365, 0.007636635435591302, 0.05637495636985494, -0.03884638513544379, 0.06903325384987327, 0.03234182294331671, 0.09926049441009732, -0.047904621414608856, -0.0412145104141644, 0.11882502666054844, -0.09086835070017699, 0.007007212450816244, 0.041623139455514185, 0.143071464946482, 0.09145335866831902, -0.14974332566325357, -0.12194540131788288, -0.14741488406632208, 0.3148553521775611, 0.0188075565203546, 0.1802118447522506, 0.03297039804488494, 0.11683774727763496, -0.012151013185914147, -0.03658673312013805, -0.2109297177131409, 0.010948955596988608, 0.08468441602884876, 0.1779410851601232, -0.013794121710843335, -0.0302607595569708, -0.010053296685379458, -0.039907261700431546, 0.01950119930478502, 0.027618446232787204, 0.08796156046194684, -0.110045868089199, -0.11226533879437181, 0.11522813173176294, -0.07134145535262079, -0.015237742759162384, 0.0979243840416819, -0.2526441385064333, 0.03354869799164221, 0.0062953570192586655, -0.12235806129876538, 0.05059863248139534, -0.10134882361232475, -0.20653795966429053, 0.0035433415638998905, 0.03619600634296949, -0.06063705623572778, -0.07930660162400437, -0.2645913727649831, -0.1707024511327138, 0.09075942918440646, -0.15757454783376368, -0.15023882133403135, 0.20019820661623136, -0.042292752792839054, 0.1781835600671426, 0.3625326741858256, 0.06713139094848317, 0.12953666901214544, -0.11538395974582111, 0.18782111854121616, -0.024183724952521832, 0.06726022406786196, 0.10910176277021419, -0.10715232501565557, 0.15985094873278197, -0.25265770486063205, -0.1680213556830206, -0.03309679009788482, 0.04888613584731596, -0.09874173149082455, -0.033712101879258494, -0.2299470895506167, -0.044554537143566164, -0.003680592936781444, -0.028175566862801343, -0.2084916854972083, 0.06076777084035312, 0.15440119812539968, -0.03886567310514077, 0.16945490370084487, 0.14715787407960346, -0.14365594394171616, 0.00945072031123104, 0.07711157778165909, -0.0352728958412766, -0.02243995309112293, 0.17522271929456795, 0.007869974212707624, -0.11897306555741863, -0.10181609306376888, -0.031077469515500014, -0.05943856706739448, 0.11579972277483674, 0.14178450110100593, 0.21917937145465277, 0.01172413957736132, 0.19044275998689425, 0.2188530772314844, 0.08672471625479011, 0.04176470237249159, -0.14272665336552093, -0.16817046145115777, -0.1814359551393116, -0.14099900234242382, -0.11682045410217673, 0.0664725175782633, 0.05970406391630905, 0.04135351432101091, -0.03322219977418414, -0.11467232094086834, -0.4468023596862719, -0.12821363312837225, -0.1752554427014406, 0.019692213999350217, -0.3163791126205847, 0.038416199571089875, 0.27276323465994395, 0.2041874325394598, 0.05057213654689552, 0.11321478873630011, -0.10024504774708143, 0.028497512608273018, -0.03772052019862031, 0.11267637181491755, 0.09288732993074651, -0.15713053936323101, -0.11030672853824992, -0.13583434936349423, 0.1418595888692752, 0.020870003841748273, -0.06622816057831188, -0.1444423725907233, -0.09371496528653013, 0.1698144623124046, -0.18323292990732806, -0.0889787185749008, 0.23125393842707076, 0.10108467596548139, -0.15088819005523743, -0.018602718299319407, -0.07862894127634187, -0.12462697285454506, 0.0020430192122981375, -0.16422731600245397, -0.22861202094309677, -0.28350033576795824, 0.11269436975264195, 0.008237108746414132, -0.007123337969852442, 0.013627360650660114, -0.08630674013997182, 0.19409841220086846, -0.08270348729373873, 0.1343217766883266, 0.11801035391700021, 0.15709661086173318, 0.0011782974307302657, 0.06243608038251352, 0.15391073333043773, -0.21860795876656453, 0.004230791578681295, -0.12593030327575103, 0.14132728803432723, 0.1755406809454217, -0.008303769433967004, 0.1807304473331525, -0.12202467498470426, 0.030986865226275643, 0.2686308777305481, 0.17280690901339668, -0.13770003047094173, 0.12529887370321413, 0.14998259870373143, -0.013157534753924253, -0.13707659476165, -0.1228187459235215, 0.30050838048770595, -0.10776154042142233, 0.10374552480285142, -0.09444113034608616, -0.31730842893846223, 0.011789397323447484, -0.08649262884264707, 0.07773174723626106, -0.14425815852719184, -0.11314957897225239, -0.12494513060657772, 0.12676519910983416, 0.27206308227691456, 0.026366885693793224, -0.1385127603007027, -0.07981082465807639, 0.027781778510128762, -0.18520479315779917, 0.42760135595842963, 0.13490488831849834, 0.1183991703497222, -0.10161368943607355, -0.11157007036496708, 0.056413954500555634, -0.14626710133375698, 0.07084912050943089, -0.06406287551817554, 0.13219892402212058, -0.08569754586252669, -0.13519717675191945, 0.1723405540240216, -0.05727914685158921, 0.0026634065493979092, -0.007105808890653188, -0.21820214970196708, 0.1495340978360962, 0.09282850526579492, 0.16779692719819134, 0.13039116539501103, -0.0906228584216737, -0.0722013812515592, -0.02226967345735871, 0.10329923868434218, 0.09555919370874902, -0.08846074936191248, -0.25836779302956736, -0.14884231015068192, -0.12380814173750501, 0.0243001139683681, 0.19536671571940925, -0.026603240514962136, 0.2359529886345828, -0.005645159369689659, -0.0600044043864441, 0.04320382622824999, -0.04455324921290385, 0.0066769314993287854, -0.21213801619978737, 0.02137673717707208, -0.2717309921033867, -0.019716688061592685, -0.12348042950838355, -0.024369731259689317, -0.19320732471058238, -0.1860819148793141, 0.002208264604862474, 0.05278265111108441, -0.13235903353314943, 0.03605898281800085, 0.30892792533663993, 0.10107349742389934, -0.0331533310217501, -0.11667619785191062, 0.032493380009152945, 0.07272747650279135, 0.03658671694475689, -0.09530621818741347, 0.3260127378988613, 0.03345301656703861, -0.1585693146946784, -0.03830278112093807, -0.17331149677749666, -0.18279785352524755, -0.23784394910027978, 0.03146660066784776, -0.04105763328105034, 0.14233199434778315, 0.24158290659348453, 0.010491762009179742, -0.0715971666071665, -0.18718702316679817, -0.20602078779277894, -0.004337706594894443, -0.06794405430565649, -0.0009146706077369643, -0.33104588121664125, 0.019595072851305406, -0.10094983718878874, 0.037861665072503714, -0.08393048944473327, -0.1662500273955333, 0.05176011429175709, -0.03407993829434279, -0.04270530690796667, 0.03639903109769235, 0.07493380974954644, -0.06822287720016594, -0.23241805287054385, 0.3075617613942441, 0.19828245820278703, 0.028630345444352626, 0.15138798835444262, 0.05075728709309636, 0.041705958264399, 0.08818589759518386, -0.2406410659977947, 0.02427101370491258, -0.048436778949461155, -0.0663588573442288, 0.16461622242279333, -0.03329604237288745, 0.025196657770289357, -0.10284823929903288, 0.09050322905174028, 0.05777213931014527, -0.07093963889655315, 0.09862534801651067, 0.22174344821032174, -0.2718518169027717, -0.07282350065603695, 0.08830465065090368, 0.04244128564378805, -0.05729101950279045, -0.008106060112649307, -0.07116277885415634, -0.09855859647570833, -0.18873352739479998, -0.2790997179820295, 0.0928467006692064, 0.22701246193571217, 0.16703935590851926, -0.15726859288698736, -0.003410319796026861, -0.03747614362210609, 0.0762985309650622, 0.08737049496110871, 0.20342780684702938, -0.05672894532809183, 0.10438712978978437, -0.09795290254306127, 0.11342303883094838, -0.22432209654215418, -0.21906152754330654, -0.03007868538998823, 0.09035554184461224, -0.17983411860435228, 0.03607250782180473, -0.17157004288313438, -0.24149328171880613, -0.04528259661809606, -0.2429852613225381, -0.10864113362483173, -0.20359445166600765, 0.06839331383648357, -0.019121454612476337, -0.20186976854434274, -0.3526686711244793, 0.0046323859665662916, -0.10378405729325008, -0.17762734069932237, 0.048526786775675124, 0.2800300502298908, -0.09838897111832451, -0.20194235374439692, 0.060976300759167865, 0.17545566235157822, -0.19451889337483713, 0.0400525526901111, 0.05517121186756875, 0.01720791998656729, -0.2999108203084225, 0.07218450995364739, 0.031600629868189636, 0.10757202062408139, -0.384431152495075, -0.10081607041750848, -0.04864781605670686, 0.2099301226775137, 0.1298384356209378, -0.11645977924350842, -0.1019253565023013, 0.1850531348975448, -0.07420176654799716, -0.16055449239747366, 0.03815629864386627, 0.07877490170183499, -0.14977203973335212, -0.21365704087776982, -0.11469719759724763, 0.19312618051307517, 0.21968598341593334, -0.05505328217934809, -0.1683894072955911, 0.32683536599541285, 0.12355924280633752, 0.11692367813400484, 0.022090911405266145, 0.1291521226765207, -0.052022074042667774, 0.17464787965669565, 0.11388862353648416, 0.005635188023113032, -0.02439309396880232, -0.03081641391472556, 0.07322624329525135, -0.19560572950378863, -0.015291408610889352, 0.10979993739049783, -0.027354615855649352, 0.07764736580316868, -0.025224351982247567, 0.019132570293653804, -0.06440143888215966, -0.011058253832745394, 0.007102807623636178, 0.04611311734008147, -0.3870222089979817, -0.1117367667523983, -0.035693168390222706, 0.1216974074955227, 0.00796590106657638, -0.06973766361675081, 0.22875650993210614, -0.07340173281532245];
//const c = [];

let amt = 0.0;
let angle = 0;

function setup() {
  createCanvas(512, 512);
  for (let i = 0; i < 512; i++) {
    n[i] = new NoiseLoop(20, -1, 1);
  }
  generateRainbow();

}


function generateRainbow() {
  // httpPost(path, [datatype], [data], [callback], [errorCallback])
  const path = "http://localhost:8000/query";
  for (let i = 0; i < 512; i++) {
    //c[i] = lerp(a[i], b[i], amt);
    //    a[i] += random(-0.01, 0.01);
    a[i] = n[i].value(angle); //randomGaussian() / 50.0;
    //c[i] += randomGaussian() / 10;
  }
  amt += 0.05;
  let da = TWO_PI / (24*60);
  angle += da;

  const data = {
    z: a,
    truncation: 0.5
  };
  httpPost(path, 'json', data, gotImage, gotError);
}

function gotError(error) {
  console.error(error);
}


function gotImage(result) {
  rainbow = createImg(result.image, imageReady);
  //rainbow.size(128, 128);
  rainbow.hide();
}

let count = 0;

function imageReady() {
  image(rainbow, 0, 0);
  save(`rainbow${nf(count, 4)}`);
  count++;
  if (angle <= TWO_PI) {
    setTimeout(generateRainbow, 100);
  }
}

const osn = new OpenSimplexNoise(Date.now());


class NoiseLoop {
  constructor(diameter, min, max) {
    this.diameter = diameter;
    this.min = min;
    this.max = max;
    this.cx = random(1000);
    this.cy = random(1000);
  }

  value(a) {
    let xoff = map(cos(a), -1, 1, this.cx, this.cx + this.diameter);
    let yoff = map(sin(a), -1, 1, this.cy, this.cy + this.diameter);
    let r = osn.noise2D(xoff, yoff);
    return map(r, -1, 1, this.min, this.max);
  }
}