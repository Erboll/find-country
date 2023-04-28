export interface Country {
    name: CountryName
    tld: string[]
    cca2: string
    ccn3: string
    cca3: string
    cioc: string
    independent: boolean
    status: string
    unMember: boolean
    currencies: Currencies
    idd: Idd
    capital: string[]
    altSpellings: string[]
    region: string
    subregion: string
    languages: Languages
    translations: Translations
    latlng: number[]
    landlocked: boolean
    borders: string[]
    area: number
    demonyms: Demonyms
    flag: string
    maps: Maps
    population: number
    gini: Gini
    fifa: string
    car: Car
    timezones: string[]
    continents: string[]
    flags: Flags
    coatOfArms: CoatOfArms
    startOfWeek: string
    capitalInfo: CapitalInfo
    postalCode: PostalCode
  }
  
  export interface CountryName {
    common: string
    official: string
    nativeName: NativeName
  }

  export interface ITest {
    name:string
  }