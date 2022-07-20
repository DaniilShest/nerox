const servicesData = [
  {
    id: 1,
    icon: "flaticon-coding",
    title: 'Веб-сайты',
    url: 'web-sites',
    text: 'Создание и разработка сайтов с индивидуальным дизайном по доступным ценам.',
    description:
      <>
        <p className="services-text mb-0">Многие предприниматели сегодня задаются вопросом, для чего нужен веб-сайт. Когда нам нужно купить товар или заказать услугу, мы ищем то, что нужно в интернете. Компании, имеющие собственные веб-сайты, неоспоримо получают огромное преимущество по сравнению с конкурентами. <br /> Вот лишь несколько причин открыть веб-сайт:
        </p>
        <ul className="services-text mb-40">
          <li className='ml-15'>Распространение информации. Веб-сайт — отличный способ донести до аудитории информацию о своей компании, рассказать о специализации, услугах, ценовой политики и т.д.</li>
          <li className='ml-15'>Эффективная реклама. Если компания создает сайт, он автоматически становится ее инструментом для продвижения рекламы.</li>
          <li className='ml-15'>Площадка для общения. Веб-сайт является еще и средством коммуникации, здесь могут общаться как сотрудники между собой, так и клиенты с компанией. Хорошего результата позволяет добиться обратная связь с пользователями.</li>
          <li className='ml-15'>Формирование имиджа. Сайт создает положительный имидж вашей компании в интернете, повышает статус организации, формирует лояльное отношение потребителей.</li>
          <li className='ml-15'>Результативный маркетинг. Сайт позволяет продвигать и продавать товары/услуги.</li>
        </ul>
      </>
  },
  {
    id: 2,
    icon: "flaticon-coding",
    title: 'Интернет-магазины',
    url: 'online-shops',
    text: 'Обладает всем функционалом для демонстрации и продажи товаров/услуг в Интернете.',
    description:
      <>
        <p className="services-text mb-40">Интернет-магазин — это форма электронной торговли, которая позволяет потребителям покупать товары или услуги с помощью веб-браузера. Потребители находят интересующий товар, посещая сайт розничного продавца напрямую или путем поиска среди альтернативных поставщиков. Торговля может происходить через небольшой локальный магазин, крупного розничного продавца, магазин электронной коммерции или частное лицо, которое продает товары через сторонний сервис. Если вам необходимо узнать, что такое интернет-магазин и как он работает, в этой статье мы подробно опишем его структуру и расскажем о том, как запустить успешный онлайн бизнес.
        </p>
      </>
  },
  {
    id: 3,
    icon: "flaticon-tools",
    title: 'Мобильная разработка',
    url: 'mobile-development',
    text: 'Полный цикл разработки мобильных приложений под все операционные системы.',
    description:
      <>
        <p className="services-text mb-10">Разработка мобильных приложений — это создание программного обеспечения (ПО), которое будет работать на мобильном устройстве. Такая сложная задача требует времени, навыков, достаточного бюджета. Однако даже с опытной командой не всегда получается создать что-то стоящее, ведь уже существуют миллионы приложений, а выделиться среди них трудно. Ежедневно разработчики создают их сотнями: одни обретают популярность, приносят доход и пользу; другие ограничиваются узким кругом пользователей, не распространяясь массово.
        </p>
        <p className="services-text mb-40">
          Уже каждый второй человек проводит за смартфоном по 5 часов в день. Нынешняя тенденция позволяет умело подстраивать бизнес и выгодно монетизировать любовь к интернет-пространству. Помимо рекламы, мобильное приложение создаёт имидж компании, даёт информацию о целевой аудитории и оценку поведенческих факторов покупателей.
        </p>

      </>
  },
  {
    id: 4,
    icon: "flaticon-curve",
    title: 'SEO оптимизация',
    url: 'seo-optimization',
    text: 'SEO продвижение сайта. Собственные авторские стратегии SEO продвижения',
    description:
      <>
        <p className="services-text mb-10">
          SEO (Search Engine Optimization) – это технология раскрутки сайта в поисковой выдаче с целью получения трафика. В основе работы лежит знание алгоритмов ранжирования ресурсов в выдаче и улучшение критериев сайта с целью выведения его в топ результатов поиска по требуемым ключевым фразам.
        </p>
        <p className="services-text mb-10">
          В результате проведения качественного SEO сайт поднимается в выдаче поисковика, а значит, по ссылке на продвигаемую страницу идет трафик посетителей, который будет тем больше, чем выше позиция такой ссылки.
        </p>
        <p className="services-text mb-10">
          Принцип работы выглядит очень просто: пользователь вводит интересующий его запрос, а поисковая система строит список ссылок на ресурсы в определенном порядке. После этого потенциальный клиент знакомится с кратким описанием ресурса и переходит на него, если это его заинтересовало. Чем выше в результатах находится такая ссылка, тем вероятнее переход, поскольку пользователь обычно не заходит дальше первой страницы выдачи.
        </p>
        <p className="services-text mb-40">
          Принцип построения поисковой выдачи по запросу использует сложную формулу сортировки, учитывающую десятки параметров. При этом точный алгоритм такого ранжирования не разглашается владельцами поисковых систем, которые озвучивают только общие принципы построения качественного и полезного для людей ресурса, помогающие подняться в топ. На практике без использования технологий SEO-продвижения практически невозможно вывести сайт на первую страницу выдачи в высококонкурентных коммерческих тематиках, даже если его контент и техническая реализация будут идеальны.
        </p>

      </>
  }
]

export default servicesData;