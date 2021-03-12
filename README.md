# DHL Delivery

[Link to the application](https://dhl-delivery-63f50.firebaseapp.com/)

Что интересного?

🟡 Много различных UI эффектов и элементов

🟣 Работа с библиотекой выпадающих списков

🔵 Работа с Plyr API 

🔴 Работа с Yandex Map API

🍂 Данный проект я делал осенью 2019 года и закончил зимой 2020. Основной упор тогда был на изучении JS, поэтому данный проект для меня был не особо важен. Понятное дело что я его не делал для компании
DHL, я не знаю почему я взялся за этот проект, нужно было взять что-то менее дерзкое, но как никак это всё равно опыт.

🥤 Проект делал на своей первой сборке Gulp. Помню как очень долго вникал во всё это, что это такое, как работает, всё это собрать в голове, осмыслить и написать хорошую сборку было для меня проблемой,
и конечно сборка получилась так себе и очень корявой. Зато позже я сделал новую сборку, которая уже более правильная, вот кстати она: [Link](https://github.com/NikitaBelevich/Gulp-Build)

🎥 Секция с видео:

Для медиа плеера я использовал библиотеку Plyr. Основная сложность была впрочем как и с любой библиотекой, это трудности с подгоном своих стилей по дизайну в компоненты этой библиотеки, цвет интерфейса библиотеки выбрать нельзя, разработчики ничего не написали об этом.
Ну и вторая трудность это конечно секция с блоками, которая позиционируется наезжая на само видео, нужно было их как-то скрывать на момент просмотра видео, плюс также учесть все эффекты плавности, сделать это получилось, но с багами, сейчас бы я наверное использовал делегирование и сделал бы всё куда лучше.

![Video](https://s723sas.storage.yandex.net/rdisk/ea3c5bdb0882c45c3ca4db8500a4158f9df49cc6ab3da5fe0258b294bd70cf98/604bf1e3/YeIfSK1NOCuChffh-pdBsE-ld9KCiSymK1qox1TOoB3zPclQmTFyXJshCpdGJKzOUOx-9utJtPNyp1WCN4MvXw==?uid=786234534&filename=1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=786234534&fsize=245739&hid=d0ae3524a869d015454c817607e43a52&media_type=image&tknv=v2&etag=0e554d4bc70f1da936a14a0a9e390085&rtoken=lD1unBPOr4TZ&force_default=yes&ycrid=na-66f617dddd067af92e473e0efb4e5623-downloader11f&ts=5bd5ed3a5fec0&s=95beeb1ff2cac326581a974b3d7a4b8ddfd62fe8eb3262bec4a7876c89ae5d03&pb=U2FsdGVkX1_436rOwdLREL0zxp4icPhiVprVPiH5J_TTkQxmRchvCdRAhLQ6xGiVUX1xry-9i9DbUxpqRISTZIDOmCQd1qQc2T0tT3KKN2k)

🌍 Карта на Yandex Map API:

Ну и пожалуй это самое крутое что есть в этом проекте. Я заморочился встроить Яндекс карту в "аккордион" который находится в блоке с табами! При этом всём, сама карта не из конструктора карт Яндекса,
а сделана мной с помощью экземпляров классов Yandex Map API. Огромное API с кучей настроек и конфигурациями, это просто вещь на все случаи жизни. Я добавил свои метки на карту в виде блоков вёрстки, указал им координаты на реальные пункты DHL в Нижнем Новгороде, добавил описание и тематические иконки. 
При этом всём, API подключается по запросу, то есть только после того как раскрыт этот "аккордион", подключается к странице script с src на API - это правильно, ну, и даже заморочился с preloader.
Я очень рад что познакомился с данным API и знаю что оно есть, ради этого стоило делать этот проект.


![Map](https://s239vla.storage.yandex.net/rdisk/a4493dca222cd169330d47d891846336899de0578e40fece0f535834db49fa0d/604bf45d/YeIfSK1NOCuChffh-pdBsKTKC1F2m_n88rRpzr1dg5HMBgJhdV12BXIPS4SP0Op_ld_7SQPKAUYIvqjU83nZVg==?uid=786234534&filename=2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=786234534&fsize=44278&hid=62f0ecae41c543be4b06707197faf135&media_type=image&tknv=v2&etag=f7b169268e47590d0592e47fa1c7e262&rtoken=cOHpwJWI8mm1&force_default=yes&ycrid=na-e99afc53c00b401259a3abb838bfdab2-downloader10f&ts=5bd5ef9701140&s=3ff779640c4439406e8b2471f5bd4aa1628798fb6522fcf0ea60695948424d6a&pb=U2FsdGVkX1_NUnRFgj9NqEesAkfEB_TdGpDER7VWQCIQdtq86Ql32zvXFerwg6fgSJGuYaUPgbM6_6WmZQRNi4y462OMfgKp6BGB51K-u-w)
