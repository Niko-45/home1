import Button, { Card, Card2 } from "./components/card";
import "./components/app.css";
export default function App() {
  return (
    <body style={{ maxWidth: "1200px", margin: "auto" }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </body>
  );
}

function Section1() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <img src="/assets/images/img (13).png" alt="" />
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <p>Чему вы научитесь</p>
          <p>Процесс обучения</p>
          <p>Стоимость</p>
          <p>Контакты</p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button bgColor={"white"} textBtn={"Регистрация"} />
        <Button bgColor={"blue"} col={"white"} textBtn={"Войти"} />
      </div>
    </header>
  );
}
function Section2() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#EAF2F5",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div style={{ width: "45%" }}>
        <h1>
          Школа программирования для тех, кому нужны реальные навыки, а не
          просто сертификат
        </h1>
        <p>
          Пройдите тестирование, чтобы получить доступ к бесплатным вводным
          урокам
        </p>
        <Button
          textBtn={"Пройти тестирование"}
          col={"white"}
          bgColor={"orange"}
        />
      </div>
      <div style={{ width: "45%" }}>
        <img src="/assets/images/img (5).png" alt="" />
      </div>
    </section>
  );
}
function Section3() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "45%" }}>
        <img src="/assets/images/img (14).png" alt="" />
      </div>
      <div style={{ width: "45%" }}>
        <div>
          <Button
            textBtn="Язык программирования Python"
            col={"white"}
            bgColor={"#5096FF"}
          />
          <Button textBtn="Сети" col={"white"} bgColor={"#FFB359"} />
          <Button textBtn="Базы данных" col={"white"} bgColor={"#FF6F50"} />
          <Button
            textBtn="Фреймворки Flask и Django"
            col={"white"}
            bgColor={"#4BD071"}
          />
          <Button
            textBtn="Отладка и тестирование"
            col={"white"}
            bgColor={"#50C0FF"}
          />
          <Button textBtn="Docker" col={"white"} bgColor={"#4B77B9"} />
          <Button textBtn="Git" col={"white"} bgColor={"#AF93FF"} />
        </div>
        <p>Это необходимый минимум для современного backend-разработчика</p>
      </div>
    </section>
  );
}
function Section4() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexWrap: "wrap",
      }}
    >
      <Card2
        img="/assets/images/img (8).png"
        w="22%"
        title="Огромное количество практики"
        bg="#EAF2F5"
        text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
      />
      <Card2
        img="/assets/images/img (9).png"
        w="22%"
        title="Современные методики обучения"
        bg="#EAF2F5"
        text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
      />
      <Card2
        img="/assets/images/img (10).png"
        w="22%"
        title="Простое и понятное изложение"
        bg="#EAF2F5"
        text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
      />
      <Card2
        img="/assets/images/img (11).png"
        w="22%"
        title="Гибкий график занятий"
        bg="#EAF2F5"
        text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
      />
      <Card2
        img="/assets/images/img (12).png"
        w="22%"
        title="Прямая связь с опытными программистами"
        bg="#EAF2F5"
        text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
      />
      <Card2
        img="/assets/images/img (17).png"
        w="22%"
        title="Оплата небольшими частями"
        bg="#EAF2F5"
        text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
      />
      <Card2
        img="/assets/images/img (4).png"
        w="22%"
        title="Быстрый и легкий возврат"
        bg="#EAF2F5"
        text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
      />
    </section>
  );
}
function Section5() {
  return (
    <section style={{ textAlign: "center" }}>
      <h1>Как происходит обучение на YtYt?</h1>
      <p>
        Обучение должно быть комфортным. Поэтому мы разработали собственную
        платформу для обучения программированию. На ней вы можете не только
        изучать теорию, но и запускать готовые примеры и даже писать свой
        собственный код.
      </p>
      <div className="backImage"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"white"
        }}
      >
        <img src="/assets//images/Group 1193.png" alt="" />
        <p>Посмотреть видео</p>
      </div>
    </section>
  );
}
function Section6() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "10px",
        }}
      >
        <Card2
          img="/assets/images/img (19).png"
          title="Весь материал разбит на небольшие уроки"
          text="Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания."
          w="30%"
        />
        <Card2
          img="/assets/images/img (20).png"
          title="Обучение через практику"
          text="Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда."
          w="30%"
        />
        <Card2
          img="/assets/images/img (21).png"
          title="Нет ограничений по времени"
          text="Можно совмещать учёбу с работой и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв."
          w="30%"
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "30%",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Button textBtn="Начать обучение" bgColor="#F15525" col={"white"} />
        <p>Попробуйте, первые уроки бесплатны, но нужно пройти тестирование</p>
      </div>
    </section>
  );
}
function Section7() {
  return (
    <section>
      <Card
        img="/assets/images/img (1).png"
        title="Помощь и поддержка"
        text1="Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику."
        text2="Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше. "
      />
      <Card
        img="/assets/images/img (18).png"
        row={"row-reverse"}
        title="Методика обучения"
        text1="Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного."
      />
    </section>
  );
}
function Section8() {
  return (
    <section>
      <div
        style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "40px",
            color: "#1a1a1a",
          }}
        >
          Стоимость обучения
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              flex: "1",
              minWidth: "250px",
            }}
          >
            <img src="/assets/images/img (11).png" alt="" />
            <p style={{ fontSize: "14px", color: "#4a4a4a" }}>
              Весь курс разбит на несколько блоков. Оплачивая поэтапово вы
              платите только за тот блок, который сейчас проходите.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              flex: "1",
              minWidth: "250px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              <img src="/assets/images/img (8).png" alt="" />
            </div>
            <p style={{ fontSize: "14px", color: "#4a4a4a" }}>
              Любой из блоков вы можете оплатить в рассрочку
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              flex: "1",
              minWidth: "250px",
            }}
          >
            <img src="/assets/images/img (4).png" alt="" />
            <p style={{ fontSize: "14px", color: "#4a4a4a" }}>
              Если передумаете учиться, то возврат можно оформить в любой
              момент. Возвращаем деньги за 3 рабочих дня.
            </p>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    padding: "15px",
                    textAlign: "left",
                    color: "#0099ff",
                    fontWeight: "normal",
                  }}
                >
                  Блок
                </th>
                <th
                  style={{
                    padding: "15px",
                    textAlign: "left",
                    color: "#0099ff",
                    fontWeight: "normal",
                  }}
                >
                  Стоимость (₽)
                </th>
                <th
                  style={{
                    padding: "15px",
                    textAlign: "left",
                    color: "#0099ff",
                    fontWeight: "normal",
                  }}
                >
                  Расчетное время обучения (мес.)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#f8f8f8" }}>
                <td style={{ padding: "15px" }}>Введение в программирование</td>
                <td style={{ padding: "15px" }}>Бесплатно</td>
                <td style={{ padding: "15px" }}>0.5</td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td style={{ padding: "15px" }}>
                  Основы программирования на Python
                </td>
                <td style={{ padding: "15px" }}>9 900</td>
                <td style={{ padding: "15px" }}>1</td>
              </tr>
              <tr style={{ backgroundColor: "#f8f8f8" }}>
                <td style={{ padding: "15px" }}>Python, продвинутый уровень</td>
                <td style={{ padding: "15px" }}>14 900</td>
                <td style={{ padding: "15px" }}>2.5</td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td style={{ padding: "15px" }}>Сети + фреймворк Flask</td>
                <td style={{ padding: "15px" }}>14 900</td>
                <td style={{ padding: "15px" }}>2.5</td>
              </tr>
              <tr style={{ backgroundColor: "#f8f8f8" }}>
                <td style={{ padding: "15px" }}>Базы данных</td>
                <td style={{ padding: "15px" }}>14 900</td>
                <td style={{ padding: "15px" }}>2</td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td style={{ padding: "15px" }}>Фреймворк Django</td>
                <td style={{ padding: "15px" }}>14 900</td>
                <td style={{ padding: "15px" }}>2</td>
              </tr>
              <tr style={{ backgroundColor: "#f8f8f8" }}>
                <td style={{ padding: "15px" }}>
                  Разработка «боевого» проекта
                </td>
                <td style={{ padding: "15px" }}>9 900</td>
                <td style={{ padding: "15px" }}>1.5</td>
              </tr>
              <tr
                style={{
                  fontWeight: "bold",
                  backgroundColor: "white",
                }}
              >
                <td style={{ padding: "15px" }}>Итого</td>
                <td style={{ padding: "15px" }}>79 400</td>
                <td style={{ padding: "15px" }}>12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
