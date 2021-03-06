const blogData = [
  {
    id: 1,
    img: 'assets/img/blog/1/react.jpg',
    img2: 'assets/img/blog/2/blog-1.jpg',
    img3: 'assets/img/blog/3/blog-5.jpg',
    img4: 'assets/img/blog/blog-1.jpg',
    bigImg: 'assets/img/blog/blog-big-1.jpg',
    gridImg: 'assets/img/blog/grid/blog-1.jpg',
    tags: ["React", "Веб-разработка", "SSR"],
    title: 'Что нужно знать React-разработчику в 2022 году',
    date: '22 июня 2022г.',
    desc: 'This article reveals how something as trivial as administration in both software and As-a-service can be either a booster or bottleneck to a company’s productivity and innovation. It also provides several design aspects that UX practitioners should evaluate when designing the administration experience.',
    class: 'postbox__thumb w-img mb-30',
    blogAuthor: 'Горбачев Иван',
    category: 'Веб-разработка',
    info:
      <>
        <h4 className="postbox__title-sm mb-20">Знание JavaScript</h4>
        <p>
          React построен на основе JavaScript. В первую очередь людям, желающим изучать React, нужно понять, насколько хорошо они знают сам JavaScript.
        </p>
        <p className="mb-40">
          Очень часто разработчики задают вопросы, которые показывают, что они не знают основ JavaScript. В то время как вопросы по экосистеме React возникают гораздо реже. Поэтому в первую очередь мы рекомендуем углубить знания JavaScript, а потом возвращаться к React.
        </p>

        <h4 className="postbox__title-sm mb-20">Использование State Manager</h4>
        <p>В React.js нет встроенного State Manager. Как стандарт долгое время использовалась библиотека Redux, но она не очень хорошо выполняет эту роль — при работе с ней приходится писать много бойлерплейт-кода, отсутствуют средства управления асинхронным поведением и побочными эффектами.</p>
        <p>Так начали появляться другие State Managers. Разработчики Redux учли свои недочеты и представили библиотеку Redux Toolkit, которую хорошо приняли frontend разработчики.</p>
        <p>Redux Toolkit — библиотека поверх Redux. Она дает возможность добиться того же, что и Redux, но с Redux Toolkit вам придется писать намного меньше кода, чем c Redux. Кроме того, Redux Toolkit использует внутри себя Immer.js, поэтому не нужно думать над иммутабельностью данных, т.е использовать деструктуризацию, создавая каждый раз новые объект состояния в редьюсерах.</p>
        <p>Еще одна довольно перспективная библиотека — MobX. Бизнес логика MobX отличается от Redux. Не стоит забывать и про Effector, которую создали выходцы из СНГ.</p>
        <p className="mb-40">На сегодняшний день эти три State Managers являются самыми популярными. Все три  библиотеки очень хорошо справляются со своей задачей, но мы обычно используем либо Redux Toolkit, либо Effector.</p>

        <h4 className="postbox__title-sm mb-20">Server-Side Rendering</h4>
        <p>Сейчас есть несколько популярных SSR решений. На наших первых проектах, где мы применяли SSR, у нас было полностью кастомное решение. Со временем мы начали изучать и использовать готовые решения. У каждого из них есть свои плюсы и минусы. Например, на одном из текущих проектов мы используем Razzle, а на другом — Next.js.</p>
        <p className="mb-40">Next.js — это популярный легковесный фреймворк для статических и серверных приложений, использующих React. Он включает в себя готовые решения для стилизации и маршрутизации и предполагает, что вы используете Node.js в качестве серверной среды. То, что у Next не совсем нравится — в некоторых случаях он диктует архитектуру и то, как строить приложения. Но это уже вопрос вкуса и личных пристрастий.</p>

        <h4 className="postbox__title-sm mb-20">React Hooks</h4>
        <p>React Hooks пришли к нам в гости с 16.8 версии и останутся с нами надолго. Если вы про них сейчас слышите впервые, то, сначала вам стоит ознакомиться с ними в официальной документации React.</p>
        <p>Хуки — это просто еще один способ описывать логику ваших компонентов. Он позволяет добавить к функциональным компонентам некоторые возможности, ранее присущие только классовым компонентам.</p>
        <p>Большинство людей на собеседовании плывут на вопросах про хуки, хотя вся информация есть в документации. Всем кто, хочет развиваться, непременно нужно хотя бы посмотреть как они работают, а с опытом работы можно понять технологию глубже.</p>
        <p>На использование хуков накладываются некоторые ограничения, которые их отличают от обычных функций. В первую очередь их нельзя использовать в классовых компонентах. Хуки нельзя вызывать внутри циклов, условий. Это ограничение накладывает сам React, чтобы получить возможность отслеживать, какие хуки были вызваны.</p>
        <p className="mb-40">Когда хуки только появились, мы в Holyweb экспериментировали на них, писали новые компоненты и смотрели, что из этого выйдет. Когда все хорошо получалось, мы использовали их дальше, писали на них новые фичи. Для тех, кто до сих пор не использовал React Hooks, я бы рекомендовал это попробовать — с ними очень легко описывать нужную логику, они делают код чистым и более понятным.</p>
      </>
  },
  {
    id: 2,
    img: 'assets/img/blog/2/react-native.png',
    img2: 'assets/img/blog/2/blog-1.jpg',
    img3: 'assets/img/blog/3/blog-5.jpg',
    img4: 'assets/img/blog/blog-1.jpg',
    bigImg: 'assets/img/blog/blog-big-1.jpg',
    gridImg: 'assets/img/blog/grid/blog-1.jpg',
    tags: ["Мобильная разработка"],
    title: 'Как стать разработчиком мобильных приложений',
    date: '15 июня 2022г.',
    desc: 'This article reveals how something as trivial as administration in both software and As-a-service can be either a booster or bottleneck to a company’s productivity and innovation. It also provides several design aspects that UX practitioners should evaluate when designing the administration experience.',
    class: 'postbox__thumb w-img mb-30',
    blogAuthor: 'Коротков Никита',
    category: 'Мобильная разработка',
    info:
      <>
        <h4 className="postbox__title-sm mb-20">Востребована ли профессия мобильного разработчика? Легко ли найти работу в этой сфере?</h4>
        <p>
          В 2021 году мобильная разработка остаётся одним из самых востребованных направлений. Ситуация с пандемией только дала толчок для её развития. Многие компании ушли в онлайн, одной лишь веб-страницы недостаточно для того, чтобы выживать в конкурентной среде, которая явно задаёт тенденцию на мобильные решения.
        </p>
        <p>
          Даже в докоронакризисные времена на рынке была нехватка в мобильных разработчиках. Сейчас ситуация стала намного острее.
        </p>
        <p className="mb-40">
          Из всего вышесказанного выходит, что найти работу для начинающего специалиста, имеющего пару-тройку проектов портфолио, не составит труда. К тому же формат удалёнки становится неотъемлемой частью в IT, а программ стажировок от крупных компаний становится всё больше.
        </p>

        <h4 className="postbox__title-sm mb-20">Какие направления существуют в мобильной разработке? Есть ли смысл осваивать кроссплатформенные решения?</h4>
        <p>Существуют три основных направления в мобильной разработке: Android, iOS и кроссплатформенные решения (Flutter, React Native, PhoneGap).</p>
        <p>Для Android-разработки используются языки Kotlin и Java, для iOS — Swift и Objective-C. Ещё несколько лет назад основными языками для Android и iOS были Java и Objective-C. Однако с появлением новых языков многие проекты, в том числе крупных IT-компаний, стали использовать современные решения. Сейчас начинающему специалисту достаточно владеть знаниями об основной платформе, на которой он разрабатывает (iOS или Android), а также одним из новых языков программирования (Swift или Kotlin).</p>

        <h4 className="postbox__title-sm mb-20">Какие основные роли и задачи мобильного разработчика?</h4>
        <p>
          СРазработчик в целом — это не только тот, кто набирает код на клавиатуре. Это специалист, который понимает конкретную бизнесовую проблему, которую ему необходимо решить с помощью этого кода. Мобильный разработчик — не исключение. Единственное отличие — это понимание особенностей мобильных технологий в целом (таких как push-уведомления, ограничения скорости интернета, зарядки и памяти).
        </p>
        <p>
          Очевидно, что мобильные приложения — это та же фронтенд-часть приложения. Соответственно, отсюда вытекают стандартные задачи и проблемы:  поддержка вёрстки для большинства девайсов, необходимость учитывать версии операционных систем и т.д.
        </p>
        <p className="mb-40">Одна из основных проблем, которую необходимо учитывать в разработке тонкого мобильного клиента (основная часть и логика которого реализуется на бэкендe), — это поддержка обратной совместимости между различными версиями приложений. Одна из основных задач мобильного разработчика — выполнение поставленных требований с оглядкой на перечисленные выше ограничения и особенности.</p>

        <h4 className="postbox__title-sm mb-20">Как стать разработчиком мобильных приложений?</h4>
        <p>Если мы говорим про случай, когда у человека нет знаний и опыта в программировании, то стоит для начала изучить:</p>
        <ul className="mb-20">
          <li>один из языков программирования (Kotlin или Swift),</li>
          <li>саму платформу (Android или iOS),</li>
          <li>объектно-ориентированное программирование,</li>
          <li>алгоритмы и структуры данных (без фанатизма, только основные принципы).</li>
        </ul>
        <p>Также нужно обязательно научиться гуглить. Кому-то этот совет может показаться оскорбительным, но это не так. Программисты всех уровней и мастей гуглят,  без исключений. Умение правильно задать вопрос — навык, который потребуется и в дальнейшей работе с коллегами, если этот вопрос нужно будет адресовать им.</p>
        <p className="mb-40">Стоит оговориться, что для начала разработки под iOS необходимы устройства от Apple. Как минимум нужно приобрести бюджетный Mac mini или MacBook на вторичном рынке. Для изучения одного из языков программирования и изучения самой платформы подойдут основные туториалы на сайте Apple или Android. В идеале — найти ментора, который поможет на первоначальном этапе и выстроит план обучения. Курсы тут тоже будут кстати, но не стоит надеяться, что после простого их прослушивания всё станет очевидным и понятным.</p>

        <h4 className="postbox__title-sm mb-20">Останется ли мобильная разработка востребованной в ближайшие годы?</h4>
        <p className="mb-40">Конечно, мобильная разработка останется востребованной. Несмотря на очевидную стагнацию в выпуске новых фич для смартфонов, ими всё равно продолжает пользоваться огромное число людей по всему миру. И большинство задач тоже будет решаться с помощью устройства, которое находится у вас в кармане. Как минимум в ближайшие 10-15 лет.</p>
      </>
  },
  {
    id: 3,
    img: 'assets/img/blog/3/seo-optim.jpg',
    img2: 'assets/img/blog/2/blog-1.jpg',
    img3: 'assets/img/blog/3/blog-5.jpg',
    img4: 'assets/img/blog/blog-1.jpg',
    bigImg: 'assets/img/blog/blog-big-1.jpg',
    gridImg: 'assets/img/blog/grid/blog-1.jpg',
    tags: ["SEO", "Оптимизация", "Раскрутка сайта"],
    title: 'Как раскрутить сайт — отвечают эксперты',
    date: '20 марта 2022г.',
    desc: 'This article reveals how something as trivial as administration in both software and As-a-service can be either a booster or bottleneck to a company’s productivity and innovation. It also provides several design aspects that UX practitioners should evaluate when designing the administration experience.',
    class: 'postbox__thumb w-img mb-30',
    blogAuthor: 'Крюков Тимур',
    category: 'SEO оптимизация',
    info:
      <>
        <h4 className="postbox__title-sm mb-20">Что нужно учесть при создании сайта, чтобы его посещала целевая аудитория?</h4>

        <p>
          К сожалению, универсального ответа нет, ведь продукты очень разные. Метод продажи кроссовок (как и любых других FMCG–товаров) очень сильно отличается от продаж сложных продуктов и сервисов. Тем не менее, могу дать следующие рекомендации:
        </p>

        <ul className="mb-20">
          <li>Мобильная эра уже наступила. Львиная доля трафика приходится на мобильные платформы. Это значит, сайт должен идеально смотреться на всех мобильных устройствах.</li>
          <li>Время контакта с пользователем заметно сократилось. Ключевые месседжи нужно доносить максимально быстро и ёмко.</li>
          <li>Посмотрите на популярность Facebook и Instagram. Почему мы их так любим? Там много картинок. Используйте яркие визуальные креативы — это включает рептильный мозг человека и наилучшим образом сказывается на итоговой конверсии.</li>
          <li>Постарайтесь минимизировать точки выхода пользователя с целевой страницы. Чем меньше возможностей у пользователя заблудиться на вашем сайте — тем выше будет ваша конверсия.</li>
        </ul>

        <h4 className="postbox__title-sm mb-20">Как оптимизировать сайт под поисковики?</h4>

        <p>
          Поисковики научились определять, что нам реально нравится, а что нет, с очень высокой точностью. Сделайте сайт интересным, цепляйте внимание пользователя, сопровождайте аккаунты в соцсетях, приземляйте оттуда трафик через предложения и акции. И, пожалуй, самое важное — мобильные устройства. Уделите этому максимум внимания. Следующий ключевой пункт — поведенческие факторы. А прописывание заголовков, разметка и прочие вещи канули в лету, и слава богу!
        </p>

        <h4 className="postbox__title-sm mb-20">Что ещё, кроме SEO, поможет раскрутить сайт?</h4>

        <p className="mb-40">
          Могу выделить три пункта. Во-первых, создавайте собственную аудиторию, работайте с ней, возвращайте её через спецпредложения. Во-вторых, ведите свой блог. Это не только возможность рассказать что-то интересное потребителю и доказать свою экспертизу, но это также структурирует ваш бизнес — ведь нет лучшего способа что-то действительно понять, чем написать это на бумаге. В-третьих, работайте с агентами влияния. Это отличный канал для привлечения целевой аудитории. А именно ЦА даст вам хорошие поведенческие факторы.
        </p>
      </>
  }

]
export default blogData;