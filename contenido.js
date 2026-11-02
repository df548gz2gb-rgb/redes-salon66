/* =====================================================================
   CONTENIDO PROFESIONAL POR TEMAS
   Cada tema tiene el material con el que se montan guiones completos.
   Para añadir un tema nuevo, copia uno y cambia los textos.
   ===================================================================== */
window.KB = {
  caida: {
    label: 'Caída del cabello', name: 'la caída del cabello', match: [/ca[ií]da/],
    consejos: ['Lava el pelo con agua templada, nunca muy caliente.', 'Masajea el cuero cabelludo 2-3 minutos al lavar para activar la circulación.', 'Evita coletas y recogidos muy tirantes.', 'Usa un champú suave y específico para la caída.', 'Cuida la alimentación: proteínas, hierro, zinc y vitaminas del grupo B.'],
    causas: ['Cambios de estación: en otoño y primavera es normal perder más pelo.', 'Estrés intenso o una época difícil (suele notarse 2-3 meses después).', 'Carencias de hierro o vitaminas, o una dieta muy restrictiva.', 'Cambios hormonales: posparto, menopausia o tiroides.'],
    senales: ['Pierdes mechones o se ven zonas con menos densidad.', 'La caída dura más de 3 meses seguidos.', 'Aparece picor, dolor, rojez o descamación en el cuero cabelludo.'],
    mitos: [['Lavarse el pelo a diario hace que se caiga más', 'El pelo que sale al lavar ya estaba suelto: lavar no provoca la caída.'], ['Cortarse el pelo hace que crezca más fuerte', 'El corte sanea las puntas, pero no cambia la raíz ni la caída.'], ['Perder pelo cada día no es normal', 'Perder entre 50 y 100 pelos al día es normal.']],
    errores: ['Hacer recogidos tirantes a diario → mejor pinzas o coletas flojas', 'Cepillar el pelo mojado con fuerza → mejor un peine de púas anchas', 'Probar remedios caseros sin diagnóstico → mejor consultar antes'],
    si: ['Champús suaves con activos anticaída (cafeína, biotina, romero).', 'Lociones o ampollas anticaída en el cuero cabelludo.', 'Mascarilla solo de medios a puntas.'],
    no: ['Champús muy agresivos.', 'Aceites y productos pesados en la raíz.', 'Plancha y secador muy calientes a diario.'],
    rutina: ['Champú anticaída 2-3 veces por semana, con masaje suave.', 'Loción anticaída en el cuero cabelludo, según las indicaciones.', 'Secador templado y a distancia; al aire si puedes.', 'Fíjate en cuánto pelo se cae para ver la evolución.'],
    habitos: ['Alimentación: proteínas, hierro (legumbres, carne, espinacas), frutos secos y fruta.', 'Estrés y descanso: dormir bien y gestionar el estrés influye más de lo que parece.', 'Hábitos: no fumar, beber agua y no abusar de los recogidos tirantes.'],
    tratamiento: ['Diagnóstico del cuero cabelludo y del tipo de caída.', 'Limpieza profunda del cuero cabelludo.', 'Tratamiento anticaída aplicado con masaje.', 'Pauta para casa y revisión en unas semanas.'],
    diagnostico: ['La densidad, las zonas con menos pelo y el estado del cuero cabelludo.', 'Desde cuándo pasa, cambios recientes, estrés, alimentación y medicación.', 'Tratamiento en el salón, rutina en casa o visita al dermatólogo si hace falta.'],
    faq: [['¿Es normal que se me caiga más en otoño?', 'Sí, la caída estacional es normal y suele durar unas semanas.'], ['¿Los tratamientos funcionan?', 'Ayudan cuando la causa es puntual; con constancia se nota en 2-3 meses.'], ['¿Cuándo voy al dermatólogo?', 'Si la caída dura más de 3 meses, hay zonas sin pelo o molestias.']],
    resumen: ['Es perder pelo por encima de lo normal (más de 100 pelos al día).', 'Puede deberse a la estación, al estrés, a carencias o a cambios hormonales.', 'Rutina suave, buena alimentación y consultar si dura más de 3 meses.']
  },
  caspa: {
    label: 'Caspa', name: 'la caspa', match: [/caspa/, /descamaci/],
    consejos: ['Usa un champú anticaspa 2-3 veces por semana y déjalo actuar 2-3 minutos.', 'Aclara muy bien: los restos de producto empeoran la descamación.', 'No te rasques con las uñas: irrita el cuero cabelludo.', 'Alterna el champú anticaspa con uno suave.', 'Seca bien la raíz: la humedad favorece la caspa.'],
    causas: ['Un hongo natural de la piel (Malassezia) que crece más de la cuenta.', 'Cuero cabelludo seco, sobre todo en invierno.', 'Exceso de grasa (caspa grasa).', 'Estrés, cambios de estación o productos que irritan.'],
    senales: ['Picor intenso que no mejora con champú anticaspa.', 'Rojez, placas o costras en el cuero cabelludo.', 'Descamación que llega a cejas, orejas o cara.'],
    mitos: [['La caspa es falta de higiene', 'Es un desequilibrio del cuero cabelludo; también la tiene gente que se lava a diario.'], ['La caspa se contagia', 'No es contagiosa.'], ['Si tengo caspa, tengo el pelo seco', 'Hay caspa seca y caspa grasa, y cada una se trata distinto.']],
    errores: ['Lavar con agua muy caliente → mejor templada', 'Usar champú anticaspa a diario durante meses → mejor alternarlo', 'Rascar o frotar fuerte → mejor un masaje suave con la yema de los dedos'],
    si: ['Champús con piritiona de zinc, ketoconazol o ácido salicílico.', 'Un champú suave para alternar.', 'Exfoliante de cuero cabelludo cada 1-2 semanas.'],
    no: ['Aceites y ceras en la raíz.', 'Lacas y espumas sobre el cuero cabelludo.', 'Agua muy caliente.'],
    rutina: ['Champú anticaspa 2-3 veces por semana, dejándolo actuar 2-3 minutos.', 'Exfoliante de cuero cabelludo cada 1-2 semanas.', 'Seca bien la raíz con secador templado.', 'Alterna con un champú suave los demás días.'],
    habitos: ['Alimentación: menos azúcar y ultraprocesados, más fruta y verdura.', 'Estrés: en épocas de estrés la caspa suele empeorar.', 'Hábitos: lava gorras, fundas de almohada y cepillos a menudo.'],
    tratamiento: ['Diagnóstico: caspa seca o grasa.', 'Exfoliación suave del cuero cabelludo.', 'Champú y tratamiento específico con masaje.', 'Pauta de productos para casa.'],
    diagnostico: ['El tipo de escamas (secas o grasas) y si hay rojez.', 'Cada cuánto lavas, qué productos usas y si pica.', 'El champú adecuado y, si hay rojez o placas, el dermatólogo.'],
    faq: [['¿La caspa se cura?', 'Se controla muy bien con la rutina adecuada, aunque puede volver con el estrés o el frío.'], ['¿Puedo usar champú anticaspa siempre?', 'Mejor alternarlo con uno suave para no resecar.'], ['¿Por qué tengo más caspa en invierno?', 'El frío, la calefacción y el agua caliente resecan el cuero cabelludo.']],
    resumen: ['Son escamas del cuero cabelludo que se desprenden más de lo normal.', 'Por un hongo natural de la piel, por sequedad o por exceso de grasa.', 'Champú específico, aclarar a fondo y no rascar.']
  },
  graso: {
    label: 'Cuero cabelludo graso', name: 'el cuero cabelludo graso', match: [/gras/],
    consejos: ['Lava cuando lo necesites con champú para cabello graso: lavar no aumenta la grasa.', 'Usa agua templada, nunca muy caliente.', 'Aplica el acondicionador solo de medios a puntas.', 'No te toques el pelo con las manos a lo largo del día.', 'Limpia cepillos y peines cada semana.'],
    causas: ['Glándulas sebáceas muy activas (genética).', 'Cambios hormonales.', 'Agua muy caliente o cepillado excesivo.', 'Productos demasiado pesados en la raíz.'],
    senales: ['La grasa va acompañada de picor o descamación.', 'Hay rojez o granitos en el cuero cabelludo.', 'Se cae más pelo además de haber mucha grasa.'],
    mitos: [['Lavar a diario aumenta la grasa', 'Con un champú suave puedes lavar a diario sin problema.'], ['El champú en seco sustituye al lavado', 'Es un apaño puntual: no limpia el cuero cabelludo.'], ['El pelo graso no necesita hidratación', 'Las puntas pueden estar secas aunque la raíz sea grasa.']],
    errores: ['Frotar fuerte con las uñas → mejor masaje con la yema de los dedos', 'Poner acondicionador en la raíz → mejor solo en puntas', 'Abusar del champú en seco → mejor un lavado suave'],
    si: ['Champús para cabello graso (arcilla, zinc, árbol de té).', 'Acondicionador ligero solo en puntas.', 'Champú en seco de forma puntual.'],
    no: ['Mascarillas y aceites en la raíz.', 'Agua muy caliente.', 'Ceras y productos pesados cerca del cuero cabelludo.'],
    rutina: ['Champú para cabello graso cuando lo necesites, con agua templada.', 'Mascarilla de arcilla en el cuero cabelludo una vez por semana.', 'Secador templado, sin pegarlo a la raíz.', 'Limpia los cepillos y cambia la funda de la almohada.'],
    habitos: ['Alimentación: menos fritos y azúcar.', 'Estrés: puede aumentar la producción de grasa.', 'Hábitos: no tocarse el pelo y lavar gorras y cascos.'],
    tratamiento: ['Diagnóstico del cuero cabelludo.', 'Limpieza profunda con producto regulador.', 'Mascarilla purificante.', 'Pauta de lavado para casa.'],
    diagnostico: ['Cuánta grasa hay y cuánto tarda en aparecer tras el lavado.', 'Cada cuánto lavas y qué productos usas.', 'Champú regulador y cómo aplicar cada producto.'],
    faq: [['¿Cada cuánto me lavo el pelo?', 'Cuando lo necesites; si es a diario, con un champú suave.'], ['¿El agua fría ayuda?', 'Templada es lo ideal; muy caliente estimula más grasa.'], ['¿Puedo ponerme mascarilla?', 'Sí, pero solo de medios a puntas.']],
    resumen: ['Es cuando la raíz se engrasa muy rápido después del lavado.', 'Por glándulas sebáceas muy activas, hormonas o malos hábitos de lavado.', 'Champú regulador, agua templada y productos solo en puntas.']
  },
  seco: {
    label: 'Pelo seco y quebradizo', name: 'el pelo seco y quebradizo', match: [/seco/, /quebradiz/, /hidrata/, /da[ñn]ad/],
    consejos: ['Usa champú hidratante sin sulfatos agresivos.', 'Ponte una mascarilla nutritiva una vez por semana.', 'Aplica protector térmico siempre que uses calor.', 'Sanea las puntas cada 8-10 semanas.', 'Duerme con funda de satén o con el pelo recogido flojo.'],
    causas: ['Abuso de plancha, secador o tenacillas.', 'Tintes y decoloraciones.', 'Sol, cloro y sal.', 'Agua muy caliente y champús agresivos.'],
    senales: ['El pelo se rompe a media altura, no solo en las puntas.', 'Se ve sin brillo aunque lo hidrates.', 'Notas picor o tirantez en el cuero cabelludo.'],
    mitos: [['Cortar mucho arregla el pelo seco', 'El corte quita lo dañado, pero hay que cambiar los hábitos.'], ['Los aceites hidratan', 'Los aceites sellan; la hidratación viene de mascarillas y acondicionadores.'], ['Si está seco, mejor no lavarlo', 'Hay que lavarlo, con un champú hidratante.']],
    errores: ['Secar frotando con la toalla → mejor apretar con una toalla de microfibra', 'Plancha a máxima temperatura → mejor 160-180 °C con protector', 'Saltarse el acondicionador → mejor usarlo en cada lavado'],
    si: ['Mascarillas con keratina, aceites o manteca de karité.', 'Acondicionador en cada lavado.', 'Protector térmico.'],
    no: ['Champús con sulfatos agresivos.', 'Productos de peinado con alcohol.', 'Calor sin protección.'],
    rutina: ['Champú hidratante 2-3 veces por semana.', 'Acondicionador en cada lavado y mascarilla semanal.', 'Toalla de microfibra y protector térmico antes del secador.', 'Unas gotas de aceite en las puntas al terminar.'],
    habitos: ['Alimentación: grasas saludables (aguacate, frutos secos, pescado azul).', 'Agua: beber suficiente también se nota en el pelo.', 'Hábitos: menos calor y protegerlo del sol.'],
    tratamiento: ['Diagnóstico del grado de daño.', 'Saneado de puntas.', 'Tratamiento de hidratación o reconstrucción.', 'Rutina para casa.'],
    diagnostico: ['La porosidad, la rotura y el estado de las puntas.', 'Cada cuánto usas calor y si llevas color.', 'Tratamiento en el salón y productos para casa.'],
    faq: [['¿Cada cuánto me corto las puntas?', 'Cada 8-10 semanas, para que la rotura no suba.'], ['¿La keratina es buena?', 'Ayuda a reforzar el pelo dañado; te decimos cuál según tu pelo.'], ['¿Puedo usar plancha?', 'Sí, con protector y a temperatura moderada.']],
    resumen: ['Es un pelo con poca hidratación que se rompe y pierde brillo.', 'Por el calor, los químicos, el sol y los lavados agresivos.', 'Hidratar, proteger del calor y sanear las puntas.']
  },
  puntas: {
    label: 'Puntas abiertas', name: 'las puntas abiertas', match: [/punta/],
    consejos: ['Sanea las puntas cada 8-10 semanas.', 'Usa protector térmico antes de cualquier calor.', 'Desenreda de abajo hacia arriba.', 'Aplica aceite o sérum en las puntas.', 'Evita las gomas con piezas de metal.'],
    causas: ['El calor de planchas y secador.', 'Cepillarse con tirones.', 'Tintes y decoloración.', 'El roce con la ropa, la mochila o la almohada.'],
    senales: ['La rotura sube y el pelo no gana largo.', 'Se forman nudos constantemente.', 'Las puntas se ven más finas y transparentes.'],
    mitos: [['Hay productos que reparan las puntas abiertas', 'Las sellan durante unos días; la única solución es cortar.'], ['Cortar a menudo hace que crezca más rápido', 'No cambia la velocidad, pero evita que la rotura suba.'], ['Solo le pasa al pelo largo', 'También al pelo corto con calor o color.']],
    errores: ['Cepillar de raíz a puntas a tirones → mejor desenredar desde abajo', 'Esperar meses para cortar → mejor sanear cada 8-10 semanas', 'Usar gomas con metal → mejor gomas de tela o de espiral'],
    si: ['Sérum o aceite para puntas.', 'Protector térmico.', 'Mascarilla nutritiva.'],
    no: ['Gomas con metal.', 'Calor sin protector.', 'Cepillos de cerdas duras con el pelo mojado.'],
    rutina: ['Champú suave sin frotar las puntas.', 'Acondicionador en las puntas y mascarilla semanal.', 'Protector térmico y secador templado.', 'Sérum en las puntas al terminar el peinado.'],
    habitos: ['Alimentación: proteínas para un pelo más resistente.', 'Descanso: funda de satén o seda.', 'Hábitos: menos calor y gomas suaves.'],
    tratamiento: ['Revisión del estado de las puntas.', 'Corte de saneado sin quitar largo de más.', 'Tratamiento nutritivo.', 'Consejos de mantenimiento.'],
    diagnostico: ['Hasta dónde llega la rotura.', 'Cada cuánto te cortas y qué calor usas.', 'Cuánto cortar y cómo mantenerlo.'],
    faq: [['¿Cuánto me tengo que cortar?', 'Lo justo para quitar la parte abierta: suelen ser 1-3 cm.'], ['¿Se pueden pegar las puntas?', 'No; los productos solo las sellan unos días.'], ['¿Cada cuánto vengo?', 'Cada 8-10 semanas.']],
    resumen: ['Es cuando la punta del pelo se abre en dos o más.', 'Por el calor, el color, el cepillado y el roce.', 'Cortar, proteger del calor y nutrir.']
  },
  color: {
    label: 'Pelo teñido', name: 'el pelo teñido', match: [/te[ñn]id/, /tinte/, /color/, /mecha/, /rubi/],
    consejos: ['Usa champú y mascarilla para cabello teñido.', 'Espera 48 horas para el primer lavado después del tinte.', 'Lava con agua templada o fría.', 'Protege el pelo del sol con productos con filtro.', 'Retoca la raíz cada 4-6 semanas.'],
    causas: ['Lavar con agua muy caliente.', 'Champús con sulfatos agresivos.', 'Sol, cloro y sal.', 'Calor sin protección.'],
    senales: ['El color se ha vuelto anaranjado o amarillento.', 'El pelo está muy poroso o se rompe.', 'Notas picor o irritación después de teñirte.'],
    mitos: [['Teñirse siempre estropea el pelo', 'Con buen producto y buenos cuidados, el pelo se mantiene sano.'], ['Si me lavo menos, el color dura más', 'Ayuda, pero lo que más influye es el champú y el agua caliente.'], ['Los tintes caseros son iguales', 'En el salón ajustamos el color a tu base y a tu pelo.']],
    errores: ['Lavar con agua muy caliente → mejor templada o fría', 'Teñir en casa encima de un color de salón → mejor consultarnos', 'Ir a la piscina sin protección → mejor humedecer el pelo y ponerte protector antes'],
    si: ['Champú sin sulfatos para color.', 'Mascarilla matizadora (violeta para rubios).', 'Protector solar capilar.'],
    no: ['Champús purificantes o anticaspa a diario.', 'Agua muy caliente.', 'Cloro sin protección.'],
    rutina: ['Champú para color 2-3 veces por semana, con agua templada.', 'Mascarilla de color o matizadora una vez por semana.', 'Protector térmico y secador templado.', 'Revisa la raíz y pide cita antes de que se note mucho.'],
    habitos: ['Alimentación equilibrada para un pelo fuerte que aguante el color.', 'Sol: gorra o protector en verano.', 'Hábitos: menos calor para que el color dure más.'],
    tratamiento: ['Diagnóstico de tu base y del color que quieres.', 'Aplicación del color o de las mechas.', 'Tratamiento de protección del pelo.', 'Pauta de mantenimiento en casa.'],
    diagnostico: ['Tu color natural, las canas y el estado del pelo.', 'Qué tintes llevas y qué color te gustaría.', 'La técnica y los productos para mantenerlo.'],
    faq: [['¿Cada cuánto retoco la raíz?', 'Cada 4-6 semanas, según lo rápido que crezca.'], ['¿Puedo aclararme varios tonos?', 'Depende de tu pelo; lo valoramos para no dañarlo.'], ['¿Por qué mi rubio se vuelve amarillo?', 'Por el sol, el agua y el paso del tiempo; se corrige con matizador.']],
    resumen: ['Es el cuidado que necesita un pelo con color para que dure y no se estropee.', 'El agua caliente, el sol y los champús agresivos arrastran el color.', 'Productos para color, agua templada y protección solar.']
  },
  canas: {
    label: 'Canas', name: 'las canas', match: [/cana/],
    consejos: ['Usa un champú matizador para evitar el tono amarillento.', 'Hidrátalas más: las canas suelen ser más secas.', 'Protégelas del sol, que las amarillea.', 'Si las cubres, retoca la raíz cada 4-6 semanas.', 'Si las luces, un buen corte marca la diferencia.'],
    causas: ['La genética: es lo que más influye.', 'La edad.', 'El estrés puede adelantarlas.', 'Algunas carencias o problemas de tiroides.'],
    senales: ['Aparecen muchas canas de golpe y a edad temprana.', 'Van acompañadas de caída o de cambios en el pelo.', 'Notas otros síntomas, como cansancio.'],
    mitos: [['Si arrancas una cana, salen tres', 'Sale la misma, pero arrancarla daña el folículo.'], ['Las canas se pueden revertir', 'Hoy por hoy no; se pueden cubrir o lucir.'], ['Las canas son más gruesas', 'Tienen otra textura y suelen ser más secas.']],
    errores: ['Arrancarlas → mejor cortarlas o cubrirlas', 'Usar un champú normal → mejor matizador una vez por semana', 'No hidratarlas → mejor mascarilla semanal'],
    si: ['Champú matizador violeta.', 'Mascarilla hidratante.', 'Protector solar capilar.'],
    no: ['Tintes caseros sobre canas resistentes sin consultar.', 'Calor fuerte sin protector.', 'Productos que dejan tono amarillento.'],
    rutina: ['Champú suave y matizador una vez por semana.', 'Mascarilla hidratante semanal.', 'Protector térmico antes del secador.', 'Revisa el tono y retoca si las cubres.'],
    habitos: ['Alimentación: vitamina B12, cobre y hierro.', 'Estrés: puede adelantar las canas.', 'Hábitos: no fumar y protegerlas del sol.'],
    tratamiento: ['Decidimos contigo: cubrirlas, difuminarlas o lucirlas.', 'Color o mechas para difuminar.', 'Matizado del tono.', 'Pauta de mantenimiento.'],
    diagnostico: ['El porcentaje de canas y dónde están.', 'Si quieres cubrirlas o lucirlas.', 'Cobertura total, mechas para difuminar o transición a tu gris.'],
    faq: [['¿Puedo dejar de teñirme?', 'Sí, con una transición con mechas para que no se note la raíz.'], ['¿Por qué amarillean?', 'Por el sol, el agua y la contaminación; se corrige con matizador.'], ['¿Cada cuánto retoco?', 'Cada 4-6 semanas si las cubres.']],
    resumen: ['Son pelos que han perdido el pigmento.', 'Sobre todo por genética y edad; el estrés puede adelantarlas.', 'Cubrirlas, difuminarlas o lucirlas bien cuidadas.']
  },
  rizado: {
    label: 'Pelo rizado', name: 'el pelo rizado', match: [/riz/, /ondulad/],
    consejos: ['Usa champú sin sulfatos y espacia los lavados.', 'Desenreda solo con el pelo mojado y con acondicionador.', 'Aplica crema o gel de rizos con el pelo mojado.', 'Seca con difusor o al aire, sin tocarlo.', 'Duerme con funda de satén o con el pelo recogido en lo alto.'],
    causas: ['Falta de hidratación.', 'Cepillarlo en seco.', 'Secarlo frotando con la toalla.', 'Champús agresivos.'],
    senales: ['Los rizos han perdido la forma después de un químico.', 'Hay rotura o mucha sequedad.', 'Se cae más pelo de lo normal.'],
    mitos: [['El pelo rizado no se puede cepillar', 'Sí se puede, pero en mojado y con acondicionador.'], ['Los rizos no necesitan corte', 'Un corte adaptado define mucho mejor el rizo.'], ['Hay que lavarlo a diario', 'Mejor espaciar los lavados para no resecarlo.']],
    errores: ['Cepillar en seco → mejor desenredar en mojado', 'Usar una toalla normal → mejor camiseta de algodón o microfibra', 'Tocar los rizos mientras se secan → mejor dejarlos quietos'],
    si: ['Champú sin sulfatos.', 'Crema de rizos o gel.', 'Mascarilla hidratante.'],
    no: ['Siliconas pesadas si no se lavan bien.', 'Productos con alcohol secante.', 'Cepillar en seco.'],
    rutina: ['Champú sin sulfatos 1-2 veces por semana.', 'Acondicionador abundante y mascarilla semanal.', 'Difusor a temperatura media o secado al aire.', 'Refresca los rizos con agua y un poco de crema entre lavados.'],
    habitos: ['Alimentación: buena hidratación y grasas saludables.', 'Descanso: funda de satén.', 'Hábitos: menos calor directo.'],
    tratamiento: ['Diagnóstico del tipo de rizo.', 'Corte adaptado al rizo.', 'Tratamiento de hidratación.', 'Te enseñamos a definirlo en casa.'],
    diagnostico: ['El tipo de rizo, la porosidad y su estado.', 'Qué productos usas y cómo lo secas.', 'Corte, productos y rutina de definición.'],
    faq: [['¿Cada cuánto lavo el pelo rizado?', 'Una o dos veces por semana suele ser suficiente.'], ['¿Puedo usar plancha?', 'Mejor no a menudo: daña la forma del rizo.'], ['¿Qué corte le va al rizo?', 'Uno con capas pensado para el rizo.']],
    resumen: ['Es un pelo que necesita más hidratación y cuidado para definirse.', 'Por su forma, la grasa natural no llega bien a las puntas.', 'Hidratar, no cepillar en seco y secar con difusor.']
  },
  fino: {
    label: 'Pelo fino', name: 'el pelo fino', match: [/fino/, /volumen/, /poco pelo/],
    consejos: ['Usa champú voluminizador y poco acondicionador.', 'Seca la raíz boca abajo para dar volumen.', 'Evita productos pesados.', 'Un corte con capas suaves da sensación de más pelo.', 'Sanea las puntas a menudo para que no se vean transparentes.'],
    causas: ['Genética.', 'Cambios hormonales.', 'Una alimentación pobre en proteínas.', 'Exceso de química.'],
    senales: ['El pelo se ha vuelto más fino en poco tiempo.', 'Se ve el cuero cabelludo más que antes.', 'Va acompañado de caída.'],
    mitos: [['Cortarlo lo hace más grueso', 'No cambia el grosor, pero un buen corte da más cuerpo.'], ['El pelo fino no aguanta el color', 'Sí lo aguanta, y bien hecho incluso da más cuerpo.'], ['Hay que evitar el acondicionador', 'Solo en puntas y ligero.']],
    errores: ['Mascarillas pesadas en la raíz → mejor solo en puntas', 'Pelo muy largo sin capas → mejor un corte con cuerpo', 'Secarlo pegado a la cabeza → mejor boca abajo'],
    si: ['Champú y espuma voluminizadores.', 'Spray texturizante.', 'Acondicionador ligero.'],
    no: ['Aceites pesados.', 'Siliconas en exceso.', 'Ceras densas.'],
    rutina: ['Champú voluminizador.', 'Acondicionador ligero solo en puntas.', 'Espuma en la raíz y secado boca abajo.', 'Mascarilla ligera de medios a puntas.'],
    habitos: ['Alimentación: proteínas, hierro y biotina.', 'Estrés y descanso.', 'Hábitos: menos química y calor.'],
    tratamiento: ['Diagnóstico del grosor y la densidad.', 'Corte con capas para dar cuerpo.', 'Tratamiento fortalecedor.', 'Peinado con volumen y productos.'],
    diagnostico: ['El grosor del pelo y la densidad.', 'Cómo te peinas y qué productos usas.', 'Corte, color y productos que den cuerpo.'],
    faq: [['¿Qué corte me da más volumen?', 'Un largo medio con capas suaves.'], ['¿El color ayuda?', 'Sí, las mechas dan sensación de más volumen.'], ['¿Puedo llevarlo largo?', 'Sí, con un corte que no deje las puntas transparentes.']],
    resumen: ['Es un pelo de poco grosor que pierde volumen fácilmente.', 'Sobre todo por genética, aunque influyen hormonas y alimentación.', 'Productos ligeros, corte con cuerpo y secado con volumen.']
  },
  frizz: {
    label: 'Encrespamiento', name: 'el encrespamiento', match: [/encresp/, /frizz/],
    consejos: ['Usa acondicionador en cada lavado.', 'Seca con toalla de microfibra, sin frotar.', 'Aplica sérum antifrizz al terminar.', 'Protege el pelo de la humedad con productos de acabado.', 'Termina el secado con aire frío.'],
    causas: ['La humedad ambiental.', 'La falta de hidratación.', 'El exceso de calor.', 'El roce con la toalla, la ropa o la almohada.'],
    senales: ['El frizz aparece de repente después de un químico.', 'El pelo se rompe además de encresparse.', 'No mejora con ningún producto.'],
    mitos: [['El frizz es solo del pelo rizado', 'Cualquier pelo seco puede encresparse.'], ['El alisado lo soluciona para siempre', 'Dura unos meses y luego hay que mantenerlo.'], ['Cepillarlo mucho lo controla', 'Cepillar en seco lo empeora.']],
    errores: ['Frotar con la toalla → mejor apretar', 'Secar sin protector → mejor con protector y aire frío al final', 'Cepillar en seco → mejor peinar con los dedos'],
    si: ['Sérum antifrizz.', 'Mascarilla hidratante.', 'Protector térmico.'],
    no: ['Productos con alcohol secante.', 'Agua muy caliente.', 'Toallas ásperas.'],
    rutina: ['Champú hidratante.', 'Acondicionador y mascarilla semanal.', 'Protector, secador con boquilla y aire frío al final.', 'Sérum en medios y puntas.'],
    habitos: ['Alimentación: hidratación y grasas saludables.', 'Descanso: funda de satén.', 'Hábitos: menos calor y protector siempre.'],
    tratamiento: ['Diagnóstico del tipo de frizz.', 'Tratamiento hidratante o alisado suave.', 'Secado con técnica antifrizz.', 'Productos para casa.'],
    diagnostico: ['La porosidad y en qué zonas se encrespa.', 'Cómo lo secas y qué productos usas.', 'Tratamiento y rutina antifrizz.'],
    faq: [['¿Por qué se me encrespa con la lluvia?', 'El pelo seco absorbe la humedad del aire y se hincha.'], ['¿El alisado de keratina ayuda?', 'Sí, reduce mucho el frizz durante meses.'], ['¿El aire frío sirve?', 'Sí, cierra la cutícula y da brillo.']],
    resumen: ['Es cuando el pelo se hincha y pierde la forma.', 'Por falta de hidratación, la humedad y el calor.', 'Hidratar, secar bien y sellar con sérum.']
  },
  barba: {
    label: 'Barba', name: 'la barba', match: [/barba/, /perfilad/],
    consejos: ['Lava la barba con champú específico, no con gel.', 'Hidrátala cada día con aceite o bálsamo.', 'Péinala para que crezca en la misma dirección.', 'Perfila cuello y mejillas cada 1-2 semanas.', 'Pasa por el salón cada 3-4 semanas para mantener la forma.'],
    causas: ['Genética: hay zonas que crecen menos.', 'Piel seca debajo de la barba.', 'Pelos enquistados por un mal afeitado.', 'Falta de cuidado e hidratación.'],
    senales: ['Granitos o pelos enquistados que se inflaman.', 'Picor y descamación que no se van.', 'Zonas sin pelo que aparecen de repente.'],
    mitos: [['Afeitarse hace que salga más fuerte', 'No cambia el grosor ni la densidad.'], ['La barba no necesita lavarse', 'Acumula grasa y suciedad: hay que lavarla.'], ['El aceite es solo para que brille', 'Hidrata la piel de debajo y evita el picor.']],
    errores: ['Lavarla con gel de ducha → mejor champú de barba', 'Recortarla en casa sin guía → mejor perfilarla en el salón', 'Afeitar a contrapelo → mejor a favor del pelo'],
    si: ['Champú de barba.', 'Aceite o bálsamo.', 'Cepillo de cerdas naturales.'],
    no: ['Gel de ducha o jabones agresivos.', 'Afeitar a contrapelo con la piel irritada.', 'Colonias con alcohol sobre la piel irritada.'],
    rutina: ['Champú de barba 2-3 veces por semana.', 'Aceite o bálsamo cada día.', 'Secar a toques con la toalla y peinar.', 'Perfilado de cuello y mejillas.'],
    habitos: ['Alimentación: proteínas y zinc.', 'El descanso y el estrés también se notan en la barba.', 'Hábitos: no tocarla a todas horas.'],
    tratamiento: ['Estudiamos la forma de la cara.', 'Arreglo y perfilado a navaja.', 'Toalla caliente y limpieza.', 'Aceite y consejos de mantenimiento.'],
    diagnostico: ['La densidad, la forma de la cara y cómo crece.', 'Qué largo quieres y cómo la cuidas.', 'La forma que más te favorece y cómo mantenerla.'],
    faq: [['¿Cada cuánto me arreglo la barba?', 'Cada 3-4 semanas en el salón, y perfilado en casa.'], ['¿Por qué me pica?', 'Suele ser piel seca; un aceite o bálsamo lo soluciona.'], ['¿Cómo disimulo los huecos?', 'Dejándola crecer un poco y con un corte que los disimule.']],
    resumen: ['Es el cuidado y la forma de la barba.', 'Una barba cuidada cambia la cara entera.', 'Lavarla, hidratarla y arreglarla cada pocas semanas.']
  },
  verano: {
    label: 'Pelo en verano', name: 'el pelo en verano', match: [/verano/, /playa/, /piscina/, /\bsol\b/, /cloro/],
    consejos: ['Usa protector solar capilar.', 'Aclara con agua dulce después de la playa o la piscina.', 'Lleva gorra o sombrero en las horas de más sol.', 'Mascarilla hidratante dos veces por semana.', 'Evita plancha y secador en vacaciones.'],
    causas: ['Los rayos del sol, que resecan y aclaran el color.', 'El cloro de las piscinas.', 'La sal del mar.', 'Más lavados y más calor.'],
    senales: ['El pelo está muy seco y se rompe al peinarlo.', 'El color ha cambiado mucho (verdoso o anaranjado).', 'Picor o quemadura en el cuero cabelludo.'],
    mitos: [['El sol no daña el pelo', 'Lo reseca, aclara el color y debilita la fibra.'], ['El agua del mar es buena para el pelo', 'La sal lo reseca si no se aclara.'], ['Si tengo el pelo oscuro no necesito protector', 'Todos los pelos necesitan protección.']],
    errores: ['No aclarar después del baño → mejor aclarar siempre', 'Recoger el pelo mojado y tirante → mejor suelto o en trenza floja', 'Dejar el cuero cabelludo al sol → mejor gorra o protector'],
    si: ['Protector solar capilar.', 'Mascarilla hidratante.', 'Acondicionador sin aclarado.'],
    no: ['Plancha a diario.', 'Dejar la sal o el cloro en el pelo.', 'Champús agresivos.'],
    rutina: ['Champú suave después de cada día de playa o piscina.', 'Mascarilla dos veces por semana.', 'Secado al aire siempre que puedas.', 'Acondicionador sin aclarado y protector antes de salir.'],
    habitos: ['Alimentación: fruta, verdura y mucha agua.', 'Sol: evita las horas centrales.', 'Hábitos: gorra y aclarado después del baño.'],
    tratamiento: ['Diagnóstico del daño del verano.', 'Saneado de puntas.', 'Tratamiento de hidratación profunda.', 'Pauta de recuperación.'],
    diagnostico: ['La sequedad, la rotura y el cambio de color.', 'Cuánto sol, playa o piscina has tenido.', 'Tratamiento y productos de recuperación.'],
    faq: [['¿El pelo rubio se pone verde en la piscina?', 'Puede pasar por el cloro; se previene humedeciéndolo antes y con protector.'], ['¿Cada cuánto me pongo mascarilla?', 'Dos veces por semana en verano.'], ['¿Me hago el color antes o después del verano?', 'Mejor después, o antes con un tratamiento de protección.']],
    resumen: ['Es el daño que el sol, el cloro y la sal hacen en el pelo.', 'Resecan la fibra y cambian el color.', 'Proteger, aclarar e hidratar.']
  },
  calor: {
    label: 'Planchas y secador', name: 'el uso de planchas y secador', match: [/plancha/, /secador/, /calor/, /tenacilla/, /peinado/],
    consejos: ['Usa siempre protector térmico.', 'No pases de 180 °C con la plancha.', 'Seca primero al 80 % con aire templado y luego da forma.', 'No planches el pelo mojado ni húmedo.', 'Dale al pelo algún día de descanso del calor cada semana.'],
    causas: ['Temperaturas demasiado altas.', 'Planchar el pelo húmedo.', 'Pasar la plancha muchas veces por el mismo mechón.', 'No usar protector.'],
    senales: ['El pelo huele a quemado o hace ruido al plancharlo.', 'Las puntas se rompen al tocarlas.', 'Ha perdido el rizo o la forma natural.'],
    mitos: [['El protector térmico no sirve', 'Reduce mucho el daño del calor.'], ['Más temperatura alisa mejor', 'Más temperatura daña más: mejor menos calor y mechones finos.'], ['El secador no daña', 'A temperatura alta y muy cerca, también daña.']],
    errores: ['Plancha al máximo → mejor 160-180 °C', 'Secador pegado al pelo → mejor a 15-20 cm', 'Planchar en húmedo → mejor con el pelo completamente seco'],
    si: ['Protector térmico.', 'Planchas con regulador de temperatura.', 'Secador con boquilla.'],
    no: ['Planchar el pelo húmedo.', 'Temperatura máxima a diario.', 'Aceite justo antes de planchar.'],
    rutina: ['Champú y acondicionador hidratantes.', 'Mascarilla semanal.', 'Protector, secado al 80 % templado y luego dar forma.', 'Un día sin calor a la semana.'],
    habitos: ['Alimentación: hidratación y proteínas.', 'Descanso del calor algunos días.', 'Hábitos: temperatura moderada siempre.'],
    tratamiento: ['Diagnóstico del daño por calor.', 'Saneado de puntas.', 'Tratamiento reparador.', 'Te enseñamos a usar bien las herramientas.'],
    diagnostico: ['La rotura, la sequedad y las puntas.', 'Qué herramientas usas y a qué temperatura.', 'Temperatura, protector y tratamiento adecuados.'],
    faq: [['¿A qué temperatura plancho?', 'Entre 160 y 180 °C; menos si el pelo es fino o está teñido.'], ['¿Puedo planchar a diario?', 'Mejor no; si lo haces, con protector y temperatura baja.'], ['¿El secador iónico es mejor?', 'Seca más rápido y deja menos frizz.']],
    resumen: ['Es el daño que provocan planchas, tenacillas y secador.', 'El calor alto rompe la fibra del pelo.', 'Protector, temperatura moderada y días de descanso.']
  },
  degradado: {
    label: 'Degradado', name: 'el degradado', match: [/degradad/, /\bfade\b/],
    consejos: ['Repasa el degradado cada 2-3 semanas.', 'Lava con champú suave y seca bien la nuca.', 'Usa cera o pomada mate en la parte de arriba.', 'Hidrata el cuero cabelludo si lo llevas muy corto.', 'Pide siempre la misma altura de degradado para mantener la forma.'],
    causas: ['El pelo crece a distinto ritmo en laterales y arriba.', 'Los remolinos en la coronilla o la nuca.', 'Dejar pasar demasiado tiempo entre cortes.', 'Productos que no van con tu tipo de pelo.'],
    senales: ['Los laterales ya tapan la línea del degradado.', 'La nuca ha perdido la forma.', 'Han pasado más de 3 semanas desde el último corte.'],
    mitos: [['El degradado queda igual de bien a todo el mundo', 'Hay que adaptar la altura a la cara y al tipo de pelo.'], ['Al rape dura más', 'Se nota igual de rápido cuando crece.'], ['Con máquina en casa se mantiene', 'Se pierde la transición: mejor en el salón.']],
    errores: ['Repasarlo en casa → mejor en el salón', 'Productos brillantes y pesados → mejor acabado mate', 'Esperar mucho entre cortes → mejor cada 2-3 semanas'],
    si: ['Pomada o cera mate.', 'Champú suave.', 'Crema hidratante para la nuca.'],
    no: ['Geles con mucho alcohol.', 'Repasar con máquina en casa.', 'Productos muy grasos.'],
    rutina: ['Champú suave 3 veces por semana.', 'Hidratante en el cuero cabelludo si lo llevas muy corto.', 'Secar con toalla y peinar con los dedos.', 'Peinado con pomada mate.'],
    habitos: ['Hábitos: no tocarse el pelo con producto todo el día.', 'Alimentación equilibrada para un pelo sano.', 'Cita fija cada 2-3 semanas.'],
    tratamiento: ['Elegimos la altura del degradado según tu cara.', 'Máquina en laterales y transición.', 'Arriba con tijera.', 'Perfilado y peinado.'],
    diagnostico: ['La forma de la cabeza, los remolinos y el tipo de pelo.', 'Cómo te peinas y cada cuánto vienes.', 'La altura del degradado y el producto.'],
    faq: [['¿Cada cuánto vengo?', 'Cada 2-3 semanas para que esté perfecto.'], ['¿Degradado bajo, medio o alto?', 'Depende de tu cara y de tu estilo; te aconsejamos en el salón.'], ['¿Qué producto uso?', 'Pomada o cera mate para un acabado natural.']],
    resumen: ['Es la transición de corto a largo en laterales y nuca.', 'Bien hecho, estiliza la cara y queda limpio.', 'Elegir bien la altura y repasarlo cada 2-3 semanas.']
  }
};

