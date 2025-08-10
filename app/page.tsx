import { ArrowRight, ExternalLink, Mail, Linkedin, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type Exercise = {
  title: string
  href: string
  tag?: string
}

type DiaryEntry = {
  title: string
  date: string
  imgAlt: string
  imgPreviewSrc: string
  imgHref: string
  paragraphs: string[]
}

const exercises: Exercise[] = [
  { title: "3D", href: "./EJERCICIOS CP CSS/Ejercicio055/EJERCICIO 055 MODELADO.html", tag: ""},
  { title: "Moda", href: "./EJERCICIOS CP CSS/Ejercicio050/EJERCICIO 050.html", tag: "" },
  { title: "Jardinería", href: "./EJERCICIOS CP CSS/Ejercicio 039 CORREGIDO/Ejercicio 039.html", tag: "" },
  { title: "Academia", href: "./EJERCICIOS CP CSS/Ejercicio042 CORREGIDO/Ejercicio 042.html", tag: "" },
  { title: "Librería", href: "./EJERCICIOS CP CSS/Ejercicio043/EJERCICIO 043.html", tag: "" },
  { title: "Interiores", href: "./EJERCICIOS CP CSS/Ejercicio044/EJERCICIO 044.html", tag: "" },
  { title: "Viajar", href: "./EJERCICIOS CP CSS/Ejercicio045/EJERCICIO 045.html", tag: "" },
  { title: "Automoción", href: "./EJERCICIOS CP CSS/Ejercicio046/EJERCICIO 046.html", tag: "" },
  { title: "Clásicos", href: "./EJERCICIOS CP CSS/Ejercicio047/INICIO.html", tag: "" },
  { title: "Viajes", href: "./EJERCICIOS CP CSS/Ejercicio048/inicio.html", tag: "" },
  { title: "Acuicultura", href: "./EJERCICIOS CP CSS/Ejercicio049/INICIO.html", tag: "" },
]

const diary: DiaryEntry[] = [
  {
    title: "Desarrollo Web",
    date: "Abril, 2024",
    imgAlt: "Captura de HTML",
    imgPreviewSrc:
      "/htmlcaptura.png",
    imgHref: "./htmlcaptura.png",
    paragraphs: [
      "Explorando los conceptos básicos de HTML, con la estructura y el diseño de páginas simples.",
      "Aunque enfrenté algunos desafíos con la alineación y el posicionamiento, sigo aprendiendo y mejorando.",
    ],
  },
  {
    title: "Retos CSS",
    date: "Abril, 2024",
    imgAlt: "Captura de CSS",
    imgPreviewSrc:
      "/csscaptura.png",
    imgHref: "./csscaptura.png",
    paragraphs: [
      "Progreso en la manipulación de estilos con CSS. He explorado técnicas como Flexbox y posición.",
      "Dificultades con la cascada y la especificidad, pero motivado por los resultados y la mejora continua.",
    ],
  },
]

export default function Page() {
  return (
    <div className="min-h-dvh bg- bg-emerald-200 text-slate-900">
      {/* Barra superior fija */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500 text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>Desarrollador Web</span>
          </Link>
          <nav aria-label="Principal" className="hidden gap-6 md:flex">
            <a href="#mi" className="text-sm text-slate-700 hover:text-slate-900">
              Sobre mí
            </a>
            <a href="#css" className="text-sm text-slate-700 hover:text-slate-900">
              Ejercicios CSS
            </a>
            <a href="#diario" className="text-sm text-slate-700 hover:text-slate-900">
              Diario de Desarrollo
            </a>
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="ghost" size="sm">
              <a
                href="https://linkedin.com/in/esinfotec/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de Joel"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="#css">
                Ver ejercicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero / Banner */}
        <section
          aria-label="Presentación"
          className="relative overflow-hidden border-b"
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute -inset-x-24 -top-40 h-80 rotate-6 bg-gradient-to-r from-emerald-300 via-emerald-500 to-amber-300 opacity-20 blur-3xl" />
            <div className="absolute -inset-x-24 -bottom-40 h-80 -rotate-6 bg-gradient-to-r from-amber-300 via-emerald-400 to-emerald-600 opacity-20 blur-3xl" />
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
            <div>
              <h1 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
                Hola, soy Joel.
                <span className="block text-slate-600">
                  Desarrollo experiencias web modernas.
                </span>
              </h1>
              <p className="mt-4 max-w-prose text-pretty text-slate-600 md:text-lg">
                Con años de experiencia en sistemas, hardware y ahora desarrollo web, disfruto
                resolviendo problemas y creando interfaces accesibles, rápidas y responsivas.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#css">
                    Explorar ejercicios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#diario">Ver diario</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/joel.jpg"
                alt="Retrato de Joel"
                className="h-48 w-48 rounded-xl border object-cover shadow-sm ring-1 ring-black/5 md:h-64 md:w-64"
              />
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="mi" className="mx-auto max-w-6xl px-4 bg-emerald-200 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Información personal ✍️
              </h2>
              <p className="mt-4 text-slate-700">
                Soy Joel, un entusiasta del mundo digital que ha emprendido un emocionante viaje hacia el desarrollo web.
              </p>
              <p className="mt-3 text-slate-700">
                Con varios años de experiencia en este sector, me encanta sumergirme en este universo donde cada línea de código es
                un nuevo desafío y una oportunidad para aprender y crecer.
              </p>
              <p className="mt-3 text-slate-700">
                Con una trayectoria que abarca desde la instalación técnica hasta el desarrollo web, mi carrera profesional ha
                evolucionado hacia la solución de problemas complejos en el ámbito tecnológico. Actualmente, aplico mis
                competencias en sistemas y hardware para mejorar la infraestructura tecnológica.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">Accesibilidad</Badge>
                <Badge variant="secondary">Responsive</Badge>
              </div>
            </div>
            <div className="flex items-start justify-center md:justify-end">
              <img
                src="/web-dev-coffee.png"
                alt="Ilustración relacionada con desarrollo web"
                className="h-auto w-full max-w-md rounded-lg border object-cover shadow-sm ring-1 ring-black/5"
              />
            </div>
          </div>
        </section>

        {/* Ejercicios CSS */}
        <section id="css" className="border-t bg-emerald-200 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">Mis ejercicios prácticos 👇</h3>
                <p className="mt-2 text-slate-600">
                  Desafíos prácticos para fortalecer habilidades de estilos y diseño web.
                </p>
              </div>
              <Button asChild variant="outline" className="hidden sm:inline-flex">
                <a href="#diario">
                  Ver diario
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {exercises.map((ex, i) => (
                <Card
                  key={i}
                  className="group transition-shadow hover:shadow-md bg-zinc-300"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{ex.title}</CardTitle>
                      {ex.tag ? <Badge variant="outline">{ex.tag}</Badge> : null}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Button asChild variant="secondary" size="sm">
                        <a href={ex.href} target="_blank" rel="noreferrer">
                          Abrir Ejercic
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Diario de desarrollo */}
        <section id="diario" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Diario de Desarrollo</h2>
          <div className="mt-8 space-y-8">
            {diary.map((entry, idx) => (
              <Card key={idx} className="overflow-hidden bg-zinc-300">
                <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_480px]">
                  <div className="p-10">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{entry.title}</CardTitle>
                      <span className="text-sm text-slate-500">{entry.date}</span>
                    </div>
                    <div className="mt-3 space-y-3 text-slate-700">
                      {entry.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <div className="mt-10 flex gap-3">
                      <Button asChild variant="outline" size="sm">
                        <a href={entry.imgHref} target="_blank" rel="noreferrer">
                          Ver captura
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="secondary">
                        <a href="#css">
                          Ir a ejercicios
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <a
                    href={entry.imgHref}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                    aria-label={"Abrir " + entry.title + " en tamaño completo"}
                  >
                    <img
                      src={entry.imgPreviewSrc || "/placeholder.svg"}
                      alt={entry.imgAlt}
                      className="h-full w-100 object-contain"
                    />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t bg-slate-500 text-emerald-200">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Mapa web</h3>
            <ul className="mt-3 space-y-2  text-sm">
              <li>
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href="./EJERCICIOS CP CSS/Ejercicio050/EJERCICIO 050.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  E050
                </a>
              </li>
              <li>
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href="./EJERCICIOS CP CSS/Ejercicio055/EJERCICIO 055 MODELADO.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  E055
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-700">
                <span className="select-all text-white">joel@esinfotec.com</span>
                
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-white underline-offset-4 hover:underline"
                  href="https://linkedin.com/in/esinfotec/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  Sígueme en LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-white md:text-base">
            <p>&copy; {new Date().getFullYear()} Portafolio de Joel — Todos los derechos reservados.</p>
            <p className="mt-2">
              Construido con componentes accesibles, rendimiento y un diseño limpio.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
