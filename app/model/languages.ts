import { Language } from "./language"

export module Languages {
    export function english() { return new Language("en") }
    export function spanish() { return new Language("es") }
    export function french() { return new Language("fr") }
    export function russian() { return new Language("ru") }
    export function italian() { return new Language("it") }
    export function czech() { return new Language("cz") }
    export function german() { return new Language("de") }
}