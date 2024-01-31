import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { useTranslation } from "react-i18next";
import PSF from "../assets/PSF.png";
import {
  Aim,
  Arrow,
  Star,
  Building,
  Location,
  Phone,
  Rectangleaim,
  Rectangleaim2,
  Roundedrect,
  Roundedrect2,
} from "../assets/icons.tsx";
import springfield from "../assets/springfield.png";
import crazyman from "../assets/crazymanaiming.png";
import shooterleft from "../assets/shooterleft.png";
import rifleshooting from "../assets/rifleshooting.png";
import photograph from "../assets/photograph.png";
import twoaimsred from "../assets/twoaimsred.png";
import logosmall from "../assets/logosmall.png";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenuIndex } from "../redux/dataStored/data.stored";

export default function HomePage() {
  const { t } = useTranslation<string>();
  const { theme } = useContext(ThemeContext);
  const activeMenuIndex = useSelector(
    (state: any) => state.dashboard.activeMenuIndex
  );

  const sectionRefs: any = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  const bachRef = useRef<HTMLElement>(null);
  const dispatch = useDispatch();
  // const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    bachRef.current?.scrollTo({
      top: sectionRefs[activeMenuIndex].current?.offsetTop - 96,
      behavior: "smooth",
    });
  }, [activeMenuIndex]);

  const handleWheel = (event: any) => {
    const sectionIndex =
      event.deltaY > 0 ? activeMenuIndex + 1 : activeMenuIndex - 1;

    if (sectionIndex >= 0 && sectionIndex < sectionRefs.length) {
      dispatch(setActiveMenuIndex(sectionIndex));
      bachRef.current?.scrollTo({
        top: sectionRefs[sectionIndex].current?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const calculateProgress = () => {
    if (activeMenuIndex === 0) {
      return 0;
    }

    return (activeMenuIndex / 4) * 100;
  };

  return (
    <div
      className={`h-full w-full overflow-y-auto  ${
        theme !== "dark"
          ? "border-t-2 border-[#cecece]"
          : "border-t-2 border-[#343434]"
      }`}
      ref={bachRef as React.RefObject<HTMLDivElement>}
      onWheel={handleWheel}
    >
      <div
        style={{
          position: "absolute",
          top: 96,
          left: 0,
          width: "100%",
          height: "2px",
          backgroundColor: theme !== "dark" ? "#DBAD38" : "#FFEAD1",
          transform: `scaleX(${calculateProgress() / 100})`,
          transformOrigin: "left",
        }}
      ></div>
      <section
        className="h-full w-full relative max-w-[1760px] mx-auto pt-24"
        ref={sectionRefs[0]}
      >
        <div className="w-[625px] h-[425px] absolute right-0 max-2xl:hidden">
          <div className="relative">
            <img
              src={springfield}
              alt=""
              width={560}
              className="absolute left-8 top-8 z-10"
            />
          </div>
          <div>
            <Roundedrect
              color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
              className="w-64 flex items-center justify-center absolute right-0 top-64"
            />
          </div>
          <div className="relative">
            <Roundedrect2
              color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
              className="w-64 flex items-center justify-center absolute right-90 -top-2"
            />
          </div>
        </div>
        <div className="h-[calc(100vh-96px)] max-w-[1440px] mx-auto">
          <div className="w-full h-[286px] flex items-center max-2xl:justify-center max-md:flex-col">
            <img src={PSF} width={260} height={280} className="max-md:hidden" />
            <div className="w-[700px]">
              <div className="text-[24px] max-md:flex max-md:justify-center">
                {t("welcome")}
              </div>
              <div className="text-[38px] font-bold text-[#DBAD38] dark:text-[#FFEAD1] max-xl:text-[24px] max-md:flex max-md:justify-center max-md:text-center">
                {t("to federation").toUpperCase()}
              </div>
            </div>
          </div>
          <div className="max-h-[300px] max-w-[1364px] bg-white dark:bg-[#242424] mx-auto rounded-lg shadow-lg px-8 py-6 relative z-20">
            <div className="flex flex-wrap max-xl:justify-around">
              <div className="flex gap-4 p-4 items-center">
                <Aim
                  color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                  className="h-14 w-14 flex items-center justify-center"
                />
                <Arrow
                  color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                  className="h-14 w-14 flex items-center justify-center"
                />
                <div className="flex flex-col gap-4 max-w-[285px]">
                  <div className="font-bold uppercase">{t("training")}</div>
                  <div className="max-xl:hidden">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </div>
                </div>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <Building
                  color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                  className="h-14 w-14 flex items-center justify-center"
                />
                <Arrow
                  color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                  className="h-14 w-14 flex items-center justify-center"
                />
                <div className="flex flex-col gap-4 max-w-[285px]">
                  <div className="font-bold uppercase">{t("federation_")}</div>
                  <div className="max-xl:hidden">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </div>
                </div>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <Star
                  color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                  className="h-14 w-14 flex items-center justify-center"
                />
                <Arrow
                  color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                  className="h-14 w-14 flex items-center justify-center"
                />
                <div className="flex flex-col gap-4 max-w-[285px]">
                  <div className="font-bold uppercase">
                    {t("training-constructoral")}
                  </div>
                  <div className="max-xl:hidden">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-full w-full bg-white dark:bg-[#242424] "
        ref={sectionRefs[1]}
      >
        <div className="h-full w-full relative max-w-[1440px] mx-auto flex items-center">
          <div className="absolute left-0 max-w-[1440px] mx-auto">
            <div className="ml-8 w-[625px] h-[425px]  max-2xl:hidden z-10 relative">
              <img src={crazyman} alt="" width={576} />
            </div>
            <Rectangleaim
              color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
              className="w-60 flex items-center justify-center absolute -top-12"
            />
          </div>
          <div className="h-[calc(100vh-96px)] max-w-[1364px] mx-auto flex items-center">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <Aim
                  color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                  className="h-12 w-12 flex items-center justify-center"
                />
                <div
                  className={`text-2xl text-${
                    theme !== "dark" ? "[#DBAD38]" : "[#FFEAD1]"
                  } font-bold`}
                >
                  <span className="uppercase">{t("maingoals")}&nbsp;</span>
                  <span className="uppercase">{t("offederation")}</span>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat, quisquam harum nemo neque sapiente accusantium
                  voluptatum beatae blanditiis numquam accusamus architecto
                  assumenda quasi facilis mollitia, nobis, sunt ducimus possimus
                  tenetur!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ipsum recusandae nulla deserunt sed minima odio quam
                  corrupti! Fuga ex facilis odit, vero explicabo quas quibusdam
                  soluta id sunt quisquam?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus impedit saepe beatae eveniet totam nulla voluptatem
                  repellendus ducimus neque, perferendis cumque quibusdam, quas
                  magni pariatur dolor laboriosam ipsa laborum ex!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus impedit saepe beatae eveniet totam nulla voluptatem
                  repellendus ducimus neque, perferendis cumque quibusdam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full w-full dark:bg-[#242424]" ref={sectionRefs[2]}>
        <div className="h-[calc(100vh-96px)] max-w-[1364px] mx-auto flex flex-col justify-center">
          <div
            className={`uppercase ${
              theme !== "dark" ? "text-[#DBAD38]" : "text-[#FFEAD1]"
            } font-bold text-2xl`}
          >
            {t("news")}
          </div>
          <div className="flex mt-4 gap-8 justify-between">
            <div className="w-1/3 pr-8 flex flex-col rounded-lg dark:shadow-xl">
              <img src={shooterleft} alt="" />
              <div className="text-left p-4 bg-white dark:bg-[#2D2D2D] rounded-b-2xl shadow-lg">
                Быстрее, выше, точнее: что такое практическая стрельба и где в
                Узбекистане можно научиться меткости
              </div>
            </div>
            <div className="w-1/3 px-4  flex flex-col rounded-lg dark:shadow-xl">
              <img src={rifleshooting} alt="" />
              <div className="text-left p-4 bg-white dark:bg-[#2D2D2D] rounded-b-2xl shadow-lg">
                Турнир по практической стрельбе прошел в Ташкенте. В меткости
                состязались команды из республиканских ...
              </div>
            </div>
            <div className="w-1/3 pl-8 flex flex-col rounded-lg dark:shadow-xl">
              <img src={photograph} alt="" />
              <div className="text-left p-4 bg-white dark:bg-[#2D2D2D] rounded-b-2xl shadow-lg">
                Быстрее, выше, точнее: что такое практическая стрельба и где в
                Узбекистане можно научиться меткости
              </div>
            </div>
          </div>

          <div className="flex mt-4 gap-8">
            <div className="w-1/3 pr-8 flex flex-col rounded-lg dark:shadow-xl">
              <img src={rifleshooting} alt="" />
              <div className="text-left p-4 bg-white dark:bg-[#2D2D2D] rounded-b-2xl shadow-lg">
                Турнир по практической стрельбе прошел в Ташкенте. В меткости
                состязались команды из республиканских ...
              </div>
            </div>
            <div className="w-1/3 px-4 flex flex-col  rounded-lg dark:shadow-xl">
              <img src={photograph} alt="" />
              <div className="text-left p-4 bg-white dark:bg-[#2D2D2D] rounded-b-2xl shadow-lg">
                Быстрее, выше, точнее: что такое практическая стрельба и где в
                Узбекистане можно научиться меткости
              </div>
            </div>
            <div className="w-1/3 pl-4 flex flex-col  rounded-lg dark:shadow-xl">
              <img src={shooterleft} alt="" />
              <div className="text-left p-4 bg-white dark:bg-[#2D2D2D] rounded-b-2xl shadow-lg">
                Быстрее, выше, точнее: что такое практическая стрельба и где в
                Узбекистане можно научиться меткости
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-full w-full bg-white dark:bg-[#242424] mx-auto flex items-center"
        ref={sectionRefs[3]}
      >
        <div className="h-full w-full relative max-w-[1440px] mx-auto flex items-center">
          <div className="absolute right-0 max-w-[1440px] mx-auto">
            <Rectangleaim2
              color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
              className="w-64 flex items-center justify-center absolute right-0 -top-10"
            />
            <div className="w-[510px] h-[405px] z-20 relative">
              <img
                src={twoaimsred}
                alt=""
                width={540}
                className="absolute top-0 right-8"
              />
            </div>
          </div>

          <div className="h-[calc(100vh-96px)] max-w-[1364px] mx-auto flex justify-between items-center">
            <div className="flex flex-col gap-12 w-1/2">
              <div className="font-bold text-2xl leading-[48px]">
                {t("calltofederation")}
              </div>

              <div className="leading-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus id officia voluptatum molestias neque modi, ipsam error
                eius natus maxime nam quia iusto expedita optio omnis labore?
                Aspernatur, quisquam aliquam. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Obcaecati, dolor. Minus
                repudiandae earum numquam modi veniam soluta placeat ipsam
                maiores, et architecto ad esse dignissimos incidunt ab, dolore
                atque. Totam.
              </div>
              <div>
                <button
                  type="button"
                  className=" text-black bg-[#e6b172] hover:bg-[#dfc482] px-8 py-4 rounded-lg shadow-lg"
                >
                  {t("register")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full w-full footer-bg" ref={sectionRefs[4]}>
        <div className="h-[calc(100vh-96px)] max-w-[1364px] mx-auto py-8">
          <div className="text-[30px] font-bold mb-8">
            <span className="uppercase">Курс безопасного </span>{" "}
            <span
              className={`uppercase ${
                theme !== "dark" ? "text-[#DBAD38]" : "text-[#FFEAD1]"
              }`}
            >
              обращения с оружием
            </span>
          </div>
          <div className="flex justify-between flex-wrap gap-4 mx-auto max-xl:px-4 mb-24">
            <div className="flex bg-white  dark:bg-[#2D2D2D] w-[420px] h-[345px] rounded-lg p-8 shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center">
                  <div className="w-16">
                    <Aim
                      color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                      className="h-12 w-12 flex items-center justify-center"
                    />
                  </div>
                  <div className="uppercase font-bold">
                    Первоначальный (базовый) <br />
                    курс
                  </div>
                </div>
                <hr className="bg-gray-200 dark:bg-gray-700 border-0 h-0.5" />
                <div>
                  2 тренировочных дня (по 3 часа), индивидуально или в группе из
                  2-х человек.
                </div>
                <div
                  className={`text-4xl font-bold ${
                    theme !== "dark" ? "text-[#DBAD38]" : "text-[#FFEAD1]"
                  }`}
                >
                  1 500 000
                </div>
              </div>
            </div>
            <div className="flex bg-white  dark:bg-[#2D2D2D] w-[420px] h-[345px] rounded-lg p-8 shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center">
                  <div className="w-16">
                    <Aim
                      color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                      className="h-12 w-12 flex items-center justify-center"
                    />
                  </div>
                  <div className="uppercase font-bold">
                    Индивидуальная тренировка с инструктором PSF
                  </div>
                </div>
                <hr className="bg-gray-200 dark:bg-gray-700 border-0 h-0.5" />
                <div>
                  7 тренировочных дня (по 3 часа), индивидуально или в группе из
                  2-х человек.
                </div>
                <div
                  className={`text-4xl font-bold ${
                    theme !== "dark" ? "text-[#DBAD38]" : "text-[#FFEAD1]"
                  }`}
                >
                  5 500 000
                </div>
              </div>
            </div>
            <div className="flex bg-white  dark:bg-[#2D2D2D] w-[420px] h-[345px] rounded-lg p-8 shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center">
                  <div className="w-16">
                    <Aim
                      color={theme !== "dark" ? "#DBAD38" : "#FFEAD1"}
                      className="h-12 w-12 flex items-center justify-center"
                    />
                  </div>
                  <div className="uppercase font-bold">
                    Индивидуальная тренировка с инструктором PSF
                  </div>
                </div>
                <hr className="bg-gray-200 dark:bg-gray-700 border-0 h-0.5" />
                <div>
                  10 тренировочных дня (по 3 часа), индивидуально или в группе
                  из 2-х человек.
                </div>
                <div
                  className={`text-4xl font-bold ${
                    theme !== "dark" ? "text-[#DBAD38]" : "text-[#FFEAD1]"
                  }`}
                >
                  7 500 000
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-gray-700 border-0 h-0.5 mb-4" />

          <div className="flex flex-wrap gap-2 justify-between mb-4 items-center text-white p-4 shadow-lg rounded-lg">
            <div className="flex items-center gap-4">
              <img src={logosmall} alt="" width={50} />
              <div className="w-72 uppercase font-bold">{t("federation")}</div>
            </div>
            <div className="flex gap-4 items-center">
              <Location
                color={theme !== "dark" ? "#FFEAD1" : "#FFEAD1"}
                className="h-10 w-10 flex items-center justify-center"
              />
              <div className="flex flex-col">
                <span className="font-bold">{t("address")}</span>
                <span>Lorem ipsum dolor sit amet, consetetur</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Phone
                color={theme !== "dark" ? "#FFEAD1" : "#FFEAD1"}
                className="h-9 w-9 flex items-center justify-center"
              />
              <div className="flex flex-col">
                <span className="font-bold">{t("contact")}</span>
                <span>97 777 77 77 </span>
              </div>
            </div>
          </div>

          <hr className="bg-gray-700 border-0 h-0.5 mb-10" />

          <div className={theme !== "dark" ? "text-white" : "text-white"}>
            {" "}
            <span>&copy;&nbsp;2024</span> <span>{t("federation")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