/* Fórmulas: cada una monta un guion completo a partir de un tema */
(function () {
  const L = a => a.map((x, i) => `${i + 1}. ${x}`).join('\n');
  const B = a => a.map(x => `• ${x}`).join('\n');
  const up = x => x.charAt(0).toUpperCase() + x.slice(1);
  window.PRO = [
    { p: 'consejos', f: 'reel', suf: '5 consejos de cuidado en casa', hook: K => `${K.label}: cinco consejos que te damos como profesionales.`, intro: K => `Si te preocupa ${K.name}, estos hábitos marcan la diferencia.`, body: K => L(K.consejos), closing: () => 'Constancia: los resultados se notan en semanas, no en días.', notes: 'Profesional a cámara en el salón. Un consejo por plano, con el texto en pantalla.' },
    { p: 'consejos', f: 'reel', suf: 'cuándo acudir a un especialista', hook: K => `${K.label}: ¿cuándo deja de ser normal?`, intro: () => 'Hay señales que indican que conviene consultar.', body: K => `Consulta si:\n${B(K.senales)}\n\nEn el salón te hacemos un diagnóstico y, si hace falta, te recomendamos ir al dermatólogo.`, closing: () => 'Mejor consultar a tiempo que esperar.', notes: 'Tono serio y cercano, sin alarmar. Señales en texto grande.' },
    { p: 'consejos', f: 'carrusel', suf: 'las causas más frecuentes', hook: K => `${K.label}: estas son las causas más habituales.`, intro: () => 'Entender la causa es el primer paso para tratarlo.', body: K => L(K.causas), closing: () => 'Cada caso es distinto: un diagnóstico en el salón te dice qué te pasa a ti.', notes: 'Portada con el título y una causa por diapositiva.' },
    { p: 'consejos', f: 'carrusel', suf: 'mitos y realidades', hook: K => `${K.label}: ¿mito o realidad?`, intro: () => 'Desmontamos lo que más se escucha.', body: K => K.mitos.map(([m, r]) => `MITO: ${m}.\nREALIDAD: ${r}`).join('\n\n'), closing: () => 'Infórmate siempre con profesionales.', notes: 'Formato MITO / REALIDAD, una pareja por diapositiva.' },
    { p: 'consejos', f: 'reel', suf: 'errores comunes que debes evitar', hook: K => `${K.label}: si haces esto, para.`, intro: () => 'Errores del día a día que empeoran el problema.', body: K => L(K.errores.map(e => { const [a, b] = e.split(' → '); return `${a}. ${up(b)}.`; })), closing: () => 'Cambiar estos hábitos ya es un gran paso.', notes: 'Plano de "lo que no" y justo después "lo que sí".' },
    { p: 'consejos', f: 'reel', suf: 'productos que recomendamos y cuáles evitar', hook: K => `${K.label}: qué productos sí y cuáles no.`, intro: () => 'No todo lo que se vende sirve para todo el mundo.', body: K => `Sí:\n${B(K.si)}\n\nEvita:\n${B(K.no)}`, closing: () => 'Si dudas, te decimos qué te conviene según tu pelo.', notes: 'Productos sobre la mesa del salón. Sin marcas si no hay colaboración.' },
    { p: 'consejos', f: 'carrusel', suf: 'rutina semanal paso a paso', hook: K => `${K.label}: tu rutina semanal, paso a paso.`, intro: () => 'Una rutina sencilla para seguir en casa.', body: K => `Lavado: ${K.rutina[0]}\nTratamiento: ${K.rutina[1]}\nSecado: ${K.rutina[2]}\nUna vez por semana: ${K.rutina[3]}`, closing: () => 'Síguela durante un mes y notarás el cambio.', notes: 'Una diapositiva por paso.' },
    { p: 'consejos', f: 'reel', suf: 'qué influye de verdad (alimentación, estrés y hábitos)', hook: K => `${K.label}: lo que de verdad influye.`, intro: () => 'Lo que haces fuera del salón también cuenta.', body: K => B(K.habitos), closing: () => 'El cuidado empieza por dentro.', notes: 'Explicación a cámara con texto de apoyo.' },
    { p: 'proceso', f: 'reel', suf: 'el tratamiento que hacemos en el salón', hook: K => `${K.label}: así lo tratamos en el salón.`, intro: () => 'Te enseñamos el tratamiento paso a paso.', body: K => L(K.tratamiento), closing: () => 'Con constancia, los resultados se ven.', notes: 'Grabar con un cliente real (con permiso). Planos de detalle de cada paso.' },
    { p: 'proceso', f: 'reel', suf: 'así hacemos el diagnóstico', hook: K => `${K.label}: lo primero es saber qué pasa.`, intro: () => 'Antes de recomendar nada, analizamos.', body: K => `Qué miramos: ${K.diagnostico[0]}\nQué preguntamos: ${K.diagnostico[1]}\nQué recomendamos: ${K.diagnostico[2]}`, closing: () => 'Un buen diagnóstico evita perder tiempo y dinero.', notes: 'Primeros planos del pelo o del cuero cabelludo, si es posible.' },
    { p: 'clientes', f: 'reel', suf: 'preguntas frecuentes de nuestros clientes', hook: K => `${K.label}: lo que más nos preguntáis.`, intro: () => 'Respondemos las dudas más habituales.', body: K => K.faq.map(([q, a]) => `${q}\n→ ${a}`).join('\n\n'), closing: () => '¿Tienes otra duda? Déjala en comentarios.', notes: 'Pregunta en pantalla y respuesta a cámara.' },
    { p: 'antes', f: 'reel', suf: 'antes y después de un tratamiento', hook: K => `${K.label}: mira la evolución.`, intro: () => 'Resultado real después del tratamiento.', body: K => `Antes: cómo llegó al salón.\nQué hicimos:\n${L(K.tratamiento)}\nDespués: el resultado.`, closing: () => 'El tratamiento adecuado y constancia en casa.', notes: 'Mismo ángulo y misma luz en el antes y el después. Con permiso del cliente.' },
    { p: 'equipo', f: 'reel', suf: 'te lo explicamos en 30 segundos', hook: K => `${K.label}, explicado en 30 segundos.`, intro: () => 'Lo resumimos rápido y claro.', body: K => `Qué es: ${K.resumen[0]}\nPor qué pasa: ${K.resumen[1]}\nQué hacer: ${K.resumen[2]}`, closing: () => 'Si tienes dudas, pregúntanos en el salón.', notes: 'Plano medio, buena luz, micro de solapa.' },
    { p: 'consejos', f: 'stories', suf: 'encuesta y respuestas en stories', hook: () => '¿Te pasa? Cuéntanos.', intro: K => `Stories para saber cuánta gente tiene dudas sobre ${K.name}.`, body: K => `Encuesta: «¿Te preocupa ${K.name}?» Sí / No\nCaja de preguntas abierta todo el día.\nAl día siguiente, respuestas en vídeo. Por ejemplo:\n${K.faq[0][0]} → ${K.faq[0][1]}`, closing: () => 'Las preguntas que lleguen son ideas para próximos vídeos.', notes: 'Guardar las preguntas en la lista de ideas.' }
  ];
  const CTA = ['Si te ha gustado, síguenos para más consejos.', 'Guárdalo para tenerlo a mano y compártelo con quien lo necesite.', 'Pide cita y lo revisamos en el salón.', '¿Dudas? Déjalas en comentarios y las respondemos en otro vídeo.', 'Escríbenos por privado y te aconsejamos.'];
  window.buildPro = function (key, i) {
    const K = KB[key], F = PRO[i];
    if (!K || !F) return null;
    return { pillar: F.p, format: F.f, title: `${K.label}: ${F.suf}`, hook: F.hook(K), intro: F.intro(K), body: F.body(K), closing: F.closing(K), cta: CTA[(i + key.length) % CTA.length], notes: F.notes, topic: key };
  };
  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  window.matchTopic = function (text) {
    const t = norm(text);
    for (const [k, K] of Object.entries(KB)) if (K.match.some(r => r.test(t)) || t.includes(norm(K.label))) return k;
    return null;
  };
  /* reconoce un título hecho con una fórmula: "Caída del cabello: 5 consejos..." */
  window.parseProTitle = function (title) {
    const i = String(title || '').indexOf(': ');
    if (i < 0) return null;
    const key = matchTopic(title.slice(0, i)), suf = norm(title.slice(i + 2));
    const fi = PRO.findIndex(F => norm(F.suf) === suf || suf.startsWith(norm(F.suf).slice(0, 18)));
    return key && fi >= 0 ? { key, fi } : (key ? { key, fi: -1 } : null);
  };
})();