function Section9() {
  return (
    <section style={{ padding: "20px 0", backgroundColor: "#fff" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          color: "#666",
          fontSize: "14px",
        }}
      >
        * если занятиям уделяется около 20 часов в неделю
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "20px auto",
          padding: "30px 10px",
          backgroundColor: "#f5f9fa",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/images/img (6).png"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div style={{ width: "60%" }}>
            <p style={{ fontSize: "14px", color: "#333", margin: 0 }}>
              Все блоки проходятся строго по порядку. Пропустить какой-то блок
              или начать обучение с середины нельзя, даже если вы считаете, что
              уже знаете какую-то часть материала. Только так мы можем
              гарантировать, что вы получите все знания, предусмотренные учебной
              программой.
            </p>
          </div>
          <Button textBtn="Начать обучение" bgColor="#F15525" col={"white"} />
        </div>
      </div>
    </section>
  );
}
function Section10() {
  return (
    <footer>
      <div
        style={{
          margin: "40px auto 20px",
          padding: "0 20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{}}>
            <img src="/assets/images/img (13).png" alt="" />
          </div>
          <div
            style={{
              color: "#666",
              marginBottom: "20px",
            }}
          >
            Школа программирования
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
              }}
            >
              <img src="/assets/images/img (3).png" alt="" />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "100px" }}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ color: "#333", padding: "5px 0" }}>
                Чему вы научитесь
              </div>
              <div style={{ color: "#333", padding: "5px 0" }}>
                Процесс обучения
              </div>
              <div style={{ color: "#333", padding: "5px 0" }}>Стоимость</div>
              <div style={{ color: "#333", padding: "5px 0" }}>Контакты</div>
              <div style={{ color: "#333", padding: "5px 0" }}>Регистрация</div>
            </div>
          </div>
          <div>
            <div
              style={{
                marginBottom: "10px",
                fontSize: "18px",
                color: "#333",
              }}
            >
              +7 (499) 348 93 96
            </div>
            <div
              style={{
                marginBottom: "20px",
                color: "#333",
              }}
            >
              info@ytyt.ru
            </div>
            <div style={{ color: "#666", fontSize: "14px" }}>
              <p style={{ margin: "5px 0" }}>ИП Умаров Т. А.</p>
              <p style={{ margin: "5px 0" }}>ИНН: 745226279809</p>
              <p style={{ margin: "5px 0" }}>ОГРНИП: 315745200001358</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "20px auto",
          padding: "20px",
          borderTop: "1px solid #eee",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
          color: "#666",
          fontSize: "14px",
        }}
      >
        <div>© 2022 ytyt — Все права защищены</div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ color: "#666" }}>Пользовательское соглашение</div>
          <div style={{ color: "#666" }}>Политика конфиденциальности</div>
        </div>
      </div>
    </footer>
  );
}
