/**
 * Catálogo de los 22 Arcanos Mayores del Tarot.
 * Numeración tradicional (con nota de correspondencia entre Marsella y Rider-Waite
 * en VIII La Justicia / XI La Fuerza para compatibilidad con todas las ediciones
 * de Santos Locos | Tarot & Poesía).
 */

export const ARCANOS = [
  {
    id: 0,
    slug: 'el-loco',
    romano: '0',
    numeroAlt: '0 · Sin número · XXII',
    nombre: 'El Loco',
    arquetipo: 'El comienzo sin mapa y la libertad de explorar',
    grupo: 'inicio',
    elemento: 'Aire · Impulso vital',
    palabrasClave: ['Comienzo', 'Espontaneidad', 'Confianza', 'Ligereza'],
    ecoPoetico: 'No hace falta conocer todo el sendero\npara dar el primer paso;\nbasta con llevar liviana la mochila.',
    enLuz: 'Apertura genuina, frescura, animarse a empezar sin exceso de miedo.',
    enSombra: 'Impulsividad sin pausa, evasión de responsabilidades o dispersión.',
    interpretaciones: {
      esencia: {
        yo: 'Hoy es un buen día para soltar la necesidad de tener todo resuelto antes de moverte. El Loco te invita a mirar una situación con ojos nuevos, como si fuera la primera vez, dándote permiso para probar algo distinto sin exigirte perfección.',
        otro: 'Señala un momento de apertura y aire fresco. Invita a explorar una posibilidad nueva con curiosidad, soltando por un rato el peso de querer controlar cada detalle de antemano.'
      },
      luz: {
        yo: 'Tu mayor ventaja ahora es tu capacidad de empezar de cero y no quedarte atrapado en viejas reglas. Tienes frescura, intuición y margen para improvisar a tu favor.',
        otro: 'Su mayor fortaleza en este momento es la autenticidad y la disposición a probar caminos nuevos sin prejuicios rígidos.'
      },
      desafio: {
        yo: 'El riesgo aquí es actuar por mero impulso o evitar un compromiso necesario solo por miedo a sentirte atado. Pregúntate si estás buscando libertad real o simplemente huyendo de algo incómodo.',
        otro: 'Conviene prestar atención a cierta dispersión o prisa por saltar de una cosa a otra sin terminar de mirar dónde pisa.'
      },
      situacion: {
        yo: 'Estás parado en un umbral abierto: algo nuevo quiere empezar, aunque todavía no tenga forma definitiva. Hay incertidumbre, sí, pero también espacio limpio para elegir.',
        otro: 'Se encuentra frente a una etapa nueva o un cambio de aire donde todavía no está todo definido y las opciones siguen abiertas.'
      },
      obstaculo: {
        yo: 'Lo que está frenando el avance puede ser una falta de foco o haber dejado demasiados cabos sueltos esperando que las cosas se acomoden solas.',
        otro: 'El nudo actual puede venir de actuar sin un mínimo de plan o de evitar tomar una decisión concreta por querer dejarlo todo abierto.'
      },
      consejo: {
        yo: 'Aligera la carga mental y atrévete a dar un primer paso pequeño pero real. No necesitas el plan de cinco años para empezar a caminar.',
        otro: 'Sugiérele darse permiso para experimentar sin exigirse resultados perfectos desde el día uno: empezar ligero también es una forma de sabiduría.'
      }
    },
    preguntas: {
      yo: '¿Qué haría si no tuviera tanto miedo a equivocarme al empezar?',
      otro: '¿En qué parte de tu vida sientes ganas de empezar de cero o probar algo sin tanta presión?'
    },
    svg: `
      <circle cx="88" cy="34" r="10" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <path d="M88 18v4M88 46v4M72 34h4M100 34h4M77 23l3 3M96 42l3 3M99 23l-3 3M80 42l-3 3" stroke="var(--accent-ochre)" stroke-width="1.3"/>
      <path d="M22 118 Q44 92 64 110 T98 122" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M20 128 L55 128 L75 140" fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.6"/>
      <path d="M48 86 C48 66, 62 56, 62 42 C54 50, 42 62, 48 86 Z" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
      <path d="M48 86 L46 98 M48 70 L56 62 M48 76 L41 68" stroke="var(--accent-terracotta)" stroke-width="1.2"/>
      <path d="M35 46 Q41 40 46 46 Q51 40 57 46" fill="none" stroke="currentColor" stroke-width="1.3"/>
    `
  },
  {
    id: 1,
    slug: 'el-mago',
    romano: 'I',
    nombre: 'El Mago',
    arquetipo: 'La iniciativa consciente y los recursos en tus manos',
    grupo: 'inicio',
    elemento: 'Aire · Voluntad creativa',
    palabrasClave: ['Recursos', 'Iniciativa', 'Habilidad', 'Enfoque'],
    ecoPoetico: 'Sobre la mesa ya están los elementos;\nfalta solo tu mano decidida\npara volver idea lo que hoy es silencio.',
    enLuz: 'Capacidad de acción, ingenio, claridad para materializar ideas.',
    enSombra: 'Dudar de tu propia capacidad, dispersar talento o querer impresionar de más.',
    interpretaciones: {
      esencia: {
        yo: 'Tienes más herramientas disponibles de las que crees. El Mago te recuerda que este no es momento de esperar una señal externa, sino de usar tu ingenio, tu palabra y lo que ya sabes hacer para poner algo en marcha.',
        otro: 'Habla de potencial activo y recursos a la mano. Es una carta de confianza: quien consulta ya cuenta con la capacidad para dar forma a lo que tiene en mente.'
      },
      luz: {
        yo: 'Tu claridad mental, tu habilidad práctica y tu capacidad de comunicar están listas para trabajar juntas. Cuando enfocas tu atención, avanzas rápido.',
        otro: 'Destaca su talento, versatilidad y poder de iniciativa cuando decide enfocarse en un objetivo concreto.'
      },
      desafio: {
        yo: 'Cuidado con quedarte solo en planes brillantes sin aterrizar ninguno, o con sentir que necesitas "saber más" antes de actuar cuando en realidad ya estás listo.',
        otro: 'Pide cuidado frente a la inseguridad disfrazada de perfeccionismo, o frente a promesas y palabras que aún no se traducen en hechos.'
      },
      situacion: {
        yo: 'Estás en un punto donde tu voluntad y tus decisiones tienen impacto directo. Hay materia prima, talento o una oportunidad lista para trabajarse.',
        otro: 'Se encuentra en una etapa activa, con habilidades, ideas y oportunidades concretas disponibles sobre la mesa.'
      },
      obstaculo: {
        yo: 'Tal vez estás dispersando tu energía en demasiados frentes a la vez o dudando de tu propia capacidad para sostener lo que empiezas.',
        otro: 'El freno puede estar en la falta de enfoque, en querer abarcar demasiado o en subestimar sus propias herramientas.'
      },
      consejo: {
        yo: 'Elige una sola cosa concreta y pon tus manos en ella hoy. Convierte la idea en acción tangible, aunque sea pequeña.',
        otro: 'Invítale a pasar de la idea a la práctica concreta: tiene lo necesario para empezar con lo que ya posee.'
      }
    },
    preguntas: {
      yo: '¿Qué recurso o habilidad mía estoy subestimando o dejando sin usar?',
      otro: 'Si ya tuvieras todo lo necesario para empezar eso que piensas, ¿qué sería lo primero que harías?'
    },
    svg: `
      <path d="M40 34 C40 24, 54 24, 60 34 C66 44, 80 44, 80 34 C80 24, 66 24, 60 34 C54 44, 40 44, 40 34 Z" fill="none" stroke="var(--accent-ochre)" stroke-width="1.6"/>
      <line x1="60" y1="54" x2="60" y2="108" stroke="var(--accent-terracotta)" stroke-width="1.8"/>
      <circle cx="60" cy="51" r="3" fill="var(--accent-terracotta)"/>
      <line x1="22" y1="118" x2="98" y2="118" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="34" cy="96" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M50 86 L50 96 C50 101, 56 101, 56 96 L56 86 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M72 82 L72 103 M68 96 L76 96" stroke="currentColor" stroke-width="1.4"/>
      <path d="M88 84 L92 102" stroke="currentColor" stroke-width="1.5"/>
    `
  },
  {
    id: 2,
    slug: 'la-sacerdotisa',
    romano: 'II',
    nombre: 'La Sacerdotisa',
    arquetipo: 'La escucha interior, el silencio y la intuición serena',
    grupo: 'introspeccion',
    elemento: 'Agua · Sabiduría silenciosa',
    palabrasClave: ['Intuición', 'Silencio', 'Paciencia', 'Misterio'],
    ecoPoetico: 'Lo que aún no tiene nombre\nya respira debajo de las palabras;\nescucha antes de responder.',
    enLuz: 'Lucidez intuitiva, discreción, pausa sabia antes de actuar.',
    enSombra: 'Callar lo que duele por miedo, aislarse o postergar indefinidamente.',
    interpretaciones: {
      esencia: {
        yo: 'No todo se resuelve empujando ni hablando en voz alta. La Sacerdotisa te pide hacer una pausa y prestar atención a lo que ya intuyes en el fondo, eso que sabes sin necesidad de tantas explicaciones.',
        otro: 'Señala un momento de receptividad y escucha interna. Más que correr detrás de respuestas externas, invita a confiar en la propia intuición y observar en calma.'
      },
      luz: {
        yo: 'Cuentas con una sensibilidad fina para leer entre líneas. Sabes guardar la calma, observar sin precipitarte y percibir lo que otros pasan por alto.',
        otro: 'Su fortaleza está en su serenidad, su discreción y una intuición muy lúcida para percibir lo que no se dice explícitamente.'
      },
      desafio: {
        yo: 'Cuidado con quedarte en el silencio por temor al conflicto o con esperar tanto a "sentirte listo" que nunca des el paso.',
        otro: 'Puede indicar que está guardándose demasiado para sí o dudando de lo que intuye por buscar validación afuera.'
      },
      situacion: {
        yo: 'Hay información o sentimientos que todavía están madurando bajo la superficie. No todo está visible aún, y es natural no tener respuestas definitivas hoy.',
        otro: 'Vive un proceso interno profundo y reservado; hay cosas gestándose en silencio que todavía no se muestran del todo.'
      },
      obstaculo: {
        yo: 'El bloqueo viene de ignorar tus propias corazonadas para obedecer solo a la lógica ajena, o bien de quedarte pasivo cuando ya hace falta expresar algo.',
        otro: 'La traba puede ser el exceso de reserva, el ruido mental que tapa la intuición o no querer mirar algo que en el fondo ya sabe.'
      },
      consejo: {
        yo: 'Baja el volumen del ruido externo. Date un rato de silencio hoy, escribe lo que sientes y deja que la respuesta decante sin forzarla.',
        otro: 'Aconséjale no apurarse a decidir hoy: observar con calma, guardar discreción y escuchar esa corazonada que insiste suavemente.'
      }
    },
    preguntas: {
      yo: '¿Qué es eso que en el fondo ya sé, aunque todavía no me anime a admitirlo?',
      otro: 'Si acallaras las opiniones de los demás por un momento, ¿qué te dice tu propia intuición sobre esto?'
    },
    svg: `
      <rect x="26" y="28" width="12" height="98" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <rect x="82" y="28" width="12" height="98" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M52 46 A12 12 0 1 0 68 46 A9 9 0 1 1 52 46 Z" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <rect x="48" y="64" width="24" height="32" rx="2" fill="none" stroke="var(--accent-sage)" stroke-width="1.5"/>
      <line x1="53" y1="74" x2="67" y2="74" stroke="var(--accent-sage)" stroke-width="1.2"/>
      <line x1="53" y1="81" x2="67" y2="81" stroke="var(--accent-sage)" stroke-width="1.2"/>
      <line x1="53" y1="88" x2="62" y2="88" stroke="var(--accent-sage)" stroke-width="1.2"/>
      <path d="M22 134 Q40 129 60 134 T98 134" fill="none" stroke="currentColor" stroke-width="1.3" opacity="0.7"/>
    `
  },
  {
    id: 3,
    slug: 'la-emperatriz',
    romano: 'III',
    nombre: 'La Emperatriz',
    arquetipo: 'La creatividad fértil, el disfrute y el cuidado que nutre',
    grupo: 'vinculo',
    elemento: 'Tierra · Abundancia creativa',
    palabrasClave: ['Creatividad', 'Nutrición', 'Disfrute', 'Fertilidad'],
    ecoPoetico: 'Todo lo que riegas con paciencia\nencuentra su modo de florecer;\ntambién tú mereces habitar el jardín.',
    enLuz: 'Creatividad viva, calidez afectiva, bienestar, proyectos que crecen.',
    enSombra: 'Desgastarse cuidando a todos menos a ti, estancamiento creativo o exceso.',
    interpretaciones: {
      esencia: {
        yo: 'Es tiempo de nutrir lo que quieres ver crecer: un proyecto, un vínculo o tu propio bienestar físico y creativo. La Emperatriz te recuerda que el disfrute sano y el cuidado también producen frutos reales.',
        otro: 'Anuncia fertilidad de ideas, calidez y crecimiento orgánico. Invita a cuidar el cuerpo, crear con placer y confiar en que lo sembrado está tomando vida.'
      },
      luz: {
        yo: 'Tu calidez, tu sensibilidad estética y tu capacidad de hacer crecer lo que tocas están muy vivas ahora.',
        otro: 'Destaca su generosidad, su magnetismo creativo y su facilidad para construir espacios cálidos y fértiles.'
      },
      desafio: {
        yo: 'Revisa si estás dando demasiado hacia afuera mientras descuidas tus propias ganas, o si la comodidad te está impidiendo podar lo que sobra.',
        otro: 'Pide atención por si está cargando con el cuidado de todos a costa de su propio cansancio, o postergando su lado creativo.'
      },
      situacion: {
        yo: 'Lo que estás cultivando tiene potencial de crecimiento y abundancia. Es una etapa receptiva, creativa y ligada al cuerpo, los sentidos y los afectos.',
        otro: 'Se encuentra en una fase fértil, favorable para crear, gestar proyectos, mejorar vínculos o reconectar con el disfrute cotidiano.'
      },
      obstaculo: {
        yo: 'Quizás sientes sequía creativa porque te estás exigiendo resultados mecánicos sin darte espacio para descansar, disfrutar o nutrir la idea.',
        otro: 'El bloqueo puede estar en descuidar su bienestar básico, en la sobreprotección hacia otros o en querer forzar tiempos que necesitan madurar.'
      },
      consejo: {
        yo: 'Trátate con hospitalidad. Cuida tu cuerpo, rodéate de algo bello hoy y dale tiempo y cariño a ese proyecto que quieres ver nacer.',
        otro: 'Invítale a nutrirse primero a sí mismo/a y a disfrutar del proceso de crear sin convertirlo en una obligación seca.'
      }
    },
    preguntas: {
      yo: '¿Qué proyecto, vínculo o parte mía necesita hoy más cuidado y menos exigencia?',
      otro: '¿Qué es lo que hoy te hace sentir vivo/a, nutrido/a o con ganas de crear?'
    },
    svg: `
      <circle cx="60" cy="54" r="16" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.6"/>
      <line x1="60" y1="70" x2="60" y2="96" stroke="var(--accent-terracotta)" stroke-width="1.6"/>
      <line x1="48" y1="83" x2="72" y2="83" stroke="var(--accent-terracotta)" stroke-width="1.6"/>
      <path d="M36 30 L42 24 L48 28 L60 20 L72 28 L78 24 L84 30" fill="none" stroke="var(--accent-ochre)" stroke-width="1.4"/>
      <path d="M28 124 Q44 102 52 124 M92 124 Q76 102 68 124" fill="none" stroke="var(--accent-sage)" stroke-width="1.5"/>
      <path d="M36 112 Q42 108 45 114 M84 112 Q78 108 75 114" fill="none" stroke="var(--accent-sage)" stroke-width="1.3"/>
      <line x1="22" y1="128" x2="98" y2="128" stroke="currentColor" stroke-width="1.4"/>
    `
  },
  {
    id: 4,
    slug: 'el-emperador',
    romano: 'IV',
    nombre: 'El Emperador',
    arquetipo: 'La estructura, los límites claros y la estabilidad',
    grupo: 'orden',
    elemento: 'Fuego / Tierra · Solidez',
    palabrasClave: ['Estructura', 'Límites', 'Orden', 'Autoridad'],
    ecoPoetico: 'También la ternura necesita paredes,\nuna mesa firme donde apoyar las manos\ny decir hasta aquí.',
    enLuz: 'Organización, firmeza serena, proteger lo importante con límites sanos.',
    enSombra: 'Rigidez, terquedad, exceso de control o dificultad para pedir ayuda.',
    interpretaciones: {
      esencia: {
        yo: 'Esta carta pide orden y firmeza tranquila. Hoy te hace bien poner límites claros, organizar tus prioridades y construir una base sólida en lugar de dejar las cosas a la deriva.',
        otro: 'Habla de estabilidad, responsabilidad y estructura. Invita a ordenar lo disperso, asumir el timón propio y sostener límites saludables.'
      },
      luz: {
        yo: 'Tienes capacidad de sostener compromisos, ordenar el caos y proteger tu tiempo y tu energía con claridad.',
        otro: 'Destaca su constancia, criterio firme y habilidad para convertir ideas vagas en algo estable y duradero.'
      },
      desafio: {
        yo: 'Fíjate si tu deseo de seguridad se está volviendo rigidez, control excesivo o miedo a delegar y mostrar vulnerabilidad.',
        otro: 'Pide observar si hay terquedad, dureza consigo mismo/a o necesidad de tener todo bajo control para sentirse seguro.'
      },
      situacion: {
        yo: 'El momento actual requiere orden práctico, reglas claras o asumir responsabilidad sobre una estructura (trabajo, finanzas, rutinas o acuerdos).',
        otro: 'Está lidiando con temas de orden, autoridad, trabajo o la necesidad de afirmar límites claros en su entorno.'
      },
      obstaculo: {
        yo: 'Lo que traba el camino puede ser una postura demasiado inflexible (tuya o de alguien más), o bien la falta total de estructura y disciplina.',
        otro: 'El obstáculo puede estar en la rigidez de querer hacerlo todo a una única manera, o en evitar asumir una decisión firme.'
      },
      consejo: {
        yo: 'Pon orden en lo concreto: define prioridades, di "no" donde haga falta y construye un plan simple que puedas cumplir.',
        otro: 'Aconséjale ordenar primero las bases prácticas y animarse a poner un límite claro con respeto y firmeza.'
      }
    },
    preguntas: {
      yo: '¿Qué límite claro necesito poner (o respetar) esta semana para sentirme más en paz?',
      otro: '¿Qué parte de esta situación mejoraría si pusieras reglas más claras u ordenaras tus prioridades?'
    },
    svg: `
      <rect x="30" y="54" width="60" height="72" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <line x1="30" y1="90" x2="90" y2="90" stroke="currentColor" stroke-width="1.3"/>
      <path d="M40 44 L46 28 L60 36 L74 28 L80 44 Z" fill="none" stroke="var(--accent-ochre)" stroke-width="1.6"/>
      <circle cx="60" cy="72" r="9" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
      <line x1="60" y1="63" x2="60" y2="57" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
      <line x1="56" y1="60" x2="64" y2="60" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
    `
  },
  {
    id: 5,
    slug: 'el-hierofante',
    romano: 'V',
    nombre: 'El Sumo Sacerdote',
    arquetipo: 'La enseñanza compartida, la tradición y la coherencia moral',
    grupo: 'orden',
    elemento: 'Tierra · Transmisión y sentido',
    palabrasClave: ['Aprendizaje', 'Guía', 'Valores', 'Comunidad'],
    ecoPoetico: 'Toda palabra antigua sirve de puente\nsi nos ayuda a caminar hoy;\nlo aprendido también se comparte.',
    enLuz: 'Estudio serio, consejos valiosos, fidelidad a tus valores, pertenencia.',
    enSombra: 'Seguir mandatos ajenos sin cuestionarlos, dogmatismo o miedo a romper el molde.',
    interpretaciones: {
      esencia: {
        yo: 'El Sumo Sacerdote (o Hierofante) invita a volver a tus valores esenciales, aprender de alguien con experiencia o compartir lo que ya sabes. También pregunta si estás actuando por convicción propia o solo por costumbre.',
        otro: 'Habla de aprendizaje, valores, acuerdos compartidos y búsqueda de sentido. Puede señalar tanto el apoyo de un buen consejo como la revisión de creencias heredadas.'
      },
      luz: {
        yo: 'Valoras la coherencia, el aprendizaje profundo y el respeto por los acuerdos. Sabes escuchar y transmitir serenidad.',
        otro: 'Destaca su ética, su sed de aprender en profundidad y su capacidad para ser referente o puente para otros.'
      },
      desafio: {
        yo: 'Observa si estás cargando con deberes o mandatos familiares/sociales que ya no representan quién eres hoy.',
        otro: 'Advierte sobre seguir reglas de memoria por miedo al "qué dirán" o cerrarse a puntos de vista distintos.'
      },
      situacion: {
        yo: 'Estás frente a un proceso de aprendizaje, un acuerdo formal o un momento donde tus creencias y principios están en juego.',
        otro: 'Transita una situación ligada a estudios, mentorías, tradiciones, acuerdos formales o revisión de valores personales.'
      },
      obstaculo: {
        yo: 'El freno puede venir de una creencia rígida ("las cosas siempre se hacen así") o de buscar aprobación en normas externas antes que en tu criterio.',
        otro: 'La dificultad puede nacer de mandatos rígidos, prejuicios o temor a salirse de lo convencional.'
      },
      consejo: {
        yo: 'Apóyate en alguien sabio o en un buen método de estudio, y quédate solo con las tradiciones que sigan teniendo sentido para tu vida actual.',
        otro: 'Sugiérele buscar orientación confiable (un mentor, estudio o conversación honesta) y validar qué valores son realmente suyos.'
      }
    },
    preguntas: {
      yo: '¿Esta regla que estoy siguiendo es una convicción mía o una costumbre heredada?',
      otro: '¿A quién podrías pedirle un consejo honesto hoy, o qué creencia sientes que ya te toca actualizar?'
    },
    svg: `
      <path d="M28 126 L28 52 C28 32, 92 32, 92 52 L92 126" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="60" y1="22" x2="60" y2="54" stroke="var(--accent-ochre)" stroke-width="1.6"/>
      <line x1="50" y1="30" x2="70" y2="30" stroke="var(--accent-ochre)" stroke-width="1.4"/>
      <line x1="47" y1="38" x2="73" y2="38" stroke="var(--accent-ochre)" stroke-width="1.4"/>
      <circle cx="48" cy="84" r="8" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
      <line x1="53" y1="90" x2="74" y2="111" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
      <circle cx="72" cy="84" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="67" y1="90" x2="46" y2="111" stroke="currentColor" stroke-width="1.5"/>
    `
  },
  {
    id: 6,
    slug: 'los-enamorados',
    romano: 'VI',
    nombre: 'Los Enamorados',
    arquetipo: 'La elección desde el corazón y el encuentro genuino',
    grupo: 'vinculo',
    elemento: 'Aire · Vínculo y decisión',
    palabrasClave: ['Elección', 'Afinidad', 'Deseo', 'Coherencia'],
    ecoPoetico: 'Amar y elegir se parecen tanto:\nen ambos hay que soltar mil caminos\npara quedarse en uno de verdad.',
    enLuz: 'Conexión auténtica, armonía en vínculos, elegir desde el deseo propio.',
    enSombra: 'Indecisión paralizante, querer quedar bien con todos o contradicción interna.',
    interpretaciones: {
      esencia: {
        yo: 'Más allá del romance, Los Enamorados hablan de elegir con el corazón alineado a tus valores. Algo te invita a comprometerte de verdad con lo que sí quieres, en lugar de quedarte a medias.',
        otro: 'Señala un momento de encuentro, afinidad o una decisión importante donde pesan el afecto, el deseo genuino y la coherencia personal.'
      },
      luz: {
        yo: 'Hay apertura afectiva, honestidad y capacidad de construir vínculos o alianzas desde el respeto mutuo y la elección libre.',
        otro: 'Refleja vínculos sinceros, sintonía con el otro y claridad para elegir aquello que realmente le entusiasma.'
      },
      desafio: {
        yo: 'Cuidado con la duda eterna de no querer renunciar a ninguna opción, o con tomar decisiones solo para complacer a alguien más.',
        otro: 'Señala posible indecisión entre dos caminos o tensiones entre lo que desea y lo que siente que "debería" hacer.'
      },
      situacion: {
        yo: 'Estás ante una encrucijada o en medio de un vínculo relevante. Hay algo que te atrae y te pide definir una postura sincera.',
        otro: 'Se encuentra frente a una decisión significativa o en un momento clave dentro de una relación o alianza.'
      },
      obstaculo: {
        yo: 'La parálisis aparece cuando intentas elegir sin perder nada, o cuando tu cabeza y tu corazón tiran para lados opuestos.',
        otro: 'El nudo puede estar en la indecisión, el miedo a equivocarse de camino o la falta de diálogo claro en un vínculo.'
      },
      consejo: {
        yo: 'Elige aquello que esté en paz con quién eres, no lo que solo se ve bien desde afuera. Un "sí" honesto ordena todo lo demás.',
        otro: 'Anímale a decidir desde su deseo auténtico y sus valores, aceptando que toda elección valiosa implica dejar otras puertas atrás.'
      }
    },
    preguntas: {
      yo: '¿Qué decisión estoy postergando por miedo a renunciar a la otra opción?',
      otro: 'Si eligieras únicamente desde lo que sientes verdadero para ti, ¿hacia dónde te inclinarías?'
    },
    svg: `
      <circle cx="60" cy="34" r="11" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <path d="M60 17v4M60 47v4M43 34h4M73 34h4M48 22l3 3M69 43l3 3M72 22l-3 3M51 43l-3 3" stroke="var(--accent-ochre)" stroke-width="1.2"/>
      <circle cx="48" cy="86" r="18" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
      <circle cx="72" cy="86" r="18" fill="none" stroke="var(--accent-sage)" stroke-width="1.5"/>
      <path d="M40 126 Q60 112 80 126" fill="none" stroke="currentColor" stroke-width="1.4"/>
    `
  },
  {
    id: 7,
    slug: 'el-carro',
    romano: 'VII',
    nombre: 'El Carro',
    arquetipo: 'El avance decidido y la dirección en medio de fuerzas opuestas',
    grupo: 'inicio',
    elemento: 'Agua / Fuego · Dirección e impulso',
    palabrasClave: ['Avance', 'Determinación', 'Rumbo', 'Coraje'],
    ecoPoetico: 'No hace falta que los dos caballos\npiensen igual;\nbasta que sostengas firmes las riendas.',
    enLuz: 'Progreso rápido, triunfo mediante constancia, tomar el volante de tu vida.',
    enSombra: 'Atropellar procesos, ir sin rumbo claro o pelear contra tus propias emociones.',
    interpretaciones: {
      esencia: {
        yo: 'Es hora de moverte con decisión. El Carro no promete ausencia de tensiones, sino la capacidad de tomar las riendas de emociones o ideas opuestas para avanzar hacia una meta clara.',
        otro: 'Anuncia movimiento, impulso y conquista de metas. Es una invitación a tomar el volante y avanzar con foco.'
      },
      luz: {
        yo: 'Tienes empuje, determinación y capacidad de superar obstáculos si mantienes la vista en el rumbo.',
        otro: 'Muestra gran empuje, valentía y habilidad para coordinar distintos frentes y seguir adelante.'
      },
      desafio: {
        yo: 'Fíjate si estás corriendo demasiado rápido sin revisar hacia dónde vas, o si estás forzando situaciones a pura presión.',
        otro: 'Conviene vigilar la impaciencia, la prisa excesiva o el desgaste de querer ganarlo todo a la fuerza.'
      },
      situacion: {
        yo: 'Las cosas están tomando velocidad o te piden tomar una iniciativa firme, un viaje, cambio o proyecto que requiere conducción clara.',
        otro: 'Está en pleno movimiento o frente a un reto que le exige tomar el control del rumbo y avanzar.'
      },
      obstaculo: {
        yo: 'Puedes sentir que avanzas a tirones porque una parte de ti quiere ir hacia adelante y otra duda, o porque intentas controlar demasiado el camino.',
        otro: 'El obstáculo puede venir de fuerzas internas contradictorias que tiran en sentidos opuestos o de avanzar con prisa desordenada.'
      },
      consejo: {
        yo: 'Define bien tu destino antes de acelerar y mantén el foco: avanzar con constancia vale más que correr sin dirección.',
        otro: 'Sugiérele elegir una dirección clara, tomar las riendas con calma y avanzar sin dispersarse en batallas secundarias.'
      }
    },
    preguntas: {
      yo: '¿Hacia dónde quiero dirigir realmente mi energía este mes, y qué debo dejar de lado para avanzar?',
      otro: '¿Qué parte de esta situación pide que tomes las riendas con más decisión?'
    },
    svg: `
      <rect x="36" y="42" width="48" height="58" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M36 42 L60 28 L84 42" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <circle cx="60" cy="70" r="14" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.6"/>
      <circle cx="60" cy="70" r="3" fill="var(--accent-terracotta)"/>
      <path d="M22 108 L42 108 M78 108 L98 108 M28 118 L92 118" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="42" cy="118" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="78" cy="118" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/>
    `
  },
  {
    id: 8,
    slug: 'la-justicia',
    romano: 'VIII',
    notaNumeracion: 'VIII en Marsella · XI en Rider-Waite',
    nombre: 'La Justicia',
    arquetipo: 'La claridad objetiva, el equilibrio y la honestidad con uno mismo',
    grupo: 'orden',
    elemento: 'Aire · Equilibrio y verdad',
    palabrasClave: ['Claridad', 'Equilibrio', 'Responsabilidad', 'Honestidad'],
    ecoPoetico: 'Mirar las cosas sin maquillaje\nno es crueldad:\nes la única forma de equilibrar la balanza.',
    enLuz: 'Decisiones justas, lucidez, asumir tu parte y ordenar acuerdos.',
    enSombra: 'Autoexigencia severa, juicio duro contigo o con otros, frialdad excesiva.',
    interpretaciones: {
      esencia: {
        yo: 'La Justicia pide honestidad serena y mirada clara. No se trata de culparte ni de juzgar con dureza, sino de poner las cartas sobre la mesa, ver qué parte te corresponde y buscar un trato justo contigo y con los demás.',
        otro: 'Habla de claridad mental, acuerdos equitativos y coherencia entre lo que se siembra y lo que se cosecha. Pide mirar los hechos con objetividad y calma.'
      },
      luz: {
        yo: 'Tu criterio es claro y puedes evaluar la situación sin dejarte arrastrar por el drama. Sabes actuar con integridad.',
        otro: 'Destaca su sentido ético, objetividad y capacidad de poner orden justo en acuerdos o decisiones difíciles.'
      },
      desafio: {
        yo: 'Cuidado con volverte un juez implacable contigo mismo o con exigir una perfección rígida en lugar de equilibrio humano.',
        otro: 'Advierte sobre el exceso de autocrítica, el juicio duro hacia otros o la dificultad para soltar la necesidad de "tener la razón".'
      },
      situacion: {
        yo: 'Es un momento de balance: evaluar resultados, firmar acuerdos, aclarar cuentas o mirar con sinceridad qué está equilibrado y qué no.',
        otro: 'Atraviesa un momento de evaluación, toma de decisiones racionales, trámites o ajuste de cuentas en un vínculo o proyecto.'
      },
      obstaculo: {
        yo: 'Algo puede estar desbalanceado (das demasiado y recibes poco, o evitas asumir tu cuota de responsabilidad en un asunto).',
        otro: 'El nudo puede venir de un desequilibrio entre dar y recibir, o de juzgar la situación con demasiada severidad.'
      },
      consejo: {
        yo: 'Sé totalmente honesto contigo hoy y busca el punto medio: asume lo tuyo sin cargar culpas ajenas y pon claridad en los acuerdos.',
        otro: 'Invítale a evaluar los hechos con calma y objetividad, buscando un acuerdo justo donde también se cuide a sí mismo/a.'
      }
    },
    preguntas: {
      yo: 'Si mirara esta situación desde afuera con total honestidad, ¿qué vería fuera de equilibrio?',
      otro: '¿Qué necesitas poner en claro o equilibrar entre lo que das y lo que recibes en este asunto?'
    },
    svg: `
      <line x1="60" y1="24" x2="60" y2="124" stroke="currentColor" stroke-width="1.6"/>
      <line x1="50" y1="42" x2="70" y2="42" stroke="currentColor" stroke-width="1.5"/>
      <line x1="28" y1="62" x2="92" y2="62" stroke="var(--accent-ochre)" stroke-width="1.6"/>
      <path d="M28 62 L20 92 L36 92 Z" fill="none" stroke="var(--accent-ochre)" stroke-width="1.3"/>
      <path d="M20 92 Q28 100 36 92" fill="none" stroke="var(--accent-ochre)" stroke-width="1.4"/>
      <path d="M92 62 L84 92 L100 92 Z" fill="none" stroke="var(--accent-ochre)" stroke-width="1.3"/>
      <path d="M84 92 Q92 100 100 92" fill="none" stroke="var(--accent-ochre)" stroke-width="1.4"/>
      <circle cx="60" cy="24" r="3.5" fill="var(--accent-terracotta)"/>
    `
  },
  {
    id: 9,
    slug: 'el-ermitano',
    romano: 'IX',
    nombre: 'El Ermitaño',
    arquetipo: 'La pausa consciente y la luz propia en el silencio',
    grupo: 'introspeccion',
    elemento: 'Tierra · Sabiduría interior',
    palabrasClave: ['Introspección', 'Pausa', 'Madurez', 'Búsqueda'],
    ecoPoetico: 'Quien camina despacio con su propio farol\nno está perdido:\nestá aprendiendo a ver en la quietud.',
    enLuz: 'Reflexión profunda, autonomía, sabiduría ganada con experiencia.',
    enSombra: 'Aislamiento por tristeza, cerrarse al apoyo ajeno o dar demasiadas vueltas en la mente.',
    interpretaciones: {
      esencia: {
        yo: 'El Ermitaño no habla de soledad triste, sino de retiro necesario para escucharte sin el ruido del mundo. Tu propio farol ilumina solo el paso inmediato, y con eso alcanza.',
        otro: 'Invita a hacer una pausa tranquila, bajar el ritmo y buscar respuestas propias en lugar de correr detrás de lo que opina todo el mundo.'
      },
      luz: {
        yo: 'Tienes madurez, profundidad y capacidad de encontrar calma y sentido dentro de ti sin depender de distracciones.',
        otro: 'Refleja serenidad, criterio propio, sabiduría práctica y necesidad sana de espacio personal.'
      },
      desafio: {
        yo: 'Fíjate que tu necesidad de espacio no se convierta en aislamiento defensivo o en rumiar los mismos pensamientos en bucle.',
        otro: 'Pide cuidado si la búsqueda de silencio se está volviendo encierro o resistencia a pedir ayuda cuando la necesita.'
      },
      situacion: {
        yo: 'Estás en un momento de introspección, revisión personal o menor exposición social. Es sano avanzar despacio y procesar lo vivido.',
        otro: 'Transita una etapa más introspectiva, donde prefiere pensar las cosas con calma antes de exponerse o decidir.'
      },
      obstaculo: {
        yo: 'Puede que estés sintiendo distancia de los demás o dándole demasiadas vueltas en soledad a algo que aliviaría compartir.',
        otro: 'El bloqueo puede estar en aislarse demasiado o, al contrario, en no darse ni diez minutos de silencio para escucharse.'
      },
      consejo: {
        yo: 'Regálate una pausa real sin pantallas ni prisas. No necesitas iluminar todo el año: confía en el siguiente paso que ya ves claro.',
        otro: 'Aconséjale tomarse un respiro sin culpa, alejarse un poco del ruido y escuchar su propio criterio antes de mover ficha.'
      }
    },
    preguntas: {
      yo: '¿Qué respuesta aparece cuando dejo de buscar afuera y me doy un rato de calma?',
      otro: '¿Necesitas más espacio para pensar en calma, o sientes que ya es hora de compartir lo que llevas por dentro?'
    },
    svg: `
      <path d="M18 126 L46 74 L68 102 L86 82 L104 126" fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.6"/>
      <line x1="38" y1="54" x2="38" y2="124" stroke="currentColor" stroke-width="1.5"/>
      <polygon points="64,46 78,46 82,72 60,72" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <line x1="71" y1="36" x2="71" y2="46" stroke="var(--accent-ochre)" stroke-width="1.4"/>
      <path d="M71 53 L73.5 58 L78.5 58.5 L74.5 62 L75.5 67 L71 64.5 L66.5 67 L67.5 62 L63.5 58.5 L68.5 58 Z" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.2"/>
    `
  },
  {
    id: 10,
    slug: 'la-rueda-de-la-fortuna',
    romano: 'X',
    nombre: 'La Rueda de la Fortuna',
    arquetipo: 'Los ciclos cambiantes y el movimiento inesperado',
    grupo: 'cambio',
    elemento: 'Fuego · Ciclo y oportunidad',
    palabrasClave: ['Ciclos', 'Cambio', 'Oportunidad', 'Adaptación'],
    ecoPoetico: 'Nada se queda quieto para siempre:\nlo que hoy sube mañana enseña el envés,\ny en el centro vive la calma.',
    enLuz: 'Giro favorable, sincronía, soltar la rigidez y aprovechar el cambio de aire.',
    enSombra: 'Sentirse a merced de la suerte, resistirse al cambio o repetir patrones cíclicos.',
    interpretaciones: {
      esencia: {
        yo: 'Las cosas están girando. La Rueda recuerda que nada es estático: ni los buenos momentos duran sin cuidado, ni las rachas difíciles son eternas. La clave está en moverte con el giro sin perder tu centro.',
        otro: 'Habla de cambio de ciclo, movimiento imprevisto o una oportunidad que aparece cuando menos se fuerza. Invita a adaptarse con flexibilidad.'
      },
      luz: {
        yo: 'Tienes capacidad de adaptarte a los giros inesperados y detectar oportunidades justo cuando el panorama se mueve.',
        otro: 'Señala viento de cambio, apertura a lo imprevisto y buena fortuna cuando se anima a fluir con el movimiento.'
      },
      desafio: {
        yo: 'Observa si estás repitiendo siempre la misma historia esperando resultados distintos, o si te cuesta aceptar que algo ya cambió de fase.',
        otro: 'Advierte sobre sentir que no tiene control de nada o repetir viejos ciclos por costumbre.'
      },
      situacion: {
        yo: 'Estás en un punto de inflexión o cambio de etapa. Hay movimiento externo que te saca de la rutina habitual.',
        otro: 'Vive un giro de situación, un cierre o apertura de ciclo donde las circunstancias están cambiando rápidamente.'
      },
      obstaculo: {
        yo: 'La resistencia aparece al querer congelar algo que naturalmente está cambiando, o al quedar pasivo esperando que "la suerte" lo resuelva todo.',
        otro: 'El freno puede ser aferrarse a cómo eran las cosas antes, o quedarse esperando pasivamente a que el destino haga el trabajo.'
      },
      consejo: {
        yo: 'Mantén tu centro mientras alrededor gira la rueda. Aprovecha la ventana de cambio que se abre hoy y evita repetir viejos reflejos.',
        otro: 'Aconséjale aceptar que la etapa está cambiando: soltar el control rígido y aprovechar la oportunidad nueva que trae el movimiento.'
      }
    },
    preguntas: {
      yo: '¿Qué patrón repetitivo estoy notando en mi vida y qué puedo hacer distinto esta vez?',
      otro: 'Ante este cambio de etapa, ¿qué te ayuda a mantener los pies en la tierra mientras todo se mueve?'
    },
    svg: `
      <circle cx="60" cy="76" r="34" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="60" cy="76" r="22" fill="none" stroke="var(--accent-ochre)" stroke-width="1.3"/>
      <circle cx="60" cy="76" r="5" fill="var(--accent-terracotta)"/>
      <line x1="60" y1="42" x2="60" y2="110" stroke="currentColor" stroke-width="1.2"/>
      <line x1="26" y1="76" x2="94" y2="76" stroke="currentColor" stroke-width="1.2"/>
      <line x1="36" y1="52" x2="84" y2="100" stroke="currentColor" stroke-width="1.1"/>
      <line x1="84" y1="52" x2="36" y2="100" stroke="currentColor" stroke-width="1.1"/>
      <path d="M52 28 L60 22 L68 28" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
    `
  },
  {
    id: 11,
    slug: 'la-fuerza',
    romano: 'XI',
    notaNumeracion: 'XI en Marsella · VIII en Rider-Waite',
    nombre: 'La Fuerza',
    arquetipo: 'La valentía serena que abraza lo intenso sin violencia',
    grupo: 'orden',
    elemento: 'Fuego · Fortaleza suave',
    palabrasClave: ['Coraje', 'Templanza', 'Paciencia', 'Compasión'],
    ecoPoetico: 'No vence quien grita más fuerte,\nsino quien sabe tocar con mano quieta\nlo que ruge por dentro.',
    enLuz: 'Fortaleza amable, paciencia valiente, domar impulsos con afecto y firmeza.',
    enSombra: 'Cansancio por aguantar demasiado, reprimir emociones o dudar de tu vigor.',
    interpretaciones: {
      esencia: {
        yo: 'La verdadera fuerza aquí no es dureza ni fuerza bruta, sino firmeza amable. Puedes mirar de frente un miedo, una rabia o un desafío grande y sostenerlo con paciencia y coraje.',
        otro: 'Habla de valentía serena, dominio propio y ternura firme. Recuerda que se logra mucho más con paciencia y corazón tranquilo que a golpes de exigencia.'
      },
      luz: {
        yo: 'Tienes una enorme resistencia emocional y capacidad de transformar impulsos difíciles en energía constructiva.',
        otro: 'Destaca su coraje tranquilo, su paciencia y su capacidad para calmar situaciones intensas con firmeza y empatía.'
      },
      desafio: {
        yo: 'Revisa si estás "aguantando todo" en silencio hasta agotarte, o si estás peleando contigo mismo por sentir emociones intensas.',
        otro: 'Pide cuidar el agotamiento por sobreesfuerzo o el intento de reprimir emociones que piden ser escuchadas con respeto.'
      },
      situacion: {
        yo: 'Estás atravesando una situación intensa que pide temple, paciencia y trato amable hacia tu propia vulnerabilidad o la de otros.',
        otro: 'Se encuentra ante un reto que requiere entereza emocional, paciencia y mucha compasión consigo mismo/a.'
      },
      obstaculo: {
        yo: 'El bloqueo puede ser dudar de tu capacidad para sostener un proceso largo, o reaccionar desde el impulso y la impaciencia.',
        otro: 'La traba puede estar en el cansancio acumulado, el miedo a desbordarse o intentar resolver con dureza algo que pide tacto.'
      },
      consejo: {
        yo: 'Respira hondo y ve con calma firme. No reprimas lo que sientes ni te rindas antes de tiempo: tienes más temple del que imaginas.',
        otro: 'Recuérdale que no necesita dureza para ser fuerte: avanzar con calma, constancia y amabilidad consigo mismo/a es su mayor poder.'
      }
    },
    preguntas: {
      yo: '¿Qué emoción intensa en mí necesita hoy ser abrazada con paciencia en lugar de ser juzgada?',
      otro: '¿Dónde sientes que necesitas más paciencia y trato amable contigo en lugar de exigirte a la fuerza?'
    },
    svg: `
      <path d="M44 36 C44 28, 55 28, 60 36 C65 44, 76 44, 76 36 C76 28, 65 28, 60 36 C55 44, 44 44, 44 36 Z" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <circle cx="60" cy="82" r="22" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.6"/>
      <circle cx="60" cy="82" r="12" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M60 54v6M60 104v6M32 82h6M82 82h6M40 62l4 4M76 98l4 4M80 62l-4 4M44 98l-4 4" stroke="var(--accent-terracotta)" stroke-width="1.3"/>
    `
  },
  {
    id: 12,
    slug: 'el-colgado',
    romano: 'XII',
    nombre: 'El Colgado',
    arquetipo: 'La pausa voluntaria y el cambio radical de perspectiva',
    grupo: 'introspeccion',
    elemento: 'Agua · Nueva mirada',
    palabrasClave: ['Perspectiva', 'Pausa', 'Rendición sabia', 'Reevaluación'],
    ecoPoetico: 'A veces el mundo no está al revés:\nsolo cambia de altura la mirada\npara mostrar lo que de pie no veías.',
    enLuz: 'Pausa reveladora, soltar la lucha inútil, ver un problema desde otro ángulo.',
    enSombra: 'Estancamiento, victimismo o quedarse colgado en algo que ya pide acción.',
    notaTranquila: 'Esta carta no anuncia castigo ni desgracia: representa una pausa para ver distinto cuando empujar ya no funciona.',
    interpretaciones: {
      esencia: {
        yo: 'El Colgado invita a dejar de empujar una puerta que hoy no abre. En lugar de pelear con la espera, aprovecha la pausa para mirar el asunto completamente al revés: ahí suele aparecer la salida que no veías.',
        otro: 'Señala un tiempo de suspensión y cambio de punto de vista. Sugiere que forzar la situación ahora desgasta, mientras que mirar desde otro ángulo trae lucidez.'
      },
      luz: {
        yo: 'Sabes soltar la terquedad cuando hace falta y tienes la capacidad de replantear una idea desde cero.',
        otro: 'Destaca su capacidad de reflexión, desprendimiento y creatividad para ver soluciones poco convencionales.'
      },
      desafio: {
        yo: 'Cuida no quedarte cómodo en la indecisión o en el rol de "no puedo hacer nada" cuando en realidad sí tienes margen de movimiento.',
        otro: 'Advierte sobre prolongar demasiado una espera pasiva o sacrificarse de más esperando que otros cambien.'
      },
      situacion: {
        yo: 'Sientes que algo está en pausa o suspendido. Aunque por fuera parezca que no avanza, por dentro estás reacomodando tu forma de ver el tema.',
        otro: 'Atraviesa una situación momentáneamente frenada o en compás de espera, que obliga a replantear expectativas.'
      },
      obstaculo: {
        yo: 'Lo que traba la situación es seguir mirando el problema exactamente de la misma manera de siempre mientras esperas un milagro.',
        otro: 'El nudo actual está en insistir con el mismo enfoque que ya no da resultado, o en permanecer paralizado por sacrificio.'
      },
      consejo: {
        yo: 'No fuerces hoy. Cuestiona tu supuesto principal ("¿y si fuera al revés?") y acepta una pausa consciente para recalibrar.',
        otro: 'Sugiérele frenar el forcejeo un momento y probar hacerse una pregunta completamente distinta sobre el problema.'
      }
    },
    preguntas: {
      yo: '¿Qué cambiaría si dejara de pelear con esta demora y mirara la situación desde otro lugar?',
      otro: 'Si le dieras la vuelta por completo a lo que das por sentado en este tema, ¿qué otra opción aparecería?'
    },
    svg: `
      <line x1="28" y1="30" x2="92" y2="30" stroke="currentColor" stroke-width="1.8"/>
      <line x1="60" y1="30" x2="60" y2="90" stroke="currentColor" stroke-width="1.5"/>
      <path d="M40 30 Q44 22 50 30 M70 30 Q75 21 82 30" fill="none" stroke="var(--accent-sage)" stroke-width="1.4"/>
      <circle cx="60" cy="108" r="14" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="60" cy="108" r="7" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
    `
  },
  {
    id: 13,
    slug: 'la-muerte',
    romano: 'XIII',
    nombre: 'La Muerte',
    arquetipo: 'El cierre definitivo de un ciclo y el espacio limpio para renacer',
    grupo: 'cambio',
    elemento: 'Agua · Transformación profunda',
    palabrasClave: ['Cierre', 'Transformación', 'Desapego', 'Renacer'],
    ecoPoetico: 'La hoja que cae no traiciona al árbol:\nhace espacio limpio en la rama\npara que vuelva la primavera.',
    enLuz: 'Cerrar etapas con honestidad, dejar ir lo agotado, transformación liberadora.',
    enSombra: 'Aferrarse por miedo a algo que ya terminó o temerle al vacío entre etapas.',
    notaTranquila: 'En el tarot, el Arcano XIII casi nunca habla de muerte física: simboliza el fin natural de una etapa, hábito o etapa vital para dar paso a otra nueva.',
    interpretaciones: {
      esencia: {
        yo: 'Algo ya cumplió su ciclo. La Muerte no viene a quitarte nada vivo, sino a ayudarte a soltar lo que ya está agotado para que deje de ocupar espacio y energía en tu presente.',
        otro: 'Habla de una transformación profunda y necesaria: cerrar una etapa, hábito o forma de hacer las cosas para poder empezar algo verdaderamente nuevo.'
      },
      luz: {
        yo: 'Tienes capacidad de despedir etapas con madurez y renovarte de raíz cuando algo deja de tener sentido.',
        otro: 'Muestra valentía para cerrar capítulos, hacer limpieza profunda y abrir espacio a una versión más auténtica de sí mismo/a.'
      },
      desafio: {
        yo: 'El dolor innecesario viene cuando te aferras con uñas y dientes a una rutina, expectativa o vínculo que hace rato pide cierre.',
        otro: 'Señala resistencia a soltar el pasado o miedo al período de transición entre lo que termina y lo que aún no empieza.'
      },
      situacion: {
        yo: 'Estás atravesando un fin de etapa claro (un cambio de hábitos, cierre de proyecto, despedida o mudanza interior). El cambio ya está ocurriendo.',
        otro: 'Se encuentra en un proceso real de cierre y transformación; algo en su vida está cambiando de piel.'
      },
      obstaculo: {
        yo: 'Lo que frena tu avance es intentar revivir o sostener algo que ya dio todo lo que podía dar.',
        otro: 'El obstáculo viene de no animarse a dar por terminada una etapa o querer pasar a lo nuevo cargando con todo lo viejo.'
      },
      consejo: {
        yo: 'Agradece lo que esta etapa te dio, despídela con honestidad y suelta lo que ya no cabe en tu presente.',
        otro: 'Acompáñale con serenidad a reconocer qué ciclo ya terminó y recordarle que el alivio llega después de soltar.'
      }
    },
    preguntas: {
      yo: '¿Qué parte de mi pasado o de mis hábitos ya cumplió su ciclo y me está pidiendo despedida?',
      otro: '¿Qué cosa sientes que ya cumplió su tiempo en tu vida, aunque todavía dé un poco de vértigo soltarla?'
    },
    svg: `
      <line x1="20" y1="108" x2="100" y2="108" stroke="currentColor" stroke-width="1.5"/>
      <path d="M40 108 A20 20 0 0 1 80 108" fill="none" stroke="var(--accent-ochre)" stroke-width="1.6"/>
      <line x1="60" y1="78" x2="60" y2="83" stroke="var(--accent-ochre)" stroke-width="1.4"/>
      <line x1="36" y1="88" x2="40" y2="91" stroke="var(--accent-ochre)" stroke-width="1.4"/>
      <line x1="84" y1="88" x2="80" y2="91" stroke="var(--accent-ochre)" stroke-width="1.4"/>
      <circle cx="60" cy="48" r="11" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.4"/>
      <circle cx="60" cy="48" r="3" fill="var(--accent-terracotta)"/>
      <path d="M60 32v5M60 59v5M44 48h5M71 48h5" stroke="var(--accent-terracotta)" stroke-width="1.3"/>
    `
  },
  {
    id: 14,
    slug: 'la-templanza',
    romano: 'XIV',
    nombre: 'La Templanza',
    arquetipo: 'La calma alquímica, la mezcla paciente y la sanación',
    grupo: 'vinculo',
    elemento: 'Fuego / Agua · Armonía',
    palabrasClave: ['Equilibrio', 'Paciencia', 'Integración', 'Calma'],
    ecoPoetico: 'Agua tibia entre dos vasos:\nni el fuego quema ni el frío paraliza\ncuando encuentras tu medida justa.',
    enLuz: 'Serenidad, reconciliación de opuestos, sanación gradual, ritmo sano.',
    enSombra: 'Impaciencia, extremos emocionales o querer resultados instantáneos.',
    interpretaciones: {
      esencia: {
        yo: 'La Templanza trae respiro. Te invita a encontrar el punto medio entre los extremos, mezclar con paciencia partes distintas de tu vida y confiar en los procesos graduales que sí sanan.',
        otro: 'Transmite calma, moderación e integración. Indica que es momento de bajar revoluciones, conciliar opuestos y respetar los tiempos naturales de las cosas.'
      },
      luz: {
        yo: 'Tienes capacidad de dialogar, serenar el ambiente y combinar responsabilidades y descanso sin irte a los extremos.',
        otro: 'Destaca su templanza, tacto diplomático y habilidad para sanar tensiones paso a paso.'
      },
      desafio: {
        yo: 'Observa si estás oscilando entre el "todo o nada" o desesperándote porque un proceso de sanación o cambio toma tiempo.',
        otro: 'Advierte sobre la impaciencia, los bandazos de ánimo o el querer apurar procesos que requieren cocción lenta.'
      },
      situacion: {
        yo: 'Después de movimiento o tensión, buscas estabilidad, diálogo o un ritmo cotidiano más amable y sostenible.',
        otro: 'Atraviesa un momento de ajuste, recuperación o búsqueda de armonía entre distintas áreas de su vida.'
      },
      obstaculo: {
        yo: 'El problema puede estar en la impaciencia o en mantener posturas de todo o nada que impiden llegar a acuerdos.',
        otro: 'El obstáculo puede nacer de irse a los extremos, de la prisa o de no darse tiempo para asimilar lo vivido.'
      },
      consejo: {
        yo: 'No te vayas al extremo hoy. Mezcla acción con descanso, escucha ambos lados y deja que el tiempo haga su parte.',
        otro: 'Invítale a bajar un cambio, buscar el punto medio y confiar en los pequeños pasos constantes más que en los golpes de efecto.'
      }
    },
    preguntas: {
      yo: '¿En qué área de mi vida me fui a un extremo y necesito volver a un ritmo más amable?',
      otro: '¿Qué dos aspectos de tu vida necesitan hoy conversar y encontrar un punto medio?'
    },
    svg: `
      <path d="M32 42 L48 42 L44 64 L36 64 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M72 90 L88 90 L84 112 L76 112 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M46 54 C64 56, 56 84, 74 96" fill="none" stroke="var(--accent-sage)" stroke-width="1.7"/>
      <path d="M46 60 C60 62, 54 88, 74 102" fill="none" stroke="var(--accent-sage)" stroke-width="1.2" opacity="0.7"/>
      <polygon points="60,26 70,42 50,42" fill="none" stroke="var(--accent-ochre)" stroke-width="1.4"/>
    `
  },
  {
    id: 15,
    slug: 'el-diablo',
    romano: 'XV',
    nombre: 'El Diablo',
    arquetipo: 'Los apegos, los miedos disfrazados y el deseo sin filtro',
    grupo: 'cambio',
    elemento: 'Tierra · Sombra y deseo',
    palabrasClave: ['Apego', 'Deseo', 'Tentación', 'Liberación'],
    ecoPoetico: 'Mira bien los eslabones que temes:\nestán sueltos alrededor del cuello;\nsolo esperan que te animes a quitarlos.',
    enLuz: 'Reconocer tus deseos sin hipocresía, recuperar poder personal, romper ataduras.',
    enSombra: 'Relaciones o hábitos absorbentes, miedo, culpa o ceder el propio poder.',
    notaTranquila: 'No representa maldad sobrenatural ni "energías oscuras": simboliza nuestros propios apegos, tentaciones, miedos o dependencias de las que sí podemos soltarnos.',
    interpretaciones: {
      esencia: {
        yo: 'El Diablo señala un lugar donde sientes atadura: un hábito, una relación, el miedo al qué dirán o la obsesión por el control o el dinero. La buena noticia es que las cadenas suelen ser más flojas de lo que parecen.',
        otro: 'Pone foco en los apegos, las ganas intensas o las dependencias que quitan libertad. Invita a mirar con honestidad qué nos ata y recordar que siempre hay margen para elegir distinto.'
      },
      luz: {
        yo: 'Cuando miras tu sombra de frente sin culpa, recuperas tu vitalidad, tu deseo genuino y tu poder de decisión.',
        otro: 'Señala una enorme energía vital y pasión que, bien encauzada y sin dependencias, se vuelve fuerza creativa.'
      },
      desafio: {
        yo: 'Fíjate dónde estás diciendo "no tengo opción" cuando en realidad te cuesta renunciar a la comodidad o a la aprobación de algo tóxico.',
        otro: 'Advierte sobre dinámicas de control, obsesión, miedo o vínculos/hábitos donde siente que perdió su libertad.'
      },
      situacion: {
        yo: 'Hay algo que te atrae mucho o te genera ansiedad y dependencia (un hábito, trabajo absorbente, apego afectivo o temor material).',
        otro: 'Está lidiando con una tentación, un hábito difícil, presión material o un vínculo donde cuesta poner distancia.'
      },
      obstaculo: {
        yo: 'El obstáculo real es un apego o miedo que te hace ceder tu propio criterio. Mientras sigas alimentando esa dinámica por culpa o inercia, pesa más.',
        otro: 'El freno está en una atadura emocional o mental (culpa, miedo a perder seguridad, dependencia) que impide actuar libremente.'
      },
      consejo: {
        yo: 'Nombra sin miedo eso que te ata y prueba dar un paso pequeño hacia tu libertad. No te castigues: observa el gancho y empieza a soltarlo.',
        otro: 'Sugiérele mirar con sinceridad dónde siente que cedió su libertad y recordarle que las cadenas están más abiertas de lo que parece.'
      }
    },
    preguntas: {
      yo: '¿En qué situación siento que "no tengo salida", cuando en realidad me da miedo soltar algo?',
      otro: '¿Qué hábito, miedo o compromiso sientes que te quita más libertad de la que te da?'
    },
    svg: `
      <path d="M40 36 Q60 56 80 36" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.6"/>
      <circle cx="60" cy="64" r="14" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M48 92 C42 92, 42 106, 48 106 L55 106" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M72 92 C78 92, 78 106, 72 106 L65 106" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="60" y1="100" x2="60" y2="124" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <path d="M55 86 L60 76 L65 86 Z" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.4"/>
    `
  },
  {
    id: 16,
    slug: 'la-torre',
    romano: 'XVI',
    nombre: 'La Torre',
    arquetipo: 'El derrumbe de lo falso y la verdad que libera',
    grupo: 'cambio',
    elemento: 'Fuego · Sacudida reveladora',
    palabrasClave: ['Revelación', 'Ruptura', 'Verdad', 'Despertar'],
    ecoPoetico: 'Solo cae la pared que ya estaba hueca;\nel rayo no destruye tu casa,\napenas abre una ventana al cielo.',
    enLuz: 'Verdad repentina que libera, caída de ilusiones, reconstruir sobre base real.',
    enSombra: 'Miedo al cambio brusco, sostener estructuras vencidas hasta que colapsan.',
    notaTranquila: 'La Torre no es una maldición: suele mostrar la caída de una idea falsa, una máscara o una situación insostenible que necesitaba sincerarse para que puedas respirar.',
    interpretaciones: {
      esencia: {
        yo: 'Algo que sostenías a la fuerza (una creencia, una rutina, una expectativa irreal) se sacude para dejarte ver la verdad. Aunque incomode al principio, derrumbar lo falso te ahorra años de desgaste.',
        otro: 'Señala una sacudida de claridad o el fin abrupto de algo que ya venía inestable. Aunque remueva, abre paso a construir sobre verdad y no sobre apariencias.'
      },
      luz: {
        yo: 'Momento de lucidez brutal y liberadora: ves por fin lo que era puro ego o fachada y puedes empezar sobre terreno honesto.',
        otro: 'Su lado luminoso es la liberación repentina de tensiones acumuladas y la llegada de una verdad necesaria.'
      },
      desafio: {
        yo: 'Resistirte a aceptar una verdad evidente solo hace más ruido la caída. Suelta la imagen perfecta y atiende lo real.',
        otro: 'Advierte sobre aferrarse a estructuras o planes que claramente ya no se sostienen, temiendo la incomodidad del cambio.'
      },
      situacion: {
        yo: 'Hubo (o se está gestando) un cambio imprevisto, una conversación sincera o la caída de una ilusión que cambia tus planes iniciales.',
        otro: 'Vive una sacudida, noticia inesperada o momento de ruptura con una idea o estructura previa.'
      },
      obstaculo: {
        yo: 'Te cuesta aceptar que el plan original se rompió o sigues invirtiendo energía en mantener en pie algo que ya perdió su base.',
        otro: 'El obstáculo es la resistencia al cambio brusco o el impacto emocional de ver caer una expectativa importante.'
      },
      consejo: {
        yo: 'No reconstruyas exactamente la misma torre. Agradece la claridad que trajo esta sacudida, respira y empieza desde los hechos reales.',
        otro: 'Acompáñale con calma: recuérdale que lo que cae es la cáscara, no su valor personal, y que ahora puede reconstruir más honestamente.'
      }
    },
    preguntas: {
      yo: '¿Qué expectativa o apariencia estoy intentando sostener aunque en el fondo sé que ya no se aguanta?',
      otro: 'Detrás de este cambio o sacudida, ¿qué verdad importante quedó finalmente a la vista?'
    },
    svg: `
      <rect x="44" y="54" width="32" height="72" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M40 44 L48 34 L60 40 L72 34 L80 44" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.5" transform="rotate(14 60 39)"/>
      <polyline points="86,20 66,44 74,48 54,72" fill="none" stroke="var(--accent-ochre)" stroke-width="1.8"/>
      <rect x="55" y="76" width="10" height="14" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <line x1="28" y1="126" x2="92" y2="126" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="32" cy="64" r="1.5" fill="var(--accent-ochre)"/>
      <circle cx="88" cy="74" r="1.5" fill="var(--accent-ochre)"/>
    `
  },
  {
    id: 17,
    slug: 'la-estrella',
    romano: 'XVII',
    nombre: 'La Estrella',
    arquetipo: 'La esperanza serena, la claridad y la confianza después de la tormenta',
    grupo: 'cambio',
    elemento: 'Aire · Esperanza y guía',
    palabrasClave: ['Esperanza', 'Calma', 'Inspiración', 'Renovación'],
    ecoPoetico: 'Cuando pasa el ruido del cielo,\nqueda una estrella quieta\ny agua fresca volviendo a la tierra.',
    enLuz: 'Alivio, fe tranquila en el camino, inspiración genuina, autenticidad.',
    enSombra: 'Idealizar un futuro lejano olvidando el presente, o desánimo momentáneo.',
    interpretaciones: {
      esencia: {
        yo: 'La Estrella es una de las cartas más reparadoras del mazo. Te dice que vas por buen rumbo aunque todavía falte camino, que puedes confiar en tu sensibilidad y soltar el estado de alerta.',
        otro: 'Trae alivio, inspiración y confianza serena. Después de momentos revueltos, marca un período de sanación, autenticidad y esperanza realista.'
      },
      luz: {
        yo: 'Hay claridad, fe tranquila y conexión genuina con lo que te inspira. No necesitas disfrazarte para encajar.',
        otro: 'Refleja transparencia, frescura emocional, generosidad y una visión optimista pero serena de lo que viene.'
      },
      desafio: {
        yo: 'Cuida no quedarte mirando la estrella lejana sin dar pasos concretos en tierra firme, o dudar de que mereces esta calma.',
        otro: 'Pide atención por si hay idealización excesiva o cansancio que le impide reconocer que lo peor ya pasó.'
      },
      situacion: {
        yo: 'Estás entrando en una etapa más luminosa y despejada, recuperando entusiasmo o encontrando sentido después de un tiempo exigente.',
        otro: 'Se abre un momento de calma, inspiración creativa o alivio tras una etapa de incertidumbre o desgaste.'
      },
      obstaculo: {
        yo: 'A veces el único freno es el escepticismo heredado de golpes anteriores: creer que "no puede ser tan simple" o desconfiar de la calma.',
        otro: 'El freno puede ser la incredulidad por heridas pasadas o idealizar demasiado un resultado sin cuidar el proceso diario.'
      },
      consejo: {
        yo: 'Confía en tu brújula interior, comparte lo que sabes con generosidad y date permiso para ilusionarte sin prisa.',
        otro: 'Recuérdale que puede respirar tranquilo/a: va en buena dirección y su autenticidad es justo lo que ilumina el camino.'
      }
    },
    preguntas: {
      yo: '¿Qué me devuelve hoy la ilusión y cómo puedo cuidarla con acciones sencillas?',
      otro: '¿Qué es lo que hoy te da esperanza o calma cuando piensas en los próximos meses?'
    },
    svg: `
      <path d="M60 28 L65 44 L82 44 L68 54 L73 70 L60 60 L47 70 L52 54 L38 44 L55 44 Z" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <circle cx="32" cy="40" r="2" fill="var(--accent-ochre)"/>
      <circle cx="88" cy="40" r="2" fill="var(--accent-ochre)"/>
      <circle cx="28" cy="64" r="1.5" fill="currentColor"/>
      <circle cx="92" cy="64" r="1.5" fill="currentColor"/>
      <path d="M46 84 C42 98, 34 108, 30 120" fill="none" stroke="var(--accent-sage)" stroke-width="1.5"/>
      <path d="M74 84 C78 98, 86 108, 90 120" fill="none" stroke="var(--accent-sage)" stroke-width="1.5"/>
      <path d="M22 126 Q42 121 60 126 T98 126" fill="none" stroke="currentColor" stroke-width="1.4"/>
    `
  },
  {
    id: 18,
    slug: 'la-luna',
    romano: 'XVIII',
    nombre: 'La Luna',
    arquetipo: 'La penumbra, los sueños y aprender a caminar sin verlo todo aún',
    grupo: 'introspeccion',
    elemento: 'Agua · Subconsciente y penumbra',
    palabrasClave: ['Imaginación', 'Duda', 'Sensibilidad', 'Umbral'],
    ecoPoetico: 'De noche las sombras parecen más altas\nde lo que son de día;\ncamina despacio hasta que amanezca.',
    enLuz: 'Imaginación poética, conexión con sueños, intuición fina en terreno incierto.',
    enSombra: 'Miedos imaginados, confusión, malentendidos o suponer lo peor sin pruebas.',
    notaTranquila: 'La Luna no anuncia engaños inevitables ni peligros ocultos: habla de momentos de niebla o incertidumbre donde nuestra propia imaginación agranda los temores.',
    interpretaciones: {
      esencia: {
        yo: 'De noche el paisaje cambia de forma y es fácil confundir una sombra con un monstruo. La Luna te pide no sacar conclusiones apresuradas mientras todo se vea difuso, y distinguir entre intuición real y miedo.',
        otro: 'Marca un terreno de niebla, emociones profundas o información incompleta. Pide calma, paciencia y no creer todo lo que la mente imagina en la incertidumbre.'
      },
      luz: {
        yo: 'Gran sensibilidad artística y onírica; capacidad de conectar con emociones profundas que no caben en la lógica fría.',
        otro: 'Destaca su enorme sensibilidad, mundo interior poético y receptividad hacia sueños e intuiciones.'
      },
      desafio: {
        yo: 'Cuidado con construir películas catastróficas en tu cabeza por falta de datos concretos. Verifica los hechos antes de reaccionar.',
        otro: 'Advierte sobre confusión, suposiciones no verificadas o dejarse llevar por ansiedades nocturnas.'
      },
      situacion: {
        yo: 'Hay algo ambiguo o poco claro en este momento: emociones revueltas, dudas o falta de información definitiva.',
        otro: 'Atraviesa una etapa poco definida, con dudas, sensibilidad alta o piezas de información que aún no terminan de aclararse.'
      },
      obstaculo: {
        yo: 'El obstáculo principal es la niebla mental: miedos antiguos mezclándose con el presente o falta de conversación clara para despejar dudas.',
        otro: 'El nudo viene de la incertidumbre, los sobreentendidos o temores imaginados que paralizan el paso.'
      },
      consejo: {
        yo: 'No tomes decisiones definitivas en medio de la niebla. Da pasos cortos, descansa bien y busca hechos claros antes de sacar conclusiones.',
        otro: 'Sugiérele ir paso a paso sin apurarse a definir nada hoy, contrastar suposiciones con hechos y esperar a que aclare el panorama.'
      }
    },
    preguntas: {
      yo: 'De todo lo que hoy me preocupa, ¿qué es un hecho real y qué es una historia que mi miedo está inventando?',
      otro: '¿Qué parte de esta duda se resolvería simplemente preguntando o esperando a tener datos más claros?'
    },
    svg: `
      <circle cx="60" cy="48" r="20" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <path d="M56 31 A17 17 0 1 0 56 65 A13 13 0 1 1 56 31 Z" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <rect x="24" y="84" width="12" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <rect x="84" y="84" width="12" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M56 128 C52 114, 68 106, 60 88" fill="none" stroke="var(--accent-sage)" stroke-width="1.5"/>
      <path d="M22 128 Q42 122 60 128 T98 128" fill="none" stroke="currentColor" stroke-width="1.3" opacity="0.6"/>
    `
  },
  {
    id: 19,
    slug: 'el-sol',
    romano: 'XIX',
    nombre: 'El Sol',
    arquetipo: 'La claridad plena, la alegría compartida y la vitalidad',
    grupo: 'vinculo',
    elemento: 'Fuego · Luz y alegría',
    palabrasClave: ['Claridad', 'Alegría', 'Vitalidad', 'Verdad'],
    ecoPoetico: 'Cuando todo se ve bajo la luz del mediodía,\nhasta lo pequeño brilla\ny el pecho vuelve a respirar entero.',
    enLuz: 'Claridad total, éxito compartido, entusiasmo sincero, calor humano.',
    enSombra: 'Ego inflado, exceso de exposición o querer estar "siempre bien" sin descanso.',
    interpretaciones: {
      esencia: {
        yo: 'El Sol disipa las dudas de la noche anterior: trae claridad, calidez y permiso para disfrutar lo que funciona bien. Es un recordatorio de mostrarte tal como eres y celebrar tus avances.',
        otro: 'Señala claridad, vitalidad y buenos resultados. Invita a confiar, celebrar lo logrado y compartir con alegría sin esconderse.'
      },
      luz: {
        yo: 'Tienes energía, optimismo realista y claridad para ver las cosas como son, sin sombras ni rodeos.',
        otro: 'Muestra transparencia, entusiasmo contagioso, generosidad y un momento muy favorable para acuerdos y vínculos.'
      },
      desafio: {
        yo: 'Cuida el ego o la necesidad de quemar energía sin descanso; incluso bajo el sol hace bien buscar algo de sombra.',
        otro: 'Pide cuidar el exceso de orgullo, la sobreexposición o la presión por mostrarse siempre radiante.'
      },
      situacion: {
        yo: 'El panorama está despejado. Hay buena energía, acuerdos claros, reconocimiento o un momento de bienestar honesto.',
        otro: 'Atraviesa un período luminoso, claro y vital, con buen clima para proyectos, vínculos o disfrute.'
      },
      obstaculo: {
        yo: 'Si sale como obstáculo, puede señalar que te cuesta dejarte ver, recibir reconocimiento o permitirte disfrutar sin culpa.',
        otro: 'Como obstáculo, suele indicar ego en juego, exceso de exposición o dificultad para aceptar algo bueno con sencillez.'
      },
      consejo: {
        yo: 'Sal al encuentro, di las cosas con transparencia y permítete disfrutar de lo que ya está brillando en tu vida.',
        otro: 'Anímale a mostrarse con franqueza, celebrar sus logros pequeños o grandes y compartir esa buena energía.'
      }
    },
    preguntas: {
      yo: '¿Qué cosa buena ya está ocurriendo en mi vida que merece que la celebre hoy con sencillez?',
      otro: '¿Qué te ilumina de verdad en este momento, y con quién te gustaría compartirlo?'
    },
    svg: `
      <circle cx="60" cy="62" r="20" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.7"/>
      <circle cx="60" cy="62" r="10" fill="none" stroke="var(--accent-ochre)" stroke-width="1.3"/>
      <path d="M60 28v10M60 86v10M26 62h10M84 62h10M36 38l7 7M77 79l7 7M84 38l-7 7M43 79l-7 7" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <line x1="22" y1="114" x2="98" y2="114" stroke="currentColor" stroke-width="1.5"/>
      <line x1="36" y1="114" x2="36" y2="128" stroke="currentColor" stroke-width="1.3"/>
      <line x1="60" y1="114" x2="60" y2="128" stroke="currentColor" stroke-width="1.3"/>
      <line x1="84" y1="114" x2="84" y2="128" stroke="currentColor" stroke-width="1.3"/>
    `
  },
  {
    id: 20,
    slug: 'el-juicio',
    romano: 'XX',
    nombre: 'El Juicio',
    arquetipo: 'El llamado interior, el perdón y el despertar a una etapa nueva',
    grupo: 'orden',
    elemento: 'Fuego · Renovación y llamado',
    palabrasClave: ['Llamado', 'Despertar', 'Perdón', 'Decisión'],
    ecoPoetico: 'Escucha esa voz que no juzga ni acusa,\nsolo te llama por tu nombre\npara que te levantes más liviano.',
    enLuz: 'Claridad de propósito, perdonarte errores viejos, responder a un llamado genuino.',
    enSombra: 'Culpa paralizante, miedo al juicio ajeno o hacerse sordo a un cambio necesario.',
    interpretaciones: {
      esencia: {
        yo: 'No es un tribunal para castigarte, sino un despertar. El Juicio marca el momento en que todo lo aprendido encaja, te perdonas errores pasados y escuchas con claridad qué paso te llama ahora.',
        otro: 'Habla de renovación, perdón y respuesta a un llamado interno. Indica el cierre definitivo de viejas culpas para responder con libertad a una nueva etapa.'
      },
      luz: {
        yo: 'Tienes lucidez para integrar tu pasado sin rencor y dar un sí firme a una vocación, decisión o cambio pendiente.',
        otro: 'Refleja madurez, liberación de culpas y claridad para responder a algo que realmente tiene sentido.'
      },
      desafio: {
        yo: 'Cuidado con quedarte atrapado en el autorreproche ("debí haber hecho...") o con postergar una decisión por temor a lo que otros opinen.',
        otro: 'Advierte sobre el peso de culpas viejas o la resistencia a responder a un llamado evidente por miedo al qué dirán.'
      },
      situacion: {
        yo: 'Vuelve a la mesa un tema importante del pasado o recibes una señal clara de renovación. Es hora de pasar en limpio lo vivido.',
        otro: 'Vive un momento de balance vital, noticias definitorias o el regreso de un proyecto o vocación que pide respuesta.'
      },
      obstaculo: {
        yo: 'Lo que traba puede ser la culpa por errores antiguos o el miedo a ser juzgado si cambias de rumbo.',
        otro: 'El obstáculo suele ser la autocrítica severa, la culpa acumulada o no atreverse a contestar a una llamada clara.'
      },
      consejo: {
        yo: 'Suéltate del reproche: lo pasado ya te enseñó lo que tenía que enseñarte. Responde hoy a eso que te llama por tu nombre.',
        otro: 'Invítale a perdonarse lo que ya pasó, cerrar cuentas emocionales viejas y animarse a responder al cambio que siente.'
      }
    },
    preguntas: {
      yo: '¿Qué error del pasado ya es hora de perdonarme para poder responder a lo que hoy me llama?',
      otro: '¿Qué decisión o proyecto sientes que te está "llamando" con insistencia desde hace tiempo?'
    },
    svg: `
      <path d="M24 38 Q48 56 60 32 Q72 56 96 38" fill="none" stroke="var(--accent-ochre)" stroke-width="1.5"/>
      <path d="M52 44 L60 72 L68 44 Z" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.5"/>
      <path d="M40 82 Q60 92 80 82" fill="none" stroke="currentColor" stroke-width="1.3" opacity="0.7"/>
      <path d="M32 94 Q60 106 88 94" fill="none" stroke="currentColor" stroke-width="1.3" opacity="0.5"/>
      <path d="M48 124 L60 104 L72 124" fill="none" stroke="var(--accent-sage)" stroke-width="1.6"/>
      <line x1="22" y1="126" x2="98" y2="126" stroke="currentColor" stroke-width="1.4"/>
    `
  },
  {
    id: 21,
    slug: 'el-mundo',
    romano: 'XXI',
    nombre: 'El Mundo',
    arquetipo: 'La plenitud, la integración de lo vivido y el cierre feliz del ciclo',
    grupo: 'inicio',
    elemento: 'Tierra · Culminación y totalidad',
    palabrasClave: ['Plenitud', 'Cierre', 'Integración', 'Horizonte'],
    ecoPoetico: 'Todo el viaje cabe ahora en una ronda:\ncada paso, incluso los tropiezos,\nte trajo entero hasta este umbral.',
    enLuz: 'Logro, cierre armónico de etapa, sentirse completo y listo para un nuevo horizonte.',
    enSombra: 'Miedo a cerrar algo bueno, sensación de "todavía falta" o perfeccionismo final.',
    interpretaciones: {
      esencia: {
        yo: 'El Mundo corona el recorrido de los 22 arcanos: algo se completa e integra en ti. Es momento de reconocer todo lo que aprendiste, disfrutar el cierre bien hecho y mirar el horizonte amplio que sigue.',
        otro: 'Anuncia culminación, logro e integración. Marca el cierre satisfactorio de una etapa importante y la apertura hacia horizontes más amplios.'
      },
      luz: {
        yo: 'Sientes coherencia interna, orgullo sano por el camino recorrido y apertura hacia nuevos proyectos, viajes o vínculos.',
        otro: 'Muestra realización, plenitud, cierre ordenado de procesos y disposición para expandirse hacia nuevas metas.'
      },
      desafio: {
        yo: 'Revisa si por perfeccionismo te cuesta dar por terminado algo que ya está listo, o si te da vértigo empezar la siguiente vuelta.',
        otro: 'Señala la dificultad para celebrar lo conseguido o la manía de buscar siempre "qué falta" antes de cerrar un capítulo.'
      },
      situacion: {
        yo: 'Estás cerrando con éxito un proceso importante o integrando muchas piezas sueltas que por fin cobran sentido juntas.',
        otro: 'Se encuentra en el cierre de una etapa importante, cosechando resultados y ampliando su mundo o perspectiva.'
      },
      obstaculo: {
        yo: 'A veces el obstáculo es no dar el último punto final a una tarea o proyecto por miedo a lo que viene después de terminar.',
        otro: 'El freno puede estar en resistirse a cerrar un proyecto ya maduro o en no reconocer la totalidad de lo avanzado.'
      },
      consejo: {
        yo: 'Da por cerrado lo que ya completaste, celébralo como merece y prepárate con calma para un nuevo ciclo más amplio.',
        otro: 'Recuérdale celebrar este cierre con gratitud: todo lo vivido sumó, y está listo/a para abrir una etapa más grande.'
      }
    },
    preguntas: {
      yo: '¿Qué logro o aprendizaje de este ciclo todavía no me detuve a celebrar y dar por cerrado?',
      otro: 'Mirando todo lo que caminaste para llegar hasta acá, ¿qué sientes que ya está completo y listo para el siguiente paso?'
    },
    svg: `
      <ellipse cx="60" cy="76" rx="28" ry="42" fill="none" stroke="var(--accent-sage)" stroke-width="1.8"/>
      <ellipse cx="60" cy="76" rx="23" ry="37" fill="none" stroke="var(--accent-ochre)" stroke-width="1.2" stroke-dasharray="4 3"/>
      <circle cx="60" cy="76" r="7" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.6"/>
      <circle cx="60" cy="76" r="2" fill="var(--accent-terracotta)"/>
      <circle cx="24" cy="30" r="3" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <circle cx="96" cy="30" r="3" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <circle cx="24" cy="122" r="3" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <circle cx="96" cy="122" r="3" fill="none" stroke="currentColor" stroke-width="1.3"/>
    `
  }
];

export const ARCANOS_MAP = new Map(ARCANOS.map((arcano) => [arcano.id, arcano]));
