import type { CityConfig } from "./city-config"
import { birminghamConfig } from "./cities/birmingham"
import { manchesterConfig } from "./cities/manchester"
import { londonConfig } from "./cities/london"

const cities: CityConfig[] = [birminghamConfig, manchesterConfig, londonConfig]

export function getAllCities(): CityConfig[] {
  return cities
}

export function getAvailableCities(): CityConfig[] {
  return cities.filter((city) => city.available)
}

export function getCityBySlug(slug: string): CityConfig | undefined {
  return cities.find((city) => city.slug === slug)
}

export function getCityNames(): string[] {
  return cities.map((city) => city.name)
}

export function getCitySlugs(): string[] {
  return cities.map((city) => city.slug)
}

export { birminghamConfig, manchesterConfig, londonConfig }
