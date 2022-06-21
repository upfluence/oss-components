export type CountryData = {
  id: string;
  name: string;
  alpha2: string;
  alpha3: string;
  countryCallingCodes: string[];
  currencies: string[];
  showOnTop?: boolean;
  provinces?: { name: string; code: string }[];
};

export const countries: CountryData[] = [
  {
    id: 'US',
    alpha2: 'US',
    alpha3: 'USA',
    countryCallingCodes: ['1'],
    currencies: ['USD'],
    name: 'United States',
    showOnTop: true,
    provinces: [
      {
        name: 'Alabama',
        code: 'AL'
      },
      {
        name: 'Alaska',
        code: 'AK'
      },
      {
        name: 'American Samoa',
        code: 'AS'
      },
      {
        name: 'Arizona',
        code: 'AZ'
      },
      {
        name: 'Arkansas',
        code: 'AR'
      },
      {
        name: 'Armed Forces Americas',
        code: 'AA'
      },
      {
        name: 'Armed Forces Europe',
        code: 'AE'
      },
      {
        name: 'Armed Forces Pacific',
        code: 'AP'
      },
      {
        name: 'California',
        code: 'CA'
      },
      {
        name: 'Colorado',
        code: 'CO'
      },
      {
        name: 'Connecticut',
        code: 'CT'
      },
      {
        name: 'Delaware',
        code: 'DE'
      },
      {
        name: 'District of Columbia',
        code: 'DC'
      },
      {
        name: 'Federated States of Micronesia',
        code: 'FM'
      },
      {
        name: 'Florida',
        code: 'FL'
      },
      {
        name: 'Georgia',
        code: 'GA'
      },
      {
        name: 'Guam',
        code: 'GU'
      },
      {
        name: 'Hawaii',
        code: 'HI'
      },
      {
        name: 'Idaho',
        code: 'ID'
      },
      {
        name: 'Illinois',
        code: 'IL'
      },
      {
        name: 'Indiana',
        code: 'IN'
      },
      {
        name: 'Iowa',
        code: 'IA'
      },
      {
        name: 'Kansas',
        code: 'KS'
      },
      {
        name: 'Kentucky',
        code: 'KY'
      },
      {
        name: 'Louisiana',
        code: 'LA'
      },
      {
        name: 'Maine',
        code: 'ME'
      },
      {
        name: 'Marshall Islands',
        code: 'MH'
      },
      {
        name: 'Maryland',
        code: 'MD'
      },
      {
        name: 'Massachusetts',
        code: 'MA'
      },
      {
        name: 'Michigan',
        code: 'MI'
      },
      {
        name: 'Minnesota',
        code: 'MN'
      },
      {
        name: 'Mississippi',
        code: 'MS'
      },
      {
        name: 'Missouri',
        code: 'MO'
      },
      {
        name: 'Montana',
        code: 'MT'
      },
      {
        name: 'Nebraska',
        code: 'NE'
      },
      {
        name: 'Nevada',
        code: 'NV'
      },
      {
        name: 'New Hampshire',
        code: 'NH'
      },
      {
        name: 'New Jersey',
        code: 'NJ'
      },
      {
        name: 'New Mexico',
        code: 'NM'
      },
      {
        name: 'New York',
        code: 'NY'
      },
      {
        name: 'North Carolina',
        code: 'NC'
      },
      {
        name: 'North Dakota',
        code: 'ND'
      },
      {
        name: 'Northern Mariana Islands',
        code: 'MP'
      },
      {
        name: 'Ohio',
        code: 'OH'
      },
      {
        name: 'Oklahoma',
        code: 'OK'
      },
      {
        name: 'Oregon',
        code: 'OR'
      },
      {
        name: 'Palau',
        code: 'PW'
      },
      {
        name: 'Pennsylvania',
        code: 'PA'
      },
      {
        name: 'Puerto Rico',
        code: 'PR'
      },
      {
        name: 'Rhode Island',
        code: 'RI'
      },
      {
        name: 'South Carolina',
        code: 'SC'
      },
      {
        name: 'South Dakota',
        code: 'SD'
      },
      {
        name: 'Tennessee',
        code: 'TN'
      },
      {
        name: 'Texas',
        code: 'TX'
      },
      {
        name: 'Utah',
        code: 'UT'
      },
      {
        name: 'Vermont',
        code: 'VT'
      },
      {
        name: 'Virgin Islands',
        code: 'VI'
      },
      {
        name: 'Virginia',
        code: 'VA'
      },
      {
        name: 'Washington',
        code: 'WA'
      },
      {
        name: 'West Virginia',
        code: 'WV'
      },
      {
        name: 'Wisconsin',
        code: 'WI'
      },
      {
        name: 'Wyoming',
        code: 'WY'
      }
    ]
  },
  {
    id: 'FR',
    alpha2: 'FR',
    alpha3: 'FRA',
    countryCallingCodes: ['33'],
    currencies: ['EUR'],
    name: 'France',
    showOnTop: true
  },
  {
    id: 'GB',
    alpha2: 'GB',
    alpha3: 'GBR',
    countryCallingCodes: ['44'],
    currencies: ['GBP'],
    name: 'United Kingdom',
    showOnTop: true,
    provinces: [
      {
        name: 'British Forces',
        code: 'BFP'
      },
      {
        name: 'England',
        code: 'ENG'
      },
      {
        name: 'Northern Ireland',
        code: 'NIR'
      },
      {
        name: 'Scotland',
        code: 'SCT'
      },
      {
        name: 'Wales',
        code: 'WLS'
      }
    ]
  },
  {
    id: 'DE',
    alpha2: 'DE',
    alpha3: 'DEU',
    countryCallingCodes: ['49'],
    currencies: ['EUR'],
    name: 'Germany',
    showOnTop: true
  },
  {
    id: 'CH',
    alpha2: 'CH',
    alpha3: 'CHE',
    countryCallingCodes: ['41'],
    currencies: ['CHF', 'CHE', 'CHW'],
    name: 'Switzerland',
    showOnTop: true
  },
  {
    id: 'AD',
    alpha2: 'AD',
    alpha3: 'AND',
    countryCallingCodes: ['376'],
    currencies: ['EUR'],
    name: 'Andorra'
  },
  {
    id: 'AE',
    alpha2: 'AE',
    alpha3: 'ARE',
    countryCallingCodes: ['971'],
    currencies: ['AED'],
    name: 'United Arab Emirates',
    provinces: [
      {
        name: 'Abu Dhabi',
        code: 'AZ'
      },
      {
        name: 'Ajman',
        code: 'AJ'
      },
      {
        name: 'Dubai',
        code: 'DU'
      },
      {
        name: 'Fujairah',
        code: 'FU'
      },
      {
        name: 'Ras al-Khaimah',
        code: 'RK'
      },
      {
        name: 'Sharjah',
        code: 'SH'
      },
      {
        name: 'Umm al-Quwain',
        code: 'UQ'
      }
    ]
  },
  {
    id: 'AF',
    alpha2: 'AF',
    alpha3: 'AFG',
    countryCallingCodes: ['93'],
    currencies: ['AFN'],
    name: 'Afghanistan'
  },
  {
    id: 'AG',
    alpha2: 'AG',
    alpha3: 'ATG',
    countryCallingCodes: ['1268'],
    currencies: ['XCD'],
    name: 'Antigua And Barbuda'
  },
  {
    id: 'AI',
    alpha2: 'AI',
    alpha3: 'AIA',
    countryCallingCodes: ['1264'],
    currencies: ['XCD'],
    name: 'Anguilla'
  },
  {
    id: 'AL',
    alpha2: 'AL',
    alpha3: 'ALB',
    countryCallingCodes: ['355'],
    currencies: ['ALL'],
    name: 'Albania'
  },
  {
    id: 'AM',
    alpha2: 'AM',
    alpha3: 'ARM',
    countryCallingCodes: ['374'],
    currencies: ['AMD'],
    name: 'Armenia'
  },
  {
    id: 'AO',
    alpha2: 'AO',
    alpha3: 'AGO',
    countryCallingCodes: ['244'],
    currencies: ['AOA'],
    name: 'Angola'
  },
  {
    id: 'AR',
    alpha2: 'AR',
    alpha3: 'ARG',
    countryCallingCodes: ['54'],
    currencies: ['ARS'],
    name: 'Argentina',
    provinces: [
      {
        name: 'Buenos Aires',
        code: 'B'
      },
      {
        name: 'Catamarca',
        code: 'K'
      },
      {
        name: 'Chaco',
        code: 'H'
      },
      {
        name: 'Chubut',
        code: 'U'
      },
      {
        name: 'Ciudad Autónoma de Buenos Aires',
        code: 'C'
      },
      {
        name: 'Córdoba',
        code: 'X'
      },
      {
        name: 'Corrientes',
        code: 'W'
      },
      {
        name: 'Entre Ríos',
        code: 'E'
      },
      {
        name: 'Formosa',
        code: 'P'
      },
      {
        name: 'Jujuy',
        code: 'Y'
      },
      {
        name: 'La Pampa',
        code: 'L'
      },
      {
        name: 'La Rioja',
        code: 'F'
      },
      {
        name: 'Mendoza',
        code: 'M'
      },
      {
        name: 'Misiones',
        code: 'N'
      },
      {
        name: 'Neuquén',
        code: 'Q'
      },
      {
        name: 'Río Negro',
        code: 'R'
      },
      {
        name: 'Salta',
        code: 'A'
      },
      {
        name: 'San Juan',
        code: 'J'
      },
      {
        name: 'San Luis',
        code: 'D'
      },
      {
        name: 'Santa Cruz',
        code: 'Z'
      },
      {
        name: 'Santa Fe',
        code: 'S'
      },
      {
        name: 'Santiago Del Estero',
        code: 'G'
      },
      {
        name: 'Tierra Del Fuego',
        code: 'V'
      },
      {
        name: 'Tucumán',
        code: 'T'
      }
    ]
  },
  {
    id: 'AS',
    alpha2: 'AS',
    alpha3: 'ASM',
    countryCallingCodes: ['1684'],
    currencies: ['USD'],
    name: 'American Samoa'
  },
  {
    id: 'AT',
    alpha2: 'AT',
    alpha3: 'AUT',
    countryCallingCodes: ['43'],
    currencies: ['EUR'],
    name: 'Austria'
  },
  {
    id: 'AU',
    alpha2: 'AU',
    alpha3: 'AUS',
    countryCallingCodes: ['61'],
    currencies: ['AUD'],
    name: 'Australia',
    provinces: [
      {
        name: 'Australian Capital Territory',
        code: 'ACT'
      },
      {
        name: 'New South Wales',
        code: 'NSW'
      },
      {
        name: 'Northern Territory',
        code: 'NT'
      },
      {
        name: 'Queensland',
        code: 'QLD'
      },
      {
        name: 'South Australia',
        code: 'SA'
      },
      {
        name: 'Tasmania',
        code: 'TAS'
      },
      {
        name: 'Victoria',
        code: 'VIC'
      },
      {
        name: 'Western Australia',
        code: 'WA'
      }
    ]
  },
  {
    id: 'AW',
    alpha2: 'AW',
    alpha3: 'ABW',
    countryCallingCodes: ['297'],
    currencies: ['AWG'],
    name: 'Aruba'
  },
  {
    id: 'AZ',
    alpha2: 'AZ',
    alpha3: 'AZE',
    countryCallingCodes: ['994'],
    currencies: ['AZN'],
    name: 'Azerbaijan'
  },
  {
    id: 'BA',
    alpha2: 'BA',
    alpha3: 'BIH',
    countryCallingCodes: ['387'],
    currencies: ['BAM'],
    name: 'Bosnia & Herzegovina'
  },
  {
    id: 'BB',
    alpha2: 'BB',
    alpha3: 'BRB',
    countryCallingCodes: ['1246'],
    currencies: ['BBD'],
    name: 'Barbados'
  },
  {
    id: 'BD',
    alpha2: 'BD',
    alpha3: 'BGD',
    countryCallingCodes: ['880'],
    currencies: ['BDT'],
    name: 'Bangladesh'
  },
  {
    id: 'BE',
    alpha2: 'BE',
    alpha3: 'BEL',
    countryCallingCodes: ['32'],
    currencies: ['EUR'],
    name: 'Belgium'
  },
  {
    id: 'BF',
    alpha2: 'BF',
    alpha3: 'BFA',
    countryCallingCodes: ['226'],
    currencies: ['XOF'],
    name: 'Burkina Faso'
  },
  {
    id: 'BG',
    alpha2: 'BG',
    alpha3: 'BGR',
    countryCallingCodes: ['359'],
    currencies: ['BGN'],
    name: 'Bulgaria'
  },
  {
    id: 'BH',
    alpha2: 'BH',
    alpha3: 'BHR',
    countryCallingCodes: ['973'],
    currencies: ['BHD'],
    name: 'Bahrain'
  },
  {
    id: 'BI',
    alpha2: 'BI',
    alpha3: 'BDI',
    countryCallingCodes: ['257'],
    currencies: ['BIF'],
    name: 'Burundi'
  },
  {
    id: 'BJ',
    alpha2: 'BJ',
    alpha3: 'BEN',
    countryCallingCodes: ['229'],
    currencies: ['XOF'],
    name: 'Benin'
  },
  {
    id: 'BL',
    alpha2: 'BL',
    alpha3: 'BLM',
    countryCallingCodes: ['590'],
    currencies: ['EUR'],
    name: 'Saint Barthélemy'
  },
  {
    id: 'BM',
    alpha2: 'BM',
    alpha3: 'BMU',
    countryCallingCodes: ['1441'],
    currencies: ['BMD'],
    name: 'Bermuda'
  },
  {
    id: 'BN',
    alpha2: 'BN',
    alpha3: 'BRN',
    countryCallingCodes: ['673'],
    currencies: ['BND'],
    name: 'Brunei Darussalam'
  },
  {
    id: 'BO',
    alpha2: 'BO',
    alpha3: 'BOL',
    countryCallingCodes: ['591'],
    currencies: ['BOB', 'BOV'],
    name: 'Bolivia, Plurinational State Of'
  },
  {
    id: 'BQ',
    alpha2: 'BQ',
    alpha3: 'BES',
    countryCallingCodes: ['599'],
    currencies: ['USD'],
    name: 'Bonaire, Saint Eustatius And Saba'
  },
  {
    id: 'BR',
    alpha2: 'BR',
    alpha3: 'BRA',
    countryCallingCodes: ['55'],
    currencies: ['BRL'],
    name: 'Brazil',
    provinces: [
      {
        name: 'Acre',
        code: 'AC'
      },
      {
        name: 'Alagoas',
        code: 'AL'
      },
      {
        name: 'Amapá',
        code: 'AP'
      },
      {
        name: 'Amazonas',
        code: 'AM'
      },
      {
        name: 'Bahia',
        code: 'BA'
      },
      {
        name: 'Ceará',
        code: 'CE'
      },
      {
        name: 'Distrito Federal',
        code: 'DF'
      },
      {
        name: 'Espírito Santo',
        code: 'ES'
      },
      {
        name: 'Goiás',
        code: 'GO'
      },
      {
        name: 'Maranhão',
        code: 'MA'
      },
      {
        name: 'Mato Grosso',
        code: 'MT'
      },
      {
        name: 'Mato Grosso do Sul',
        code: 'MS'
      },
      {
        name: 'Minas Gerais',
        code: 'MG'
      },
      {
        name: 'Pará',
        code: 'PA'
      },
      {
        name: 'Paraíba',
        code: 'PB'
      },
      {
        name: 'Paraná',
        code: 'PR'
      },
      {
        name: 'Pernambuco',
        code: 'PE'
      },
      {
        name: 'Piauí',
        code: 'PI'
      },
      {
        name: 'Rio de Janeiro',
        code: 'RJ'
      },
      {
        name: 'Rio Grande do Norte',
        code: 'RN'
      },
      {
        name: 'Rio Grande do Sul',
        code: 'RS'
      },
      {
        name: 'Rondônia',
        code: 'RO'
      },
      {
        name: 'Roraima',
        code: 'RR'
      },
      {
        name: 'Santa Catarina',
        code: 'SC'
      },
      {
        name: 'São Paulo',
        code: 'SP'
      },
      {
        name: 'Sergipe',
        code: 'SE'
      },
      {
        name: 'Tocantins',
        code: 'TO'
      }
    ]
  },
  {
    id: 'BS',
    alpha2: 'BS',
    alpha3: 'BHS',
    countryCallingCodes: ['1242'],
    currencies: ['BSD'],
    name: 'Bahamas'
  },
  {
    id: 'BT',
    alpha2: 'BT',
    alpha3: 'BTN',
    countryCallingCodes: ['975'],
    currencies: ['INR', 'BTN'],
    name: 'Bhutan'
  },
  {
    id: 'BW',
    alpha2: 'BW',
    alpha3: 'BWA',
    countryCallingCodes: ['267'],
    currencies: ['BWP'],
    name: 'Botswana'
  },
  {
    id: 'BY',
    alpha2: 'BY',
    alpha3: 'BLR',
    countryCallingCodes: ['375'],
    currencies: ['BYR'],
    name: 'Belarus'
  },
  {
    id: 'BZ',
    alpha2: 'BZ',
    alpha3: 'BLZ',
    countryCallingCodes: ['501'],
    currencies: ['BZD'],
    name: 'Belize'
  },
  {
    id: 'CA',
    alpha2: 'CA',
    alpha3: 'CAN',
    countryCallingCodes: ['1'],
    currencies: ['CAD'],
    name: 'Canada',
    provinces: [
      {
        name: 'Alberta',
        code: 'AB'
      },
      {
        name: 'British Columbia',
        code: 'BC'
      },
      {
        name: 'Manitoba',
        code: 'MB'
      },
      {
        name: 'New Brunswick',
        code: 'NB'
      },
      {
        name: 'Newfoundland and Labrador',
        code: 'NL'
      },
      {
        name: 'Northwest Territories',
        code: 'NT'
      },
      {
        name: 'Nova Scotia',
        code: 'NS'
      },
      {
        name: 'Nunavut',
        code: 'NU'
      },
      {
        name: 'Ontario',
        code: 'ON'
      },
      {
        name: 'Prince Edward Island',
        code: 'PE'
      },
      {
        name: 'Quebec',
        code: 'QC'
      },
      {
        name: 'Saskatchewan',
        code: 'SK'
      },
      {
        name: 'Yukon',
        code: 'YT'
      }
    ]
  },
  {
    id: 'CC',
    alpha2: 'CC',
    alpha3: 'CCK',
    countryCallingCodes: ['61'],
    currencies: ['AUD'],
    name: 'Cocos (Keeling) Islands'
  },
  {
    id: 'CD',
    alpha2: 'CD',
    alpha3: 'COD',
    countryCallingCodes: ['243'],
    currencies: ['CDF'],
    name: 'Democratic Republic Of Congo'
  },
  {
    id: 'CF',
    alpha2: 'CF',
    alpha3: 'CAF',
    countryCallingCodes: ['236'],
    currencies: ['XAF'],
    name: 'Central African Republic'
  },
  {
    id: 'CG',
    alpha2: 'CG',
    alpha3: 'COG',
    countryCallingCodes: ['242'],
    currencies: ['XAF'],
    name: 'Republic Of Congo'
  },
  {
    id: 'CI',
    alpha2: 'CI',
    alpha3: 'CIV',
    countryCallingCodes: ['225'],
    currencies: ['XOF'],
    name: "Cote d'Ivoire"
  },
  {
    id: 'CK',
    alpha2: 'CK',
    alpha3: 'COK',
    countryCallingCodes: ['682'],
    currencies: ['NZD'],
    name: 'Cook Islands'
  },
  {
    id: 'CL',
    alpha2: 'CL',
    alpha3: 'CHL',
    countryCallingCodes: ['56'],
    currencies: ['CLP', 'CLF'],
    name: 'Chile',
    provinces: [
      {
        name: 'Antofagasta',
        code: 'AN'
      },
      {
        name: 'Araucanía',
        code: 'AR'
      },
      {
        name: 'Arica and Parinacota',
        code: 'AP'
      },
      {
        name: 'Atacama',
        code: 'AT'
      },
      {
        name: 'Aysén',
        code: 'AI'
      },
      {
        name: 'Biobío',
        code: 'BI'
      },
      {
        name: 'Coquimbo',
        code: 'CO'
      },
      {
        name: 'Los Lagos',
        code: 'LL'
      },
      {
        name: 'Los Ríos',
        code: 'LR'
      },
      {
        name: 'Magallanes',
        code: 'MA'
      },
      {
        name: 'Maule',
        code: 'ML'
      },
      {
        name: 'Ñuble',
        code: 'NB'
      },
      {
        name: "O'Higgins",
        code: 'LI'
      },
      {
        name: 'Santiago',
        code: 'RM'
      },
      {
        name: 'Tarapacá',
        code: 'TA'
      },
      {
        name: 'Valparaíso',
        code: 'VS'
      }
    ]
  },
  {
    id: 'CM',
    alpha2: 'CM',
    alpha3: 'CMR',
    countryCallingCodes: ['237'],
    currencies: ['XAF'],
    name: 'Cameroon'
  },
  {
    id: 'CN',
    alpha2: 'CN',
    alpha3: 'CHN',
    countryCallingCodes: ['86'],
    currencies: ['CNY'],
    name: 'China',
    provinces: [
      {
        name: 'Anhui',
        code: 'AH'
      },
      {
        name: 'Beijing',
        code: 'BJ'
      },
      {
        name: 'Chongqing',
        code: 'CQ'
      },
      {
        name: 'Fujian',
        code: 'FJ'
      },
      {
        name: 'Gansu',
        code: 'GS'
      },
      {
        name: 'Guangdong',
        code: 'GD'
      },
      {
        name: 'Guangxi',
        code: 'GX'
      },
      {
        name: 'Guizhou',
        code: 'GZ'
      },
      {
        name: 'Hainan',
        code: 'HI'
      },
      {
        name: 'Hebei',
        code: 'HE'
      },
      {
        name: 'Heilongjiang',
        code: 'HL'
      },
      {
        name: 'Henan',
        code: 'HA'
      },
      {
        name: 'Hubei',
        code: 'HB'
      },
      {
        name: 'Hunan',
        code: 'HN'
      },
      {
        name: 'Inner Mongolia',
        code: 'NM'
      },
      {
        name: 'Jiangsu',
        code: 'JS'
      },
      {
        name: 'Jiangxi',
        code: 'JX'
      },
      {
        name: 'Jilin',
        code: 'JL'
      },
      {
        name: 'Liaoning',
        code: 'LN'
      },
      {
        name: 'Ningxia',
        code: 'NX'
      },
      {
        name: 'Qinghai',
        code: 'QH'
      },
      {
        name: 'Shaanxi',
        code: 'SN'
      },
      {
        name: 'Shandong',
        code: 'SD'
      },
      {
        name: 'Shanghai',
        code: 'SH'
      },
      {
        name: 'Shanxi',
        code: 'SX'
      },
      {
        name: 'Sichuan',
        code: 'SC'
      },
      {
        name: 'Tianjin',
        code: 'TJ'
      },
      {
        name: 'Xinjiang',
        code: 'XJ'
      },
      {
        name: 'Xizang',
        code: 'YZ'
      },
      {
        name: 'Yunnan',
        code: 'YN'
      },
      {
        name: 'Zhejiang',
        code: 'ZJ'
      }
    ]
  },
  {
    id: 'CO',
    alpha2: 'CO',
    alpha3: 'COL',
    countryCallingCodes: ['57'],
    currencies: ['COP', 'COU'],
    name: 'Colombia',
    provinces: [
      {
        name: 'Amazonas',
        code: 'AMA'
      },
      {
        name: 'Antioquia',
        code: 'ANT'
      },
      {
        name: 'Arauca',
        code: 'ARA'
      },
      {
        name: 'Atlántico',
        code: 'ATL'
      },
      {
        name: 'Bogotá, D.C.',
        code: 'DC'
      },
      {
        name: 'Bolívar',
        code: 'BOL'
      },
      {
        name: 'Boyacá',
        code: 'BOY'
      },
      {
        name: 'Caldas',
        code: 'CAL'
      },
      {
        name: 'Caquetá',
        code: 'CAQ'
      },
      {
        name: 'Casanare',
        code: 'CAS'
      },
      {
        name: 'Cauca',
        code: 'CAU'
      },
      {
        name: 'Cesar',
        code: 'CES'
      },
      {
        name: 'Chocó',
        code: 'CHO'
      },
      {
        name: 'Córdoba',
        code: 'COR'
      },
      {
        name: 'Cundinamarca',
        code: 'CUN'
      },
      {
        name: 'Guainía',
        code: 'GUA'
      },
      {
        name: 'Guaviare',
        code: 'GUV'
      },
      {
        name: 'Huila',
        code: 'HUI'
      },
      {
        name: 'La Guajira',
        code: 'LAG'
      },
      {
        name: 'Magdalena',
        code: 'MAG'
      },
      {
        name: 'Meta',
        code: 'MET'
      },
      {
        name: 'Nariño',
        code: 'NAR'
      },
      {
        name: 'Norte de Santander',
        code: 'NSA'
      },
      {
        name: 'Putumayo',
        code: 'PUT'
      },
      {
        name: 'Quindío',
        code: 'QUI'
      },
      {
        name: 'Risaralda',
        code: 'RIS'
      },
      {
        name: 'San Andrés, Providencia y Santa Catalina',
        code: 'SAP'
      },
      {
        name: 'Santander',
        code: 'SAN'
      },
      {
        name: 'Sucre',
        code: 'SUC'
      },
      {
        name: 'Tolima',
        code: 'TOL'
      },
      {
        name: 'Valle del Cauca',
        code: 'VAC'
      },
      {
        name: 'Vaupés',
        code: 'VAU'
      },
      {
        name: 'Vichada',
        code: 'VID'
      }
    ]
  },
  {
    id: 'CR',
    alpha2: 'CR',
    alpha3: 'CRI',
    countryCallingCodes: ['506'],
    currencies: ['CRC'],
    name: 'Costa Rica'
  },
  {
    id: 'CU',
    alpha2: 'CU',
    alpha3: 'CUB',
    countryCallingCodes: ['53'],
    currencies: ['CUP', 'CUC'],
    name: 'Cuba'
  },
  {
    id: 'CV',
    alpha2: 'CV',
    alpha3: 'CPV',
    countryCallingCodes: ['238'],
    currencies: ['CVE'],
    name: 'Cape Verde'
  },
  {
    id: 'CW',
    alpha2: 'CW',
    alpha3: 'CUW',
    countryCallingCodes: ['599'],
    currencies: ['ANG'],
    name: 'Curacao'
  },
  {
    id: 'CX',
    alpha2: 'CX',
    alpha3: 'CXR',
    countryCallingCodes: ['61'],
    currencies: ['AUD'],
    name: 'Christmas Island'
  },
  {
    id: 'CY',
    alpha2: 'CY',
    alpha3: 'CYP',
    countryCallingCodes: ['357'],
    currencies: ['EUR'],
    name: 'Cyprus'
  },
  {
    id: 'CZ',
    alpha2: 'CZ',
    alpha3: 'CZE',
    countryCallingCodes: ['420'],
    currencies: ['CZK'],
    name: 'Czech Republic'
  },
  {
    id: 'DJ',
    alpha2: 'DJ',
    alpha3: 'DJI',
    countryCallingCodes: ['253'],
    currencies: ['DJF'],
    name: 'Djibouti'
  },
  {
    id: 'DK',
    alpha2: 'DK',
    alpha3: 'DNK',
    countryCallingCodes: ['45'],
    currencies: ['DKK'],
    name: 'Denmark'
  },
  {
    id: 'DM',
    alpha2: 'DM',
    alpha3: 'DMA',
    countryCallingCodes: ['1767'],
    currencies: ['XCD'],
    name: 'Dominica'
  },
  {
    id: 'DO',
    alpha2: 'DO',
    alpha3: 'DOM',
    countryCallingCodes: ['1849'],
    currencies: ['DOP'],
    name: 'Dominican Republic'
  },
  {
    id: 'DZ',
    alpha2: 'DZ',
    alpha3: 'DZA',
    countryCallingCodes: ['213'],
    currencies: ['DZD'],
    name: 'Algeria'
  },
  {
    id: 'EC',
    alpha2: 'EC',
    alpha3: 'ECU',
    countryCallingCodes: ['593'],
    currencies: ['USD'],
    name: 'Ecuador'
  },
  {
    id: 'EE',
    alpha2: 'EE',
    alpha3: 'EST',
    countryCallingCodes: ['372'],
    currencies: ['EUR'],
    name: 'Estonia'
  },
  {
    id: 'EG',
    alpha2: 'EG',
    alpha3: 'EGY',
    countryCallingCodes: ['20'],
    currencies: ['EGP'],
    name: 'Egypt',
    provinces: [
      {
        name: '6th of October',
        code: 'SU'
      },
      {
        name: 'Al Sharqia',
        code: 'SHR'
      },
      {
        name: 'Alexandria',
        code: 'ALX'
      },
      {
        name: 'Aswan',
        code: 'ASN'
      },
      {
        name: 'Asyut',
        code: 'AST'
      },
      {
        name: 'Beheira',
        code: 'BH'
      },
      {
        name: 'Beni Suef',
        code: 'BNS'
      },
      {
        name: 'Cairo',
        code: 'C'
      },
      {
        name: 'Dakahlia',
        code: 'DK'
      },
      {
        name: 'Damietta',
        code: 'DT'
      },
      {
        name: 'Faiyum',
        code: 'FYM'
      },
      {
        name: 'Gharbia',
        code: 'GH'
      },
      {
        name: 'Giza',
        code: 'GZ'
      },
      {
        name: 'Helwan',
        code: 'HU'
      },
      {
        name: 'Ismailia',
        code: 'IS'
      },
      {
        name: 'Kafr el-Sheikh',
        code: 'KFS'
      },
      {
        name: 'Luxor',
        code: 'LX'
      },
      {
        name: 'Matrouh',
        code: 'MT'
      },
      {
        name: 'Minya',
        code: 'MN'
      },
      {
        name: 'Monufia',
        code: 'MNF'
      },
      {
        name: 'New Valley',
        code: 'WAD'
      },
      {
        name: 'North Sinai',
        code: 'SIN'
      },
      {
        name: 'Port Said',
        code: 'PTS'
      },
      {
        name: 'Qalyubia',
        code: 'KB'
      },
      {
        name: 'Qena',
        code: 'KN'
      },
      {
        name: 'Red Sea',
        code: 'BA'
      },
      {
        name: 'Sohag',
        code: 'SHG'
      },
      {
        name: 'South Sinai',
        code: 'JS'
      },
      {
        name: 'Suez',
        code: 'SUZ'
      }
    ]
  },
  {
    id: 'EH',
    alpha2: 'EH',
    alpha3: 'ESH',
    countryCallingCodes: ['212'],
    currencies: ['MAD'],
    name: 'Western Sahara'
  },
  {
    id: 'ER',
    alpha2: 'ER',
    alpha3: 'ERI',
    countryCallingCodes: ['291'],
    currencies: ['ERN'],
    name: 'Eritrea'
  },
  {
    id: 'ES',
    alpha2: 'ES',
    alpha3: 'ESP',
    countryCallingCodes: ['34'],
    currencies: ['EUR'],
    name: 'Spain',
    provinces: [
      {
        name: 'A Coruña',
        code: 'C'
      },
      {
        name: 'Álava',
        code: 'VI'
      },
      {
        name: 'Albacete',
        code: 'AB'
      },
      {
        name: 'Alicante',
        code: 'A'
      },
      {
        name: 'Almería',
        code: 'AL'
      },
      {
        name: 'Asturias',
        code: 'O'
      },
      {
        name: 'Ávila',
        code: 'AV'
      },
      {
        name: 'Badajoz',
        code: 'BA'
      },
      {
        name: 'Balears',
        code: 'PM'
      },
      {
        name: 'Barcelona',
        code: 'B'
      },
      {
        name: 'Burgos',
        code: 'BU'
      },
      {
        name: 'Cáceres',
        code: 'CC'
      },
      {
        name: 'Cádiz',
        code: 'CA'
      },
      {
        name: 'Cantabria',
        code: 'S'
      },
      {
        name: 'Castellón',
        code: 'CS'
      },
      {
        name: 'Ceuta',
        code: 'CE'
      },
      {
        name: 'Ciudad Real',
        code: 'CR'
      },
      {
        name: 'Córdoba',
        code: 'CO'
      },
      {
        name: 'Cuenca',
        code: 'CU'
      },
      {
        name: 'Girona',
        code: 'GI'
      },
      {
        name: 'Granada',
        code: 'GR'
      },
      {
        name: 'Guadalajara',
        code: 'GU'
      },
      {
        name: 'Guipúzcoa',
        code: 'SS'
      },
      {
        name: 'Huelva',
        code: 'H'
      },
      {
        name: 'Huesca',
        code: 'HU'
      },
      {
        name: 'Jaén',
        code: 'J'
      },
      {
        name: 'La Rioja',
        code: 'LO'
      },
      {
        name: 'Las Palmas',
        code: 'GC'
      },
      {
        name: 'León',
        code: 'LE'
      },
      {
        name: 'Lleida',
        code: 'L'
      },
      {
        name: 'Lugo',
        code: 'LU'
      },
      {
        name: 'Madrid',
        code: 'M'
      },
      {
        name: 'Málaga',
        code: 'MA'
      },
      {
        name: 'Melilla',
        code: 'ML'
      },
      {
        name: 'Murcia',
        code: 'MU'
      },
      {
        name: 'Navarra',
        code: 'NA'
      },
      {
        name: 'Ourense',
        code: 'OR'
      },
      {
        name: 'Palencia',
        code: 'P'
      },
      {
        name: 'Pontevedra',
        code: 'PO'
      },
      {
        name: 'Salamanca',
        code: 'SA'
      },
      {
        name: 'Santa Cruz de Tenerife',
        code: 'TF'
      },
      {
        name: 'Segovia',
        code: 'SG'
      },
      {
        name: 'Sevilla',
        code: 'SE'
      },
      {
        name: 'Soria',
        code: 'SO'
      },
      {
        name: 'Tarragona',
        code: 'T'
      },
      {
        name: 'Teruel',
        code: 'TE'
      },
      {
        name: 'Toledo',
        code: 'TO'
      },
      {
        name: 'Valencia',
        code: 'V'
      },
      {
        name: 'Valladolid',
        code: 'VA'
      },
      {
        name: 'Vizcaya',
        code: 'BI'
      },
      {
        name: 'Zamora',
        code: 'ZA'
      },
      {
        name: 'Zaragoza',
        code: 'Z'
      }
    ]
  },
  {
    id: 'ET',
    alpha2: 'ET',
    alpha3: 'ETH',
    countryCallingCodes: ['251'],
    currencies: ['ETB'],
    name: 'Ethiopia'
  },
  {
    id: 'FI',
    alpha2: 'FI',
    alpha3: 'FIN',
    countryCallingCodes: ['358'],
    currencies: ['EUR'],
    name: 'Finland'
  },
  {
    id: 'FJ',
    alpha2: 'FJ',
    alpha3: 'FJI',
    countryCallingCodes: ['679'],
    currencies: ['FJD'],
    name: 'Fiji'
  },
  {
    id: 'FK',
    alpha2: 'FK',
    alpha3: 'FLK',
    countryCallingCodes: ['500'],
    currencies: ['FKP'],
    name: 'Falkland Islands'
  },
  {
    id: 'FM',
    alpha2: 'FM',
    alpha3: 'FSM',
    countryCallingCodes: ['691'],
    currencies: ['USD'],
    name: 'Micronesia, Federated States Of'
  },
  {
    id: 'FO',
    alpha2: 'FO',
    alpha3: 'FRO',
    countryCallingCodes: ['298'],
    currencies: ['DKK'],
    name: 'Faroe Islands'
  },
  {
    id: 'GA',
    alpha2: 'GA',
    alpha3: 'GAB',
    countryCallingCodes: ['241'],
    currencies: ['XAF'],
    name: 'Gabon'
  },
  {
    id: 'GD',
    alpha2: 'GD',
    alpha3: 'GRD',
    countryCallingCodes: ['1473'],
    currencies: ['XCD'],
    name: 'Grenada'
  },
  {
    id: 'GE',
    alpha2: 'GE',
    alpha3: 'GEO',
    countryCallingCodes: ['995'],
    currencies: ['GEL'],
    name: 'Georgia'
  },
  {
    id: 'GF',
    alpha2: 'GF',
    alpha3: 'GUF',
    countryCallingCodes: ['594'],
    currencies: ['EUR'],
    name: 'French Guiana'
  },
  {
    id: 'GH',
    alpha2: 'GH',
    alpha3: 'GHA',
    countryCallingCodes: ['233'],
    currencies: ['GHS'],
    name: 'Ghana'
  },
  {
    id: 'GI',
    alpha2: 'GI',
    alpha3: 'GIB',
    countryCallingCodes: ['350'],
    currencies: ['GIP'],
    name: 'Gibraltar'
  },
  {
    id: 'GL',
    alpha2: 'GL',
    alpha3: 'GRL',
    countryCallingCodes: ['299'],
    currencies: ['DKK'],
    name: 'Greenland'
  },
  {
    id: 'GM',
    alpha2: 'GM',
    alpha3: 'GMB',
    countryCallingCodes: ['220'],
    currencies: ['GMD'],
    name: 'Gambia'
  },
  {
    id: 'GN',
    alpha2: 'GN',
    alpha3: 'GIN',
    countryCallingCodes: ['224'],
    currencies: ['GNF'],
    name: 'Guinea'
  },
  {
    id: 'GP',
    alpha2: 'GP',
    alpha3: 'GLP',
    countryCallingCodes: ['590'],
    currencies: ['EUR'],
    name: 'Guadeloupe'
  },
  {
    id: 'GQ',
    alpha2: 'GQ',
    alpha3: 'GNQ',
    countryCallingCodes: ['240'],
    currencies: ['XAF'],
    name: 'Equatorial Guinea'
  },
  {
    id: 'GR',
    alpha2: 'GR',
    alpha3: 'GRC',
    countryCallingCodes: ['30'],
    currencies: ['EUR'],
    name: 'Greece'
  },
  {
    id: 'GT',
    alpha2: 'GT',
    alpha3: 'GTM',
    countryCallingCodes: ['502'],
    currencies: ['GTQ'],
    name: 'Guatemala',
    provinces: [
      {
        name: 'Alta Verapaz',
        code: 'AVE'
      },
      {
        name: 'Baja Verapaz',
        code: 'BVE'
      },
      {
        name: 'Chimaltenango',
        code: 'CMT'
      },
      {
        name: 'Chiquimula',
        code: 'CQM'
      },
      {
        name: 'El Progreso',
        code: 'EPR'
      },
      {
        name: 'Escuintla',
        code: 'ESC'
      },
      {
        name: 'Guatemala',
        code: 'GUA'
      },
      {
        name: 'Huehuetenango',
        code: 'HUE'
      },
      {
        name: 'Izabal',
        code: 'IZA'
      },
      {
        name: 'Jalapa',
        code: 'JAL'
      },
      {
        name: 'Jutiapa',
        code: 'JUT'
      },
      {
        name: 'Petén',
        code: 'PET'
      },
      {
        name: 'Quetzaltenango',
        code: 'QUE'
      },
      {
        name: 'Quiché',
        code: 'QUI'
      },
      {
        name: 'Retalhuleu',
        code: 'RET'
      },
      {
        name: 'Sacatepéquez',
        code: 'SAC'
      },
      {
        name: 'San Marcos',
        code: 'SMA'
      },
      {
        name: 'Santa Rosa',
        code: 'SRO'
      },
      {
        name: 'Sololá',
        code: 'SOL'
      },
      {
        name: 'Suchitepéquez',
        code: 'SUC'
      },
      {
        name: 'Totonicapán',
        code: 'TOT'
      },
      {
        name: 'Zacapa',
        code: 'ZAC'
      }
    ]
  },
  {
    id: 'GU',
    alpha2: 'GU',
    alpha3: 'GUM',
    countryCallingCodes: ['1671'],
    currencies: ['USD'],
    name: 'Guam'
  },
  {
    id: 'GW',
    alpha2: 'GW',
    alpha3: 'GNB',
    countryCallingCodes: ['245'],
    currencies: ['XOF'],
    name: 'Guinea-bissau'
  },
  {
    id: 'GY',
    alpha2: 'GY',
    alpha3: 'GUY',
    countryCallingCodes: ['595'],
    currencies: ['GYD'],
    name: 'Guyana'
  },
  {
    id: 'HK',
    alpha2: 'HK',
    alpha3: 'HKG',
    countryCallingCodes: ['852'],
    currencies: ['HKD'],
    name: 'Hong Kong',
    provinces: [
      {
        name: 'Hong Kong Island',
        code: 'HK'
      },
      {
        name: 'Kowloon',
        code: 'KL'
      },
      {
        name: 'New Territories',
        code: 'NT'
      }
    ]
  },
  {
    id: 'HN',
    alpha2: 'HN',
    alpha3: 'HND',
    countryCallingCodes: ['504'],
    currencies: ['HNL'],
    name: 'Honduras'
  },
  {
    id: 'HR',
    alpha2: 'HR',
    alpha3: 'HRV',
    countryCallingCodes: ['385'],
    currencies: ['HRK'],
    name: 'Croatia'
  },
  {
    id: 'HT',
    alpha2: 'HT',
    alpha3: 'HTI',
    countryCallingCodes: ['509'],
    currencies: ['HTG', 'USD'],
    name: 'Haiti'
  },
  {
    id: 'HU',
    alpha2: 'HU',
    alpha3: 'HUN',
    countryCallingCodes: ['36'],
    currencies: ['HUF'],
    name: 'Hungary'
  },
  {
    id: 'ID',
    alpha2: 'ID',
    alpha3: 'IDN',
    currencies: ['IDR'],
    countryCallingCodes: ['62'],
    name: 'Indonesia',
    provinces: [
      {
        name: 'Aceh',
        code: 'AC'
      },
      {
        name: 'Bali',
        code: 'BA'
      },
      {
        name: 'Bangka Belitung',
        code: 'BB'
      },
      {
        name: 'Banten',
        code: 'BT'
      },
      {
        name: 'Bengkulu',
        code: 'BE'
      },
      {
        name: 'Gorontalo',
        code: 'GO'
      },
      {
        name: 'Jakarta',
        code: 'JK'
      },
      {
        name: 'Jambi',
        code: 'JA'
      },
      {
        name: 'Jawa Barat',
        code: 'JB'
      },
      {
        name: 'Jawa Tengah',
        code: 'JT'
      },
      {
        name: 'Jawa Timur',
        code: 'JI'
      },
      {
        name: 'Kalimantan Barat',
        code: 'KB'
      },
      {
        name: 'Kalimantan Selatan',
        code: 'KS'
      },
      {
        name: 'Kalimantan Tengah',
        code: 'KT'
      },
      {
        name: 'Kalimantan Timur',
        code: 'KI'
      },
      {
        name: 'Kalimantan Utara',
        code: 'KU'
      },
      {
        name: 'Kepulauan Riau',
        code: 'KR'
      },
      {
        name: 'Lampung',
        code: 'LA'
      },
      {
        name: 'Maluku',
        code: 'MA'
      },
      {
        name: 'Maluku Utara',
        code: 'MU'
      },
      {
        name: 'North Sumatra',
        code: 'SU'
      },
      {
        name: 'Nusa Tenggara Barat',
        code: 'NB'
      },
      {
        name: 'Nusa Tenggara Timur',
        code: 'NT'
      },
      {
        name: 'Papua',
        code: 'PA'
      },
      {
        name: 'Papua Barat',
        code: 'PB'
      },
      {
        name: 'Riau',
        code: 'RI'
      },
      {
        name: 'South Sumatra',
        code: 'SS'
      },
      {
        name: 'Sulawesi Barat',
        code: 'SR'
      },
      {
        name: 'Sulawesi Selatan',
        code: 'SN'
      },
      {
        name: 'Sulawesi Tengah',
        code: 'ST'
      },
      {
        name: 'Sulawesi Tenggara',
        code: 'SG'
      },
      {
        name: 'Sulawesi Utara',
        code: 'SA'
      },
      {
        name: 'West Sumatra',
        code: 'SB'
      },
      {
        name: 'Yogyakarta',
        code: 'YO'
      }
    ]
  },
  {
    id: 'IE',
    alpha2: 'IE',
    alpha3: 'IRL',
    countryCallingCodes: ['353'],
    currencies: ['EUR'],
    name: 'Ireland',
    provinces: [
      {
        name: 'Carlow',
        code: 'CW'
      },
      {
        name: 'Cavan',
        code: 'CN'
      },
      {
        name: 'Clare',
        code: 'CE'
      },
      {
        name: 'Cork',
        code: 'CO'
      },
      {
        name: 'Donegal',
        code: 'DL'
      },
      {
        name: 'Dublin',
        code: 'D'
      },
      {
        name: 'Galway',
        code: 'G'
      },
      {
        name: 'Kerry',
        code: 'KY'
      },
      {
        name: 'Kildare',
        code: 'KE'
      },
      {
        name: 'Kilkenny',
        code: 'KK'
      },
      {
        name: 'Laois',
        code: 'LS'
      },
      {
        name: 'Leitrim',
        code: 'LM'
      },
      {
        name: 'Limerick',
        code: 'LK'
      },
      {
        name: 'Longford',
        code: 'LD'
      },
      {
        name: 'Louth',
        code: 'LH'
      },
      {
        name: 'Mayo',
        code: 'MO'
      },
      {
        name: 'Meath',
        code: 'MH'
      },
      {
        name: 'Monaghan',
        code: 'MN'
      },
      {
        name: 'Offaly',
        code: 'OY'
      },
      {
        name: 'Roscommon',
        code: 'RN'
      },
      {
        name: 'Sligo',
        code: 'SO'
      },
      {
        name: 'Tipperary',
        code: 'TA'
      },
      {
        name: 'Waterford',
        code: 'WD'
      },
      {
        name: 'Westmeath',
        code: 'WH'
      },
      {
        name: 'Wexford',
        code: 'WX'
      },
      {
        name: 'Wicklow',
        code: 'WW'
      }
    ]
  },
  {
    id: 'IL',
    alpha2: 'IL',
    alpha3: 'ISR',
    countryCallingCodes: ['972'],
    currencies: ['ILS'],
    name: 'Israel'
  },
  {
    id: 'IM',
    alpha2: 'IM',
    alpha3: 'IMN',
    countryCallingCodes: ['44'],
    currencies: ['GBP'],
    name: 'Isle Of Man'
  },
  {
    id: 'IN',
    alpha2: 'IN',
    alpha3: 'IND',
    countryCallingCodes: ['91'],
    currencies: ['INR'],
    name: 'India',
    provinces: [
      {
        name: 'Andaman and Nicobar Islands',
        code: 'AN'
      },
      {
        name: 'Andhra Pradesh',
        code: 'AP'
      },
      {
        name: 'Arunachal Pradesh',
        code: 'AR'
      },
      {
        name: 'Assam',
        code: 'AS'
      },
      {
        name: 'Bihar',
        code: 'BR'
      },
      {
        name: 'Chandigarh',
        code: 'CH'
      },
      {
        name: 'Chhattisgarh',
        code: 'CG'
      },
      {
        name: 'Dadra and Nagar Haveli',
        code: 'DN'
      },
      {
        name: 'Daman and Diu',
        code: 'DD'
      },
      {
        name: 'Delhi',
        code: 'DL'
      },
      {
        name: 'Goa',
        code: 'GA'
      },
      {
        name: 'Gujarat',
        code: 'GJ'
      },
      {
        name: 'Haryana',
        code: 'HR'
      },
      {
        name: 'Himachal Pradesh',
        code: 'HP'
      },
      {
        name: 'Jammu and Kashmir',
        code: 'JK'
      },
      {
        name: 'Jharkhand',
        code: 'JH'
      },
      {
        name: 'Karnataka',
        code: 'KA'
      },
      {
        name: 'Kerala',
        code: 'KL'
      },
      {
        name: 'Ladakh',
        code: 'LA'
      },
      {
        name: 'Lakshadweep',
        code: 'LD'
      },
      {
        name: 'Madhya Pradesh',
        code: 'MP'
      },
      {
        name: 'Maharashtra',
        code: 'MH'
      },
      {
        name: 'Manipur',
        code: 'MN'
      },
      {
        name: 'Meghalaya',
        code: 'ML'
      },
      {
        name: 'Mizoram',
        code: 'MZ'
      },
      {
        name: 'Nagaland',
        code: 'NL'
      },
      {
        name: 'Odisha',
        code: 'OR'
      },
      {
        name: 'Puducherry',
        code: 'PY'
      },
      {
        name: 'Punjab',
        code: 'PB'
      },
      {
        name: 'Rajasthan',
        code: 'RJ'
      },
      {
        name: 'Sikkim',
        code: 'SK'
      },
      {
        name: 'Tamil Nadu',
        code: 'TN'
      },
      {
        name: 'Telangana',
        code: 'TS'
      },
      {
        name: 'Tripura',
        code: 'TR'
      },
      {
        name: 'Uttar Pradesh',
        code: 'UP'
      },
      {
        name: 'Uttarakhand',
        code: 'UK'
      },
      {
        name: 'West Bengal',
        code: 'WB'
      }
    ]
  },
  {
    id: 'IQ',
    alpha2: 'IQ',
    alpha3: 'IRQ',
    countryCallingCodes: ['964'],
    currencies: ['IQD'],
    name: 'Iraq'
  },
  {
    id: 'IR',
    alpha2: 'IR',
    alpha3: 'IRN',
    countryCallingCodes: ['98'],
    currencies: ['IRR'],
    name: 'Iran, Islamic Republic Of'
  },
  {
    id: 'IS',
    alpha2: 'IS',
    alpha3: 'ISL',
    countryCallingCodes: ['354'],
    currencies: ['ISK'],
    name: 'Iceland'
  },
  {
    id: 'IT',
    alpha2: 'IT',
    alpha3: 'ITA',
    countryCallingCodes: ['39'],
    currencies: ['EUR'],
    name: 'Italy',
    provinces: [
      {
        name: 'Agrigento',
        code: 'AG'
      },
      {
        name: 'Alessandria',
        code: 'AL'
      },
      {
        name: 'Ancona',
        code: 'AN'
      },
      {
        name: 'Aosta',
        code: 'AO'
      },
      {
        name: 'Arezzo',
        code: 'AR'
      },
      {
        name: 'Ascoli Piceno',
        code: 'AP'
      },
      {
        name: 'Asti',
        code: 'AT'
      },
      {
        name: 'Avellino',
        code: 'AV'
      },
      {
        name: 'Bari',
        code: 'BA'
      },
      {
        name: 'Barletta-Andria-Trani',
        code: 'BT'
      },
      {
        name: 'Belluno',
        code: 'BL'
      },
      {
        name: 'Benevento',
        code: 'BN'
      },
      {
        name: 'Bergamo',
        code: 'BG'
      },
      {
        name: 'Biella',
        code: 'BI'
      },
      {
        name: 'Bologna',
        code: 'BO'
      },
      {
        name: 'Bolzano',
        code: 'BZ'
      },
      {
        name: 'Brescia',
        code: 'BS'
      },
      {
        name: 'Brindisi',
        code: 'BR'
      },
      {
        name: 'Cagliari',
        code: 'CA'
      },
      {
        name: 'Caltanissetta',
        code: 'CL'
      },
      {
        name: 'Campobasso',
        code: 'CB'
      },
      {
        name: 'Carbonia-Iglesias',
        code: 'CI'
      },
      {
        name: 'Caserta',
        code: 'CE'
      },
      {
        name: 'Catania',
        code: 'CT'
      },
      {
        name: 'Catanzaro',
        code: 'CZ'
      },
      {
        name: 'Chieti',
        code: 'CH'
      },
      {
        name: 'Como',
        code: 'CO'
      },
      {
        name: 'Cosenza',
        code: 'CS'
      },
      {
        name: 'Cremona',
        code: 'CR'
      },
      {
        name: 'Crotone',
        code: 'KR'
      },
      {
        name: 'Cuneo',
        code: 'CN'
      },
      {
        name: 'Enna',
        code: 'EN'
      },
      {
        name: 'Fermo',
        code: 'FM'
      },
      {
        name: 'Ferrara',
        code: 'FE'
      },
      {
        name: 'Firenze',
        code: 'FI'
      },
      {
        name: 'Foggia',
        code: 'FG'
      },
      {
        name: 'Forlì-Cesena',
        code: 'FC'
      },
      {
        name: 'Frosinone',
        code: 'FR'
      },
      {
        name: 'Genova',
        code: 'GE'
      },
      {
        name: 'Gorizia',
        code: 'GO'
      },
      {
        name: 'Grosseto',
        code: 'GR'
      },
      {
        name: 'Imperia',
        code: 'IM'
      },
      {
        name: 'Isernia',
        code: 'IS'
      },
      {
        name: "L'Aquila",
        code: 'AQ'
      },
      {
        name: 'La Spezia',
        code: 'SP'
      },
      {
        name: 'Latina',
        code: 'LT'
      },
      {
        name: 'Lecce',
        code: 'LE'
      },
      {
        name: 'Lecco',
        code: 'LC'
      },
      {
        name: 'Livorno',
        code: 'LI'
      },
      {
        name: 'Lodi',
        code: 'LO'
      },
      {
        name: 'Lucca',
        code: 'LU'
      },
      {
        name: 'Macerata',
        code: 'MC'
      },
      {
        name: 'Mantova',
        code: 'MN'
      },
      {
        name: 'Massa-Carrara',
        code: 'MS'
      },
      {
        name: 'Matera',
        code: 'MT'
      },
      {
        name: 'Medio Campidano',
        code: 'VS'
      },
      {
        name: 'Messina',
        code: 'ME'
      },
      {
        name: 'Milano',
        code: 'MI'
      },
      {
        name: 'Modena',
        code: 'MO'
      },
      {
        name: 'Monza e Brianza',
        code: 'MB'
      },
      {
        name: 'Napoli',
        code: 'NA'
      },
      {
        name: 'Novara',
        code: 'NO'
      },
      {
        name: 'Nuoro',
        code: 'NU'
      },
      {
        name: 'Ogliastra',
        code: 'OG'
      },
      {
        name: 'Olbia-Tempio',
        code: 'OT'
      },
      {
        name: 'Oristano',
        code: 'OR'
      },
      {
        name: 'Padova',
        code: 'PD'
      },
      {
        name: 'Palermo',
        code: 'PA'
      },
      {
        name: 'Parma',
        code: 'PR'
      },
      {
        name: 'Pavia',
        code: 'PV'
      },
      {
        name: 'Perugia',
        code: 'PG'
      },
      {
        name: 'Pesaro e Urbino',
        code: 'PU'
      },
      {
        name: 'Pescara',
        code: 'PE'
      },
      {
        name: 'Piacenza',
        code: 'PC'
      },
      {
        name: 'Pisa',
        code: 'PI'
      },
      {
        name: 'Pistoia',
        code: 'PT'
      },
      {
        name: 'Pordenone',
        code: 'PN'
      },
      {
        name: 'Potenza',
        code: 'PZ'
      },
      {
        name: 'Prato',
        code: 'PO'
      },
      {
        name: 'Ragusa',
        code: 'RG'
      },
      {
        name: 'Ravenna',
        code: 'RA'
      },
      {
        name: 'Reggio Calabria',
        code: 'RC'
      },
      {
        name: 'Reggio Emilia',
        code: 'RE'
      },
      {
        name: 'Rieti',
        code: 'RI'
      },
      {
        name: 'Rimini',
        code: 'RN'
      },
      {
        name: 'Roma',
        code: 'RM'
      },
      {
        name: 'Rovigo',
        code: 'RO'
      },
      {
        name: 'Salerno',
        code: 'SA'
      },
      {
        name: 'Sassari',
        code: 'SS'
      },
      {
        name: 'Savona',
        code: 'SV'
      },
      {
        name: 'Siena',
        code: 'SI'
      },
      {
        name: 'Siracusa',
        code: 'SR'
      },
      {
        name: 'Sondrio',
        code: 'SO'
      },
      {
        name: 'Taranto',
        code: 'TA'
      },
      {
        name: 'Teramo',
        code: 'TE'
      },
      {
        name: 'Terni',
        code: 'TR'
      },
      {
        name: 'Torino',
        code: 'TO'
      },
      {
        name: 'Trapani',
        code: 'TP'
      },
      {
        name: 'Trento',
        code: 'TN'
      },
      {
        name: 'Treviso',
        code: 'TV'
      },
      {
        name: 'Trieste',
        code: 'TS'
      },
      {
        name: 'Udine',
        code: 'UD'
      },
      {
        name: 'Varese',
        code: 'VA'
      },
      {
        name: 'Venezia',
        code: 'VE'
      },
      {
        name: 'Verbano-Cusio-Ossola',
        code: 'VB'
      },
      {
        name: 'Vercelli',
        code: 'VC'
      },
      {
        name: 'Verona',
        code: 'VR'
      },
      {
        name: 'Vibo Valentia',
        code: 'VV'
      },
      {
        name: 'Vicenza',
        code: 'VI'
      },
      {
        name: 'Viterbo',
        code: 'VT'
      }
    ]
  },
  {
    id: 'JE',
    alpha2: 'JE',
    alpha3: 'JEY',
    countryCallingCodes: ['44'],
    currencies: ['GBP'],
    name: 'Jersey'
  },
  {
    id: 'JM',
    alpha2: 'JM',
    alpha3: 'JAM',
    countryCallingCodes: ['1876'],
    currencies: ['JMD'],
    name: 'Jamaica'
  },
  {
    id: 'JO',
    alpha2: 'JO',
    alpha3: 'JOR',
    countryCallingCodes: ['962'],
    currencies: ['JOD'],
    name: 'Jordan'
  },
  {
    id: 'JP',
    alpha2: 'JP',
    alpha3: 'JPN',
    countryCallingCodes: ['81'],
    currencies: ['JPY'],
    name: 'Japan',
    provinces: [
      {
        name: 'Aichi',
        code: 'JP-23'
      },
      {
        name: 'Akita',
        code: 'JP-05'
      },
      {
        name: 'Aomori',
        code: 'JP-02'
      },
      {
        name: 'Chiba',
        code: 'JP-12'
      },
      {
        name: 'Ehime',
        code: 'JP-38'
      },
      {
        name: 'Fukui',
        code: 'JP-18'
      },
      {
        name: 'Fukuoka',
        code: 'JP-40'
      },
      {
        name: 'Fukushima',
        code: 'JP-07'
      },
      {
        name: 'Gifu',
        code: 'JP-21'
      },
      {
        name: 'Gunma',
        code: 'JP-10'
      },
      {
        name: 'Hiroshima',
        code: 'JP-34'
      },
      {
        name: 'Hokkaidō',
        code: 'JP-01'
      },
      {
        name: 'Hyōgo',
        code: 'JP-28'
      },
      {
        name: 'Ibaraki',
        code: 'JP-08'
      },
      {
        name: 'Ishikawa',
        code: 'JP-17'
      },
      {
        name: 'Iwate',
        code: 'JP-03'
      },
      {
        name: 'Kagawa',
        code: 'JP-37'
      },
      {
        name: 'Kagoshima',
        code: 'JP-46'
      },
      {
        name: 'Kanagawa',
        code: 'JP-14'
      },
      {
        name: 'Kōchi',
        code: 'JP-39'
      },
      {
        name: 'Kumamoto',
        code: 'JP-43'
      },
      {
        name: 'Kyōto',
        code: 'JP-26'
      },
      {
        name: 'Mie',
        code: 'JP-24'
      },
      {
        name: 'Miyagi',
        code: 'JP-04'
      },
      {
        name: 'Miyazaki',
        code: 'JP-45'
      },
      {
        name: 'Nagano',
        code: 'JP-20'
      },
      {
        name: 'Nagasaki',
        code: 'JP-42'
      },
      {
        name: 'Nara',
        code: 'JP-29'
      },
      {
        name: 'Niigata',
        code: 'JP-15'
      },
      {
        name: 'Ōita',
        code: 'JP-44'
      },
      {
        name: 'Okayama',
        code: 'JP-33'
      },
      {
        name: 'Okinawa',
        code: 'JP-47'
      },
      {
        name: 'Ōsaka',
        code: 'JP-27'
      },
      {
        name: 'Saga',
        code: 'JP-41'
      },
      {
        name: 'Saitama',
        code: 'JP-11'
      },
      {
        name: 'Shiga',
        code: 'JP-25'
      },
      {
        name: 'Shimane',
        code: 'JP-32'
      },
      {
        name: 'Shizuoka',
        code: 'JP-22'
      },
      {
        name: 'Tochigi',
        code: 'JP-09'
      },
      {
        name: 'Tokushima',
        code: 'JP-36'
      },
      {
        name: 'Tōkyō',
        code: 'JP-13'
      },
      {
        name: 'Tottori',
        code: 'JP-31'
      },
      {
        name: 'Toyama',
        code: 'JP-16'
      },
      {
        name: 'Wakayama',
        code: 'JP-30'
      },
      {
        name: 'Yamagata',
        code: 'JP-06'
      },
      {
        name: 'Yamaguchi',
        code: 'JP-35'
      },
      {
        name: 'Yamanashi',
        code: 'JP-19'
      }
    ]
  },
  {
    id: 'KE',
    alpha2: 'KE',
    alpha3: 'KEN',
    countryCallingCodes: ['254'],
    currencies: ['KES'],
    name: 'Kenya'
  },
  {
    id: 'KG',
    alpha2: 'KG',
    alpha3: 'KGZ',
    countryCallingCodes: ['996'],
    currencies: ['KGS'],
    name: 'Kyrgyzstan'
  },
  {
    id: 'KH',
    alpha2: 'KH',
    alpha3: 'KHM',
    countryCallingCodes: ['855'],
    currencies: ['KHR'],
    name: 'Cambodia'
  },
  {
    id: 'KI',
    alpha2: 'KI',
    alpha3: 'KIR',
    countryCallingCodes: ['686'],
    currencies: ['AUD'],
    name: 'Kiribati'
  },
  {
    id: 'KM',
    alpha2: 'KM',
    alpha3: 'COM',
    countryCallingCodes: ['269'],
    currencies: ['KMF'],
    name: 'Comoros'
  },
  {
    id: 'KN',
    alpha2: 'KN',
    alpha3: 'KNA',
    countryCallingCodes: ['1869'],
    currencies: ['XCD'],
    name: 'Saint Kitts And Nevis'
  },
  {
    id: 'KP',
    alpha2: 'KP',
    alpha3: 'PRK',
    countryCallingCodes: ['850'],
    currencies: ['KPW'],
    name: "Korea, Democratic People's Republic Of"
  },
  {
    id: 'KR',
    alpha2: 'KR',
    alpha3: 'KOR',
    countryCallingCodes: ['82'],
    currencies: ['KRW'],
    name: 'Korea, Republic Of',
    provinces: [
      {
        name: 'Busan',
        code: 'KR-26'
      },
      {
        name: 'Chungbuk',
        code: 'KR-43'
      },
      {
        name: 'Chungnam',
        code: 'KR-44'
      },
      {
        name: 'Daegu',
        code: 'KR-27'
      },
      {
        name: 'Daejeon',
        code: 'KR-30'
      },
      {
        name: 'Gangwon',
        code: 'KR-42'
      },
      {
        name: 'Gwangju',
        code: 'KR-29'
      },
      {
        name: 'Gyeongbuk',
        code: 'KR-47'
      },
      {
        name: 'Gyeonggi',
        code: 'KR-41'
      },
      {
        name: 'Gyeongnam',
        code: 'KR-48'
      },
      {
        name: 'Incheon',
        code: 'KR-28'
      },
      {
        name: 'Jeju',
        code: 'KR-49'
      },
      {
        name: 'Jeonbuk',
        code: 'KR-45'
      },
      {
        name: 'Jeonnam',
        code: 'KR-46'
      },
      {
        name: 'Sejong',
        code: 'KR-50'
      },
      {
        name: 'Seoul',
        code: 'KR-11'
      },
      {
        name: 'Ulsan',
        code: 'KR-31'
      }
    ]
  },
  {
    id: 'KW',
    alpha2: 'KW',
    alpha3: 'KWT',
    countryCallingCodes: ['965'],
    currencies: ['KWD'],
    name: 'Kuwait'
  },
  {
    id: 'KY',
    alpha2: 'KY',
    alpha3: 'CYM',
    countryCallingCodes: ['345'],
    currencies: ['KYD'],
    name: 'Cayman Islands'
  },
  {
    id: 'KZ',
    alpha2: 'KZ',
    alpha3: 'KAZ',
    countryCallingCodes: ['77'],
    currencies: ['KZT'],
    name: 'Kazakhstan'
  },
  {
    id: 'LA',
    alpha2: 'LA',
    alpha3: 'LAO',
    countryCallingCodes: ['856'],
    currencies: ['LAK'],
    name: "Lao People's Democratic Republic"
  },
  {
    id: 'LB',
    alpha2: 'LB',
    alpha3: 'LBN',
    countryCallingCodes: ['961'],
    currencies: ['LBP'],
    name: 'Lebanon'
  },
  {
    id: 'LC',
    alpha2: 'LC',
    alpha3: 'LCA',
    countryCallingCodes: ['1758'],
    currencies: ['XCD'],
    name: 'Saint Lucia'
  },
  {
    id: 'LI',
    alpha2: 'LI',
    alpha3: 'LIE',
    countryCallingCodes: ['423'],
    currencies: ['CHF'],
    name: 'Liechtenstein'
  },
  {
    id: 'LK',
    alpha2: 'LK',
    alpha3: 'LKA',
    countryCallingCodes: ['94'],
    currencies: ['LKR'],
    name: 'Sri Lanka'
  },
  {
    id: 'LR',
    alpha2: 'LR',
    alpha3: 'LBR',
    countryCallingCodes: ['231'],
    currencies: ['LRD'],
    name: 'Liberia'
  },
  {
    id: 'LS',
    alpha2: 'LS',
    alpha3: 'LSO',
    countryCallingCodes: ['266'],
    currencies: ['LSL', 'ZAR'],
    name: 'Lesotho'
  },
  {
    id: 'LT',
    alpha2: 'LT',
    alpha3: 'LTU',
    countryCallingCodes: ['370'],
    currencies: ['LTL'],
    name: 'Lithuania'
  },
  {
    id: 'LU',
    alpha2: 'LU',
    alpha3: 'LUX',
    countryCallingCodes: ['352'],
    currencies: ['EUR'],
    name: 'Luxembourg'
  },
  {
    id: 'LV',
    alpha2: 'LV',
    alpha3: 'LVA',
    countryCallingCodes: ['371'],
    currencies: ['LVL'],
    name: 'Latvia'
  },
  {
    id: 'LY',
    alpha2: 'LY',
    alpha3: 'LBY',
    countryCallingCodes: ['218'],
    currencies: ['LYD'],
    name: 'Libya'
  },
  {
    id: 'MA',
    alpha2: 'MA',
    alpha3: 'MAR',
    countryCallingCodes: ['212'],
    currencies: ['MAD'],
    name: 'Morocco'
  },
  {
    id: 'MC',
    alpha2: 'MC',
    alpha3: 'MCO',
    countryCallingCodes: ['377'],
    currencies: ['EUR'],
    name: 'Monaco'
  },
  {
    id: 'MD',
    alpha2: 'MD',
    alpha3: 'MDA',
    countryCallingCodes: ['373'],
    currencies: ['MDL'],
    name: 'Moldova'
  },
  {
    id: 'ME',
    alpha2: 'ME',
    alpha3: 'MNE',
    countryCallingCodes: ['382'],
    currencies: ['EUR'],
    name: 'Montenegro'
  },
  {
    id: 'MG',
    alpha2: 'MG',
    alpha3: 'MDG',
    countryCallingCodes: ['261'],
    currencies: ['MGA'],
    name: 'Madagascar'
  },
  {
    id: 'MH',
    alpha2: 'MH',
    alpha3: 'MHL',
    countryCallingCodes: ['692'],
    currencies: ['USD'],
    name: 'Marshall Islands'
  },
  {
    id: 'MK',
    alpha2: 'MK',
    alpha3: 'MKD',
    countryCallingCodes: ['389'],
    currencies: ['MKD'],
    name: 'Macedonia, The Former Yugoslav Republic Of'
  },
  {
    id: 'ML',
    alpha2: 'ML',
    alpha3: 'MLI',
    countryCallingCodes: ['223'],
    currencies: ['XOF'],
    name: 'Mali'
  },
  {
    id: 'MM',
    alpha2: 'MM',
    alpha3: 'MMR',
    countryCallingCodes: ['95'],
    currencies: ['MMK'],
    name: 'Myanmar'
  },
  {
    id: 'MN',
    alpha2: 'MN',
    alpha3: 'MNG',
    countryCallingCodes: ['976'],
    currencies: ['MNT'],
    name: 'Mongolia'
  },
  {
    id: 'MO',
    alpha2: 'MO',
    alpha3: 'MAC',
    countryCallingCodes: ['853'],
    currencies: ['MOP'],
    name: 'Macao'
  },
  {
    id: 'MP',
    alpha2: 'MP',
    alpha3: 'MNP',
    countryCallingCodes: ['1670'],
    currencies: ['USD'],
    name: 'Northern Mariana Islands'
  },
  {
    id: 'MQ',
    alpha2: 'MQ',
    alpha3: 'MTQ',
    countryCallingCodes: ['596'],
    currencies: ['EUR'],
    name: 'Martinique'
  },
  {
    id: 'MR',
    alpha2: 'MR',
    alpha3: 'MRT',
    countryCallingCodes: ['222'],
    currencies: ['MRO'],
    name: 'Mauritania'
  },
  {
    id: 'MS',
    alpha2: 'MS',
    alpha3: 'MSR',
    countryCallingCodes: ['1664'],
    currencies: ['XCD'],
    name: 'Montserrat'
  },
  {
    id: 'MT',
    alpha2: 'MT',
    alpha3: 'MLT',
    countryCallingCodes: ['356'],
    currencies: ['EUR'],
    name: 'Malta'
  },
  {
    id: 'MU',
    alpha2: 'MU',
    alpha3: 'MUS',
    countryCallingCodes: ['230'],
    currencies: ['MUR'],
    name: 'Mauritius'
  },
  {
    id: 'MV',
    alpha2: 'MV',
    alpha3: 'MDV',
    countryCallingCodes: ['960'],
    currencies: ['MVR'],
    name: 'Maldives'
  },
  {
    id: 'MW',
    alpha2: 'MW',
    alpha3: 'MWI',
    countryCallingCodes: ['265'],
    currencies: ['MWK'],
    name: 'Malawi'
  },
  {
    id: 'MX',
    alpha2: 'MX',
    alpha3: 'MEX',
    countryCallingCodes: ['52'],
    currencies: ['MXN', 'MXV'],
    name: 'Mexico',
    provinces: [
      {
        name: 'Aguascalientes',
        code: 'AGS'
      },
      {
        name: 'Baja California',
        code: 'BC'
      },
      {
        name: 'Baja California Sur',
        code: 'BCS'
      },
      {
        name: 'Campeche',
        code: 'CAMP'
      },
      {
        name: 'Chiapas',
        code: 'CHIS'
      },
      {
        name: 'Chihuahua',
        code: 'CHIH'
      },
      {
        name: 'Ciudad de México',
        code: 'DF'
      },
      {
        name: 'Coahuila',
        code: 'COAH'
      },
      {
        name: 'Colima',
        code: 'COL'
      },
      {
        name: 'Durango',
        code: 'DGO'
      },
      {
        name: 'Guanajuato',
        code: 'GTO'
      },
      {
        name: 'Guerrero',
        code: 'GRO'
      },
      {
        name: 'Hidalgo',
        code: 'HGO'
      },
      {
        name: 'Jalisco',
        code: 'JAL'
      },
      {
        name: 'México',
        code: 'MEX'
      },
      {
        name: 'Michoacán',
        code: 'MICH'
      },
      {
        name: 'Morelos',
        code: 'MOR'
      },
      {
        name: 'Nayarit',
        code: 'NAY'
      },
      {
        name: 'Nuevo León',
        code: 'NL'
      },
      {
        name: 'Oaxaca',
        code: 'OAX'
      },
      {
        name: 'Puebla',
        code: 'PUE'
      },
      {
        name: 'Querétaro',
        code: 'QRO'
      },
      {
        name: 'Quintana Roo',
        code: 'Q ROO'
      },
      {
        name: 'San Luis Potosí',
        code: 'SLP'
      },
      {
        name: 'Sinaloa',
        code: 'SIN'
      },
      {
        name: 'Sonora',
        code: 'SON'
      },
      {
        name: 'Tabasco',
        code: 'TAB'
      },
      {
        name: 'Tamaulipas',
        code: 'TAMPS'
      },
      {
        name: 'Tlaxcala',
        code: 'TLAX'
      },
      {
        name: 'Veracruz',
        code: 'VER'
      },
      {
        name: 'Yucatán',
        code: 'YUC'
      },
      {
        name: 'Zacatecas',
        code: 'ZAC'
      }
    ]
  },
  {
    id: 'MY',
    alpha2: 'MY',
    alpha3: 'MYS',
    countryCallingCodes: ['60'],
    currencies: ['MYR'],
    name: 'Malaysia',
    provinces: [
      {
        name: 'Johor',
        code: 'JHR'
      },
      {
        name: 'Kedah',
        code: 'KDH'
      },
      {
        name: 'Kelantan',
        code: 'KTN'
      },
      {
        name: 'Kuala Lumpur',
        code: 'KUL'
      },
      {
        name: 'Labuan',
        code: 'LBN'
      },
      {
        name: 'Melaka',
        code: 'MLK'
      },
      {
        name: 'Negeri Sembilan',
        code: 'NSN'
      },
      {
        name: 'Pahang',
        code: 'PHG'
      },
      {
        name: 'Penang',
        code: 'PNG'
      },
      {
        name: 'Perak',
        code: 'PRK'
      },
      {
        name: 'Perlis',
        code: 'PLS'
      },
      {
        name: 'Putrajaya',
        code: 'PJY'
      },
      {
        name: 'Sabah',
        code: 'SBH'
      },
      {
        name: 'Sarawak',
        code: 'SWK'
      },
      {
        name: 'Selangor',
        code: 'SGR'
      },
      {
        name: 'Terengganu',
        code: 'TRG'
      }
    ]
  },
  {
    id: 'MZ',
    alpha2: 'MZ',
    alpha3: 'MOZ',
    countryCallingCodes: ['258'],
    currencies: ['MZN'],
    name: 'Mozambique'
  },
  {
    id: 'NA',
    alpha2: 'NA',
    alpha3: 'NAM',
    countryCallingCodes: ['264'],
    currencies: ['NAD', 'ZAR'],
    name: 'Namibia'
  },
  {
    id: 'NC',
    alpha2: 'NC',
    alpha3: 'NCL',
    countryCallingCodes: ['687'],
    currencies: ['XPF'],
    name: 'New Caledonia'
  },
  {
    id: 'NE',
    alpha2: 'NE',
    alpha3: 'NER',
    countryCallingCodes: ['227'],
    currencies: ['XOF'],
    name: 'Niger'
  },
  {
    id: 'NF',
    alpha2: 'NF',
    alpha3: 'NFK',
    countryCallingCodes: ['672'],
    currencies: ['AUD'],
    name: 'Norfolk Island'
  },
  {
    id: 'NG',
    alpha2: 'NG',
    alpha3: 'NGA',
    countryCallingCodes: ['234'],
    currencies: ['NGN'],
    name: 'Nigeria',
    provinces: [
      {
        name: 'Abia',
        code: 'AB'
      },
      {
        name: 'Abuja Federal Capital Territory',
        code: 'FC'
      },
      {
        name: 'Adamawa',
        code: 'AD'
      },
      {
        name: 'Akwa Ibom',
        code: 'AK'
      },
      {
        name: 'Anambra',
        code: 'AN'
      },
      {
        name: 'Bauchi',
        code: 'BA'
      },
      {
        name: 'Bayelsa',
        code: 'BY'
      },
      {
        name: 'Benue',
        code: 'BE'
      },
      {
        name: 'Borno',
        code: 'BO'
      },
      {
        name: 'Cross River',
        code: 'CR'
      },
      {
        name: 'Delta',
        code: 'DE'
      },
      {
        name: 'Ebonyi',
        code: 'EB'
      },
      {
        name: 'Edo',
        code: 'ED'
      },
      {
        name: 'Ekiti',
        code: 'EK'
      },
      {
        name: 'Enugu',
        code: 'EN'
      },
      {
        name: 'Gombe',
        code: 'GO'
      },
      {
        name: 'Imo',
        code: 'IM'
      },
      {
        name: 'Jigawa',
        code: 'JI'
      },
      {
        name: 'Kaduna',
        code: 'KD'
      },
      {
        name: 'Kano',
        code: 'KN'
      },
      {
        name: 'Katsina',
        code: 'KT'
      },
      {
        name: 'Kebbi',
        code: 'KE'
      },
      {
        name: 'Kogi',
        code: 'KO'
      },
      {
        name: 'Kwara',
        code: 'KW'
      },
      {
        name: 'Lagos',
        code: 'LA'
      },
      {
        name: 'Nasarawa',
        code: 'NA'
      },
      {
        name: 'Niger',
        code: 'NI'
      },
      {
        name: 'Ogun',
        code: 'OG'
      },
      {
        name: 'Ondo',
        code: 'ON'
      },
      {
        name: 'Osun',
        code: 'OS'
      },
      {
        name: 'Oyo',
        code: 'OY'
      },
      {
        name: 'Plateau',
        code: 'PL'
      },
      {
        name: 'Rivers',
        code: 'RI'
      },
      {
        name: 'Sokoto',
        code: 'SO'
      },
      {
        name: 'Taraba',
        code: 'TA'
      },
      {
        name: 'Yobe',
        code: 'YO'
      },
      {
        name: 'Zamfara',
        code: 'ZA'
      }
    ]
  },
  {
    id: 'NI',
    alpha2: 'NI',
    alpha3: 'NIC',
    countryCallingCodes: ['505'],
    currencies: ['NIO'],
    name: 'Nicaragua'
  },
  {
    id: 'NL',
    alpha2: 'NL',
    alpha3: 'NLD',
    countryCallingCodes: ['31'],
    currencies: ['EUR'],
    name: 'Netherlands'
  },
  {
    id: 'NO',
    alpha2: 'NO',
    alpha3: 'NOR',
    countryCallingCodes: ['47'],
    currencies: ['NOK'],
    name: 'Norway'
  },
  {
    id: 'NP',
    alpha2: 'NP',
    alpha3: 'NPL',
    countryCallingCodes: ['977'],
    currencies: ['NPR'],
    name: 'Nepal'
  },
  {
    id: 'NR',
    alpha2: 'NR',
    alpha3: 'NRU',
    countryCallingCodes: ['674'],
    currencies: ['AUD'],
    name: 'Nauru'
  },
  {
    id: 'NU',
    alpha2: 'NU',
    alpha3: 'NIU',
    countryCallingCodes: ['683'],
    currencies: ['NZD'],
    name: 'Niue'
  },
  {
    id: 'NZ',
    alpha2: 'NZ',
    alpha3: 'NZL',
    countryCallingCodes: ['64'],
    currencies: ['NZD'],
    name: 'New Zealand',
    provinces: [
      {
        name: 'Auckland',
        code: 'AUK'
      },
      {
        name: 'Bay of Plenty',
        code: 'BOP'
      },
      {
        name: 'Canterbury',
        code: 'CAN'
      },
      {
        name: 'Gisborne',
        code: 'GIS'
      },
      {
        name: "Hawke's Bay",
        code: 'HKB'
      },
      {
        name: 'Manawatu-Wanganui',
        code: 'MWT'
      },
      {
        name: 'Marlborough',
        code: 'MBH'
      },
      {
        name: 'Nelson',
        code: 'NSN'
      },
      {
        name: 'Northland',
        code: 'NTL'
      },
      {
        name: 'Otago',
        code: 'OTA'
      },
      {
        name: 'Southland',
        code: 'STL'
      },
      {
        name: 'Taranaki',
        code: 'TKI'
      },
      {
        name: 'Tasman',
        code: 'TAS'
      },
      {
        name: 'Waikato',
        code: 'WKO'
      },
      {
        name: 'Wellington',
        code: 'WGN'
      },
      {
        name: 'West Coast',
        code: 'WTC'
      }
    ]
  },
  {
    id: 'OM',
    alpha2: 'OM',
    alpha3: 'OMN',
    countryCallingCodes: ['968'],
    currencies: ['OMR'],
    name: 'Oman'
  },
  {
    id: 'PA',
    alpha2: 'PA',
    alpha3: 'PAN',
    countryCallingCodes: ['507'],
    currencies: ['PAB', 'USD'],
    name: 'Panama',
    provinces: [
      {
        name: 'Bocas del Toro',
        code: 'PA-1'
      },
      {
        name: 'Chiriquí',
        code: 'PA-4'
      },
      {
        name: 'Coclé',
        code: 'PA-2'
      },
      {
        name: 'Colón',
        code: 'PA-3'
      },
      {
        name: 'Darién',
        code: 'PA-5'
      },
      {
        name: 'Emberá',
        code: 'PA-EM'
      },
      {
        name: 'Herrera',
        code: 'PA-6'
      },
      {
        name: 'Kuna Yala',
        code: 'PA-KY'
      },
      {
        name: 'Los Santos',
        code: 'PA-7'
      },
      {
        name: 'Ngöbe-Buglé',
        code: 'PA-NB'
      },
      {
        name: 'Panamá',
        code: 'PA-8'
      },
      {
        name: 'Panamá Oeste',
        code: 'PA-10'
      },
      {
        name: 'Veraguas',
        code: 'PA-9'
      }
    ]
  },
  {
    id: 'PE',
    alpha2: 'PE',
    alpha3: 'PER',
    countryCallingCodes: ['51'],
    currencies: ['PEN'],
    name: 'Peru',
    provinces: [
      {
        name: 'Amazonas',
        code: 'PE-AMA'
      },
      {
        name: 'Áncash',
        code: 'PE-ANC'
      },
      {
        name: 'Apurímac',
        code: 'PE-APU'
      },
      {
        name: 'Arequipa',
        code: 'PE-ARE'
      },
      {
        name: 'Ayacucho',
        code: 'PE-AYA'
      },
      {
        name: 'Cajamarca',
        code: 'PE-CAJ'
      },
      {
        name: 'Callao',
        code: 'PE-CAL'
      },
      {
        name: 'Cuzco',
        code: 'PE-CUS'
      },
      {
        name: 'Huancavelica',
        code: 'PE-HUV'
      },
      {
        name: 'Huánuco',
        code: 'PE-HUC'
      },
      {
        name: 'Ica',
        code: 'PE-ICA'
      },
      {
        name: 'Junín',
        code: 'PE-JUN'
      },
      {
        name: 'La Libertad',
        code: 'PE-LAL'
      },
      {
        name: 'Lambayeque',
        code: 'PE-LAM'
      },
      {
        name: 'Lima (departamento)',
        code: 'PE-LIM'
      },
      {
        name: 'Lima (provincia)',
        code: 'PE-LMA'
      },
      {
        name: 'Loreto',
        code: 'PE-LOR'
      },
      {
        name: 'Madre de Dios',
        code: 'PE-MDD'
      },
      {
        name: 'Moquegua',
        code: 'PE-MOQ'
      },
      {
        name: 'Pasco',
        code: 'PE-PAS'
      },
      {
        name: 'Piura',
        code: 'PE-PIU'
      },
      {
        name: 'Puno',
        code: 'PE-PUN'
      },
      {
        name: 'San Martín',
        code: 'PE-SAM'
      },
      {
        name: 'Tacna',
        code: 'PE-TAC'
      },
      {
        name: 'Tumbes',
        code: 'PE-TUM'
      },
      {
        name: 'Ucayali',
        code: 'PE-UCA'
      }
    ]
  },
  {
    id: 'PF',
    alpha2: 'PF',
    alpha3: 'PYF',
    countryCallingCodes: ['689'],
    currencies: ['XPF'],
    name: 'French Polynesia'
  },
  {
    id: 'PG',
    alpha2: 'PG',
    alpha3: 'PNG',
    countryCallingCodes: ['675'],
    currencies: ['PGK'],
    name: 'Papua New Guinea'
  },
  {
    id: 'PH',
    alpha2: 'PH',
    alpha3: 'PHL',
    countryCallingCodes: ['63'],
    currencies: ['PHP'],
    name: 'Philippines',
    provinces: [
      {
        name: 'Abra',
        code: 'PH-ABR'
      },
      {
        name: 'Agusan del Norte',
        code: 'PH-AGN'
      },
      {
        name: 'Agusan del Sur',
        code: 'PH-AGS'
      },
      {
        name: 'Aklan',
        code: 'PH-AKL'
      },
      {
        name: 'Albay',
        code: 'PH-ALB'
      },
      {
        name: 'Antique',
        code: 'PH-ANT'
      },
      {
        name: 'Apayao',
        code: 'PH-APA'
      },
      {
        name: 'Aurora',
        code: 'PH-AUR'
      },
      {
        name: 'Basilan',
        code: 'PH-BAS'
      },
      {
        name: 'Bataan',
        code: 'PH-BAN'
      },
      {
        name: 'Batanes',
        code: 'PH-BTN'
      },
      {
        name: 'Batangas',
        code: 'PH-BTG'
      },
      {
        name: 'Benguet',
        code: 'PH-BEN'
      },
      {
        name: 'Biliran',
        code: 'PH-BIL'
      },
      {
        name: 'Bohol',
        code: 'PH-BOH'
      },
      {
        name: 'Bukidnon',
        code: 'PH-BUK'
      },
      {
        name: 'Bulacan',
        code: 'PH-BUL'
      },
      {
        name: 'Cagayan',
        code: 'PH-CAG'
      },
      {
        name: 'Camarines Norte',
        code: 'PH-CAN'
      },
      {
        name: 'Camarines Sur',
        code: 'PH-CAS'
      },
      {
        name: 'Camiguin',
        code: 'PH-CAM'
      },
      {
        name: 'Capiz',
        code: 'PH-CAP'
      },
      {
        name: 'Catanduanes',
        code: 'PH-CAT'
      },
      {
        name: 'Cavite',
        code: 'PH-CAV'
      },
      {
        name: 'Cebu',
        code: 'PH-CEB'
      },
      {
        name: 'Cotabato',
        code: 'PH-NCO'
      },
      {
        name: 'Davao de Oro',
        code: 'PH-COM'
      },
      {
        name: 'Davao del Norte',
        code: 'PH-DAV'
      },
      {
        name: 'Davao del Sur',
        code: 'PH-DAS'
      },
      {
        name: 'Davao Occidental',
        code: 'PH-DVO'
      },
      {
        name: 'Davao Oriental',
        code: 'PH-DAO'
      },
      {
        name: 'Dinagat Islands',
        code: 'PH-DIN'
      },
      {
        name: 'Eastern Samar',
        code: 'PH-EAS'
      },
      {
        name: 'Guimaras',
        code: 'PH-GUI'
      },
      {
        name: 'Ifugao',
        code: 'PH-IFU'
      },
      {
        name: 'Ilocos Norte',
        code: 'PH-ILN'
      },
      {
        name: 'Ilocos Sur',
        code: 'PH-ILS'
      },
      {
        name: 'Iloilo',
        code: 'PH-ILI'
      },
      {
        name: 'Isabela',
        code: 'PH-ISA'
      },
      {
        name: 'Kalinga',
        code: 'PH-KAL'
      },
      {
        name: 'La Union',
        code: 'PH-LUN'
      },
      {
        name: 'Laguna',
        code: 'PH-LAG'
      },
      {
        name: 'Lanao del Norte',
        code: 'PH-LAN'
      },
      {
        name: 'Lanao del Sur',
        code: 'PH-LAS'
      },
      {
        name: 'Leyte',
        code: 'PH-LEY'
      },
      {
        name: 'Maguindanao',
        code: 'PH-MAG'
      },
      {
        name: 'Marinduque',
        code: 'PH-MAD'
      },
      {
        name: 'Masbate',
        code: 'PH-MAS'
      },
      {
        name: 'Metro Manila',
        code: 'PH-00'
      },
      {
        name: 'Misamis Occidental',
        code: 'PH-MSC'
      },
      {
        name: 'Misamis Oriental',
        code: 'PH-MSR'
      },
      {
        name: 'Mountain Province',
        code: 'PH-MOU'
      },
      {
        name: 'Negros Occidental',
        code: 'PH-NEC'
      },
      {
        name: 'Negros Oriental',
        code: 'PH-NER'
      },
      {
        name: 'Northern Samar',
        code: 'PH-NSA'
      },
      {
        name: 'Nueva Ecija',
        code: 'PH-NUE'
      },
      {
        name: 'Nueva Vizcaya',
        code: 'PH-NUV'
      },
      {
        name: 'Occidental Mindoro',
        code: 'PH-MDC'
      },
      {
        name: 'Oriental Mindoro',
        code: 'PH-MDR'
      },
      {
        name: 'Palawan',
        code: 'PH-PLW'
      },
      {
        name: 'Pampanga',
        code: 'PH-PAM'
      },
      {
        name: 'Pangasinan',
        code: 'PH-PAN'
      },
      {
        name: 'Quezon',
        code: 'PH-QUE'
      },
      {
        name: 'Quirino',
        code: 'PH-QUI'
      },
      {
        name: 'Rizal',
        code: 'PH-RIZ'
      },
      {
        name: 'Romblon',
        code: 'PH-ROM'
      },
      {
        name: 'Samar',
        code: 'PH-WSA'
      },
      {
        name: 'Sarangani',
        code: 'PH-SAR'
      },
      {
        name: 'Siquijor',
        code: 'PH-SIG'
      },
      {
        name: 'Sorsogon',
        code: 'PH-SOR'
      },
      {
        name: 'South Cotabato',
        code: 'PH-SCO'
      },
      {
        name: 'Southern Leyte',
        code: 'PH-SLE'
      },
      {
        name: 'Sultan Kudarat',
        code: 'PH-SUK'
      },
      {
        name: 'Sulu',
        code: 'PH-SLU'
      },
      {
        name: 'Surigao del Norte',
        code: 'PH-SUN'
      },
      {
        name: 'Surigao del Sur',
        code: 'PH-SUR'
      },
      {
        name: 'Tarlac',
        code: 'PH-TAR'
      },
      {
        name: 'Tawi-Tawi',
        code: 'PH-TAW'
      },
      {
        name: 'Zambales',
        code: 'PH-ZMB'
      },
      {
        name: 'Zamboanga del Norte',
        code: 'PH-ZAN'
      },
      {
        name: 'Zamboanga del Sur',
        code: 'PH-ZAS'
      },
      {
        name: 'Zamboanga Sibugay',
        code: 'PH-ZSI'
      }
    ]
  },
  {
    id: 'PK',
    alpha2: 'PK',
    alpha3: 'PAK',
    countryCallingCodes: ['92'],
    currencies: ['PKR'],
    name: 'Pakistan'
  },
  {
    id: 'PL',
    alpha2: 'PL',
    alpha3: 'POL',
    countryCallingCodes: ['48'],
    currencies: ['PLN'],
    name: 'Poland'
  },
  {
    id: 'PM',
    alpha2: 'PM',
    alpha3: 'SPM',
    countryCallingCodes: ['508'],
    currencies: ['EUR'],
    name: 'Saint Pierre And Miquelon'
  },
  {
    id: 'PR',
    alpha2: 'PR',
    alpha3: 'PRI',
    countryCallingCodes: ['1939'],
    currencies: ['USD'],
    name: 'Puerto Rico'
  },
  {
    id: 'PS',
    alpha2: 'PS',
    alpha3: 'PSE',
    countryCallingCodes: ['970'],
    currencies: ['JOD', 'EGP', 'ILS'],
    name: 'Palestinian Territory, Occupied'
  },
  {
    id: 'PT',
    alpha2: 'PT',
    alpha3: 'PRT',
    countryCallingCodes: ['351'],
    currencies: ['EUR'],
    name: 'Portugal',
    provinces: [
      {
        name: 'Açores',
        code: 'PT-20'
      },
      {
        name: 'Aveiro',
        code: 'PT-01'
      },
      {
        name: 'Beja',
        code: 'PT-02'
      },
      {
        name: 'Braga',
        code: 'PT-03'
      },
      {
        name: 'Bragança',
        code: 'PT-04'
      },
      {
        name: 'Castelo Branco',
        code: 'PT-05'
      },
      {
        name: 'Coimbra',
        code: 'PT-06'
      },
      {
        name: 'Évora',
        code: 'PT-07'
      },
      {
        name: 'Faro',
        code: 'PT-08'
      },
      {
        name: 'Guarda',
        code: 'PT-09'
      },
      {
        name: 'Leiria',
        code: 'PT-10'
      },
      {
        name: 'Lisboa',
        code: 'PT-11'
      },
      {
        name: 'Madeira',
        code: 'PT-30'
      },
      {
        name: 'Portalegre',
        code: 'PT-12'
      },
      {
        name: 'Porto',
        code: 'PT-13'
      },
      {
        name: 'Santarém',
        code: 'PT-14'
      },
      {
        name: 'Setúbal',
        code: 'PT-15'
      },
      {
        name: 'Viana do Castelo',
        code: 'PT-16'
      },
      {
        name: 'Vila Real',
        code: 'PT-17'
      },
      {
        name: 'Viseu',
        code: 'PT-18'
      }
    ]
  },
  {
    id: 'PW',
    alpha2: 'PW',
    alpha3: 'PLW',
    countryCallingCodes: ['680'],
    currencies: ['USD'],
    name: 'Palau'
  },
  {
    id: 'PY',
    alpha2: 'PY',
    alpha3: 'PRY',
    countryCallingCodes: ['595'],
    currencies: ['PYG'],
    name: 'Paraguay'
  },
  {
    id: 'QA',
    alpha2: 'QA',
    alpha3: 'QAT',
    countryCallingCodes: ['974'],
    currencies: ['QAR'],
    name: 'Qatar'
  },
  {
    id: 'RE',
    alpha2: 'RE',
    alpha3: 'REU',
    countryCallingCodes: ['262'],
    currencies: ['EUR'],
    name: 'Reunion'
  },
  {
    id: 'RO',
    alpha2: 'RO',
    alpha3: 'ROU',
    countryCallingCodes: ['40'],
    currencies: ['RON'],
    name: 'Romania',
    provinces: [
      {
        name: 'Alba',
        code: 'AB'
      },
      {
        name: 'Arad',
        code: 'AR'
      },
      {
        name: 'Argeș',
        code: 'AG'
      },
      {
        name: 'Bacău',
        code: 'BC'
      },
      {
        name: 'Bihor',
        code: 'BH'
      },
      {
        name: 'Bistrița-Năsăud',
        code: 'BN'
      },
      {
        name: 'Botoșani',
        code: 'BT'
      },
      {
        name: 'Brăila',
        code: 'BR'
      },
      {
        name: 'Brașov',
        code: 'BV'
      },
      {
        name: 'București',
        code: 'B'
      },
      {
        name: 'Buzău',
        code: 'BZ'
      },
      {
        name: 'Călărași',
        code: 'CL'
      },
      {
        name: 'Caraș-Severin',
        code: 'CS'
      },
      {
        name: 'Cluj',
        code: 'CJ'
      },
      {
        name: 'Constanța',
        code: 'CT'
      },
      {
        name: 'Covasna',
        code: 'CV'
      },
      {
        name: 'Dâmbovița',
        code: 'DB'
      },
      {
        name: 'Dolj',
        code: 'DJ'
      },
      {
        name: 'Galați',
        code: 'GL'
      },
      {
        name: 'Giurgiu',
        code: 'GR'
      },
      {
        name: 'Gorj',
        code: 'GJ'
      },
      {
        name: 'Harghita',
        code: 'HR'
      },
      {
        name: 'Hunedoara',
        code: 'HD'
      },
      {
        name: 'Ialomița',
        code: 'IL'
      },
      {
        name: 'Iași',
        code: 'IS'
      },
      {
        name: 'Ilfov',
        code: 'IF'
      },
      {
        name: 'Maramureș',
        code: 'MM'
      },
      {
        name: 'Mehedinți',
        code: 'MH'
      },
      {
        name: 'Mureș',
        code: 'MS'
      },
      {
        name: 'Neamț',
        code: 'NT'
      },
      {
        name: 'Olt',
        code: 'OT'
      },
      {
        name: 'Prahova',
        code: 'PH'
      },
      {
        name: 'Sălaj',
        code: 'SJ'
      },
      {
        name: 'Satu Mare',
        code: 'SM'
      },
      {
        name: 'Sibiu',
        code: 'SB'
      },
      {
        name: 'Suceava',
        code: 'SV'
      },
      {
        name: 'Teleorman',
        code: 'TR'
      },
      {
        name: 'Timiș',
        code: 'TM'
      },
      {
        name: 'Tulcea',
        code: 'TL'
      },
      {
        name: 'Vâlcea',
        code: 'VL'
      },
      {
        name: 'Vaslui',
        code: 'VS'
      },
      {
        name: 'Vrancea',
        code: 'VN'
      }
    ]
  },
  {
    id: 'RS',
    alpha2: 'RS',
    alpha3: 'SRB',
    countryCallingCodes: ['381'],
    currencies: ['RSD'],
    name: 'Serbia'
  },
  {
    id: 'RU',
    alpha2: 'RU',
    alpha3: 'RUS',
    countryCallingCodes: ['7'],
    currencies: ['RUB'],
    name: 'Russian Federation',
    provinces: [
      {
        name: 'Altai Krai',
        code: 'ALT'
      },
      {
        name: 'Altai Republic',
        code: 'AL'
      },
      {
        name: 'Amur Oblast',
        code: 'AMU'
      },
      {
        name: 'Arkhangelsk Oblast',
        code: 'ARK'
      },
      {
        name: 'Astrakhan Oblast',
        code: 'AST'
      },
      {
        name: 'Belgorod Oblast',
        code: 'BEL'
      },
      {
        name: 'Bryansk Oblast',
        code: 'BRY'
      },
      {
        name: 'Chechen Republic',
        code: 'CE'
      },
      {
        name: 'Chelyabinsk Oblast',
        code: 'CHE'
      },
      {
        name: 'Chukotka Autonomous Okrug',
        code: 'CHU'
      },
      {
        name: 'Chuvash Republic',
        code: 'CU'
      },
      {
        name: 'Irkutsk Oblast',
        code: 'IRK'
      },
      {
        name: 'Ivanovo Oblast',
        code: 'IVA'
      },
      {
        name: 'Jewish Autonomous Oblast',
        code: 'YEV'
      },
      {
        name: 'Kabardino-Balkarian Republic',
        code: 'KB'
      },
      {
        name: 'Kaliningrad Oblast',
        code: 'KGD'
      },
      {
        name: 'Kaluga Oblast',
        code: 'KLU'
      },
      {
        name: 'Kamchatka Krai',
        code: 'KAM'
      },
      {
        name: 'Karachay–Cherkess Republic',
        code: 'KC'
      },
      {
        name: 'Kemerovo Oblast',
        code: 'KEM'
      },
      {
        name: 'Khabarovsk Krai',
        code: 'KHA'
      },
      {
        name: 'Khanty-Mansi Autonomous Okrug',
        code: 'KHM'
      },
      {
        name: 'Kirov Oblast',
        code: 'KIR'
      },
      {
        name: 'Komi Republic',
        code: 'KO'
      },
      {
        name: 'Kostroma Oblast',
        code: 'KOS'
      },
      {
        name: 'Krasnodar Krai',
        code: 'KDA'
      },
      {
        name: 'Krasnoyarsk Krai',
        code: 'KYA'
      },
      {
        name: 'Kurgan Oblast',
        code: 'KGN'
      },
      {
        name: 'Kursk Oblast',
        code: 'KRS'
      },
      {
        name: 'Leningrad Oblast',
        code: 'LEN'
      },
      {
        name: 'Lipetsk Oblast',
        code: 'LIP'
      },
      {
        name: 'Magadan Oblast',
        code: 'MAG'
      },
      {
        name: 'Mari El Republic',
        code: 'ME'
      },
      {
        name: 'Moscow',
        code: 'MOW'
      },
      {
        name: 'Moscow Oblast',
        code: 'MOS'
      },
      {
        name: 'Murmansk Oblast',
        code: 'MUR'
      },
      {
        name: 'Nizhny Novgorod Oblast',
        code: 'NIZ'
      },
      {
        name: 'Novgorod Oblast',
        code: 'NGR'
      },
      {
        name: 'Novosibirsk Oblast',
        code: 'NVS'
      },
      {
        name: 'Omsk Oblast',
        code: 'OMS'
      },
      {
        name: 'Orenburg Oblast',
        code: 'ORE'
      },
      {
        name: 'Oryol Oblast',
        code: 'ORL'
      },
      {
        name: 'Penza Oblast',
        code: 'PNZ'
      },
      {
        name: 'Perm Krai',
        code: 'PER'
      },
      {
        name: 'Primorsky Krai',
        code: 'PRI'
      },
      {
        name: 'Pskov Oblast',
        code: 'PSK'
      },
      {
        name: 'Republic of Adygeya',
        code: 'AD'
      },
      {
        name: 'Republic of Bashkortostan',
        code: 'BA'
      },
      {
        name: 'Republic of Buryatia',
        code: 'BU'
      },
      {
        name: 'Republic of Dagestan',
        code: 'DA'
      },
      {
        name: 'Republic of Ingushetia',
        code: 'IN'
      },
      {
        name: 'Republic of Kalmykia',
        code: 'KL'
      },
      {
        name: 'Republic of Karelia',
        code: 'KR'
      },
      {
        name: 'Republic of Khakassia',
        code: 'KK'
      },
      {
        name: 'Republic of Mordovia',
        code: 'MO'
      },
      {
        name: 'Republic of North Ossetia–Alania',
        code: 'SE'
      },
      {
        name: 'Republic of Tatarstan',
        code: 'TA'
      },
      {
        name: 'Rostov Oblast',
        code: 'ROS'
      },
      {
        name: 'Ryazan Oblast',
        code: 'RYA'
      },
      {
        name: 'Saint Petersburg',
        code: 'SPE'
      },
      {
        name: 'Sakha Republic (Yakutia)',
        code: 'SA'
      },
      {
        name: 'Sakhalin Oblast',
        code: 'SAK'
      },
      {
        name: 'Samara Oblast',
        code: 'SAM'
      },
      {
        name: 'Saratov Oblast',
        code: 'SAR'
      },
      {
        name: 'Smolensk Oblast',
        code: 'SMO'
      },
      {
        name: 'Stavropol Krai',
        code: 'STA'
      },
      {
        name: 'Sverdlovsk Oblast',
        code: 'SVE'
      },
      {
        name: 'Tambov Oblast',
        code: 'TAM'
      },
      {
        name: 'Tomsk Oblast',
        code: 'TOM'
      },
      {
        name: 'Tula Oblast',
        code: 'TUL'
      },
      {
        name: 'Tver Oblast',
        code: 'TVE'
      },
      {
        name: 'Tyumen Oblast',
        code: 'TYU'
      },
      {
        name: 'Tyva Republic',
        code: 'TY'
      },
      {
        name: 'Udmurtia',
        code: 'UD'
      },
      {
        name: 'Ulyanovsk Oblast',
        code: 'ULY'
      },
      {
        name: 'Vladimir Oblast',
        code: 'VLA'
      },
      {
        name: 'Volgograd Oblast',
        code: 'VGG'
      },
      {
        name: 'Vologda Oblast',
        code: 'VLG'
      },
      {
        name: 'Voronezh Oblast',
        code: 'VOR'
      },
      {
        name: 'Yamalo-Nenets Autonomous Okrug',
        code: 'YAN'
      },
      {
        name: 'Yaroslavl Oblast',
        code: 'YAR'
      },
      {
        name: 'Zabaykalsky Krai',
        code: 'ZAB'
      }
    ]
  },
  {
    id: 'RW',
    alpha2: 'RW',
    alpha3: 'RWA',
    countryCallingCodes: ['250'],
    currencies: ['RWF'],
    name: 'Rwanda'
  },
  {
    id: 'SA',
    alpha2: 'SA',
    alpha3: 'SAU',
    countryCallingCodes: ['966'],
    currencies: ['SAR'],
    name: 'Saudi Arabia'
  },
  {
    id: 'SB',
    alpha2: 'SB',
    alpha3: 'SLB',
    countryCallingCodes: ['677'],
    currencies: ['SBD'],
    name: 'Solomon Islands'
  },
  {
    id: 'SC',
    alpha2: 'SC',
    alpha3: 'SYC',
    countryCallingCodes: ['248'],
    currencies: ['SCR'],
    name: 'Seychelles'
  },
  {
    id: 'SD',
    alpha2: 'SD',
    alpha3: 'SDN',
    countryCallingCodes: ['249'],
    currencies: ['SDG'],
    name: 'Sudan'
  },
  {
    id: 'SE',
    alpha2: 'SE',
    alpha3: 'SWE',
    countryCallingCodes: ['46'],
    currencies: ['SEK'],
    name: 'Sweden'
  },
  {
    id: 'SG',
    alpha2: 'SG',
    alpha3: 'SGP',
    countryCallingCodes: ['65'],
    currencies: ['SGD'],
    name: 'Singapore'
  },
  {
    id: 'SH',
    alpha2: 'SH',
    alpha3: 'SHN',
    countryCallingCodes: ['290'],
    currencies: ['SHP'],
    name: 'Saint Helena, Ascension And Tristan Da Cunha'
  },
  {
    id: 'SI',
    alpha2: 'SI',
    alpha3: 'SVN',
    countryCallingCodes: ['386'],
    currencies: ['EUR'],
    name: 'Slovenia'
  },
  {
    id: 'SK',
    alpha2: 'SK',
    alpha3: 'SVK',
    countryCallingCodes: ['421'],
    currencies: ['EUR'],
    name: 'Slovakia'
  },
  {
    id: 'SL',
    alpha2: 'SL',
    alpha3: 'SLE',
    countryCallingCodes: ['232'],
    currencies: ['SLL'],
    name: 'Sierra Leone'
  },
  {
    id: 'SM',
    alpha2: 'SM',
    alpha3: 'SMR',
    countryCallingCodes: ['378'],
    currencies: ['EUR'],
    name: 'San Marino'
  },
  {
    id: 'SN',
    alpha2: 'SN',
    alpha3: 'SEN',
    countryCallingCodes: ['221'],
    currencies: ['XOF'],
    name: 'Senegal',
    showOnTop: true
  },
  {
    id: 'SO',
    alpha2: 'SO',
    alpha3: 'SOM',
    countryCallingCodes: ['252'],
    currencies: ['SOS'],
    name: 'Somalia'
  },
  {
    id: 'SR',
    alpha2: 'SR',
    alpha3: 'SUR',
    countryCallingCodes: ['597'],
    currencies: ['SRD'],
    name: 'Suriname'
  },
  {
    id: 'ST',
    alpha2: 'ST',
    alpha3: 'STP',
    countryCallingCodes: ['239'],
    currencies: ['STD'],
    name: 'Sao Tome And Principe'
  },
  {
    id: 'SV',
    alpha2: 'SV',
    alpha3: 'SLV',
    countryCallingCodes: ['503'],
    currencies: ['USD'],
    name: 'El Salvador'
  },
  {
    id: 'SX',
    alpha2: 'SX',
    alpha3: 'SXM',
    countryCallingCodes: ['1 721'],
    currencies: ['ANG'],
    name: 'Sint Maarten'
  },
  {
    id: 'SY',
    alpha2: 'SY',
    alpha3: 'SYR',
    countryCallingCodes: ['963'],
    currencies: ['SYP'],
    name: 'Syrian Arab Republic'
  },
  {
    id: 'SZ',
    alpha2: 'SZ',
    alpha3: 'SWZ',
    countryCallingCodes: ['268'],
    currencies: ['SZL'],
    name: 'Swaziland'
  },
  {
    id: 'TC',
    alpha2: 'TC',
    alpha3: 'TCA',
    countryCallingCodes: ['1649'],
    currencies: ['USD'],
    name: 'Turks And Caicos Islands'
  },
  {
    id: 'TD',
    alpha2: 'TD',
    alpha3: 'TCD',
    countryCallingCodes: ['235'],
    currencies: ['XAF'],
    name: 'Chad'
  },
  {
    id: 'TG',
    alpha2: 'TG',
    alpha3: 'TGO',
    countryCallingCodes: ['228'],
    currencies: ['XOF'],
    name: 'Togo'
  },
  {
    id: 'TH',
    alpha2: 'TH',
    alpha3: 'THA',
    countryCallingCodes: ['66'],
    currencies: ['THB'],
    name: 'Thailand',
    provinces: [
      {
        name: 'Amnat Charoen',
        code: 'TH-37'
      },
      {
        name: 'Ang Thong',
        code: 'TH-15'
      },
      {
        name: 'Bangkok',
        code: 'TH-10'
      },
      {
        name: 'Bueng Kan',
        code: 'TH-38'
      },
      {
        name: 'Buriram',
        code: 'TH-31'
      },
      {
        name: 'Chachoengsao',
        code: 'TH-24'
      },
      {
        name: 'Chai Nat',
        code: 'TH-18'
      },
      {
        name: 'Chaiyaphum',
        code: 'TH-36'
      },
      {
        name: 'Chanthaburi',
        code: 'TH-22'
      },
      {
        name: 'Chiang Mai',
        code: 'TH-50'
      },
      {
        name: 'Chiang Rai',
        code: 'TH-57'
      },
      {
        name: 'Chon Buri',
        code: 'TH-20'
      },
      {
        name: 'Chumphon',
        code: 'TH-86'
      },
      {
        name: 'Kalasin',
        code: 'TH-46'
      },
      {
        name: 'Kamphaeng Phet',
        code: 'TH-62'
      },
      {
        name: 'Kanchanaburi',
        code: 'TH-71'
      },
      {
        name: 'Khon Kaen',
        code: 'TH-40'
      },
      {
        name: 'Krabi',
        code: 'TH-81'
      },
      {
        name: 'Lampang',
        code: 'TH-52'
      },
      {
        name: 'Lamphun',
        code: 'TH-51'
      },
      {
        name: 'Loei',
        code: 'TH-42'
      },
      {
        name: 'Lopburi',
        code: 'TH-16'
      },
      {
        name: 'Mae Hong Son',
        code: 'TH-58'
      },
      {
        name: 'Maha Sarakham',
        code: 'TH-44'
      },
      {
        name: 'Mukdahan',
        code: 'TH-49'
      },
      {
        name: 'Nakhon Nayok',
        code: 'TH-26'
      },
      {
        name: 'Nakhon Pathom',
        code: 'TH-73'
      },
      {
        name: 'Nakhon Phanom',
        code: 'TH-48'
      },
      {
        name: 'Nakhon Ratchasima',
        code: 'TH-30'
      },
      {
        name: 'Nakhon Sawan',
        code: 'TH-60'
      },
      {
        name: 'Nakhon Si Thammarat',
        code: 'TH-80'
      },
      {
        name: 'Nan',
        code: 'TH-55'
      },
      {
        name: 'Narathiwat',
        code: 'TH-96'
      },
      {
        name: 'Nong Bua Lam Phu',
        code: 'TH-39'
      },
      {
        name: 'Nong Khai',
        code: 'TH-43'
      },
      {
        name: 'Nonthaburi',
        code: 'TH-12'
      },
      {
        name: 'Pathum Thani',
        code: 'TH-13'
      },
      {
        name: 'Pattani',
        code: 'TH-94'
      },
      {
        name: 'Pattaya',
        code: 'TH-S'
      },
      {
        name: 'Phangnga',
        code: 'TH-82'
      },
      {
        name: 'Phatthalung',
        code: 'TH-93'
      },
      {
        name: 'Phayao',
        code: 'TH-56'
      },
      {
        name: 'Phetchabun',
        code: 'TH-67'
      },
      {
        name: 'Phetchaburi',
        code: 'TH-76'
      },
      {
        name: 'Phichit',
        code: 'TH-66'
      },
      {
        name: 'Phitsanulok',
        code: 'TH-65'
      },
      {
        name: 'Phra Nakhon Si Ayutthaya',
        code: 'TH-14'
      },
      {
        name: 'Phrae',
        code: 'TH-54'
      },
      {
        name: 'Phuket',
        code: 'TH-83'
      },
      {
        name: 'Prachin Buri',
        code: 'TH-25'
      },
      {
        name: 'Prachuap Khiri Khan',
        code: 'TH-77'
      },
      {
        name: 'Ranong',
        code: 'TH-85'
      },
      {
        name: 'Ratchaburi',
        code: 'TH-70'
      },
      {
        name: 'Rayong',
        code: 'TH-21'
      },
      {
        name: 'Roi Et',
        code: 'TH-45'
      },
      {
        name: 'Sa Kaeo',
        code: 'TH-27'
      },
      {
        name: 'Sakon Nakhon',
        code: 'TH-47'
      },
      {
        name: 'Samut Prakan',
        code: 'TH-11'
      },
      {
        name: 'Samut Sakhon',
        code: 'TH-74'
      },
      {
        name: 'Samut Songkhram',
        code: 'TH-75'
      },
      {
        name: 'Saraburi',
        code: 'TH-19'
      },
      {
        name: 'Satun',
        code: 'TH-91'
      },
      {
        name: 'Sing Buri',
        code: 'TH-17'
      },
      {
        name: 'Sisaket',
        code: 'TH-33'
      },
      {
        name: 'Songkhla',
        code: 'TH-90'
      },
      {
        name: 'Sukhothai',
        code: 'TH-64'
      },
      {
        name: 'Suphan Buri',
        code: 'TH-72'
      },
      {
        name: 'Surat Thani',
        code: 'TH-84'
      },
      {
        name: 'Surin',
        code: 'TH-32'
      },
      {
        name: 'Tak',
        code: 'TH-63'
      },
      {
        name: 'Trang',
        code: 'TH-92'
      },
      {
        name: 'Trat',
        code: 'TH-23'
      },
      {
        name: 'Ubon Ratchathani',
        code: 'TH-34'
      },
      {
        name: 'Udon Thani',
        code: 'TH-41'
      },
      {
        name: 'Uthai Thani',
        code: 'TH-61'
      },
      {
        name: 'Uttaradit',
        code: 'TH-53'
      },
      {
        name: 'Yala',
        code: 'TH-95'
      },
      {
        name: 'Yasothon',
        code: 'TH-35'
      }
    ]
  },
  {
    id: 'TJ',
    alpha2: 'TJ',
    alpha3: 'TJK',
    countryCallingCodes: ['992'],
    currencies: ['TJS'],
    name: 'Tajikistan'
  },
  {
    id: 'TK',
    alpha2: 'TK',
    alpha3: 'TKL',
    countryCallingCodes: ['690'],
    currencies: ['NZD'],
    name: 'Tokelau'
  },
  {
    id: 'TL',
    alpha2: 'TL',
    alpha3: 'TLS',
    countryCallingCodes: ['670'],
    currencies: ['USD'],
    name: 'East Timor'
  },
  {
    id: 'TM',
    alpha2: 'TM',
    alpha3: 'TKM',
    countryCallingCodes: ['993'],
    currencies: ['TMT'],
    name: 'Turkmenistan'
  },
  {
    id: 'TN',
    alpha2: 'TN',
    alpha3: 'TUN',
    countryCallingCodes: ['216'],
    currencies: ['TND'],
    name: 'Tunisia'
  },
  {
    id: 'TO',
    alpha2: 'TO',
    alpha3: 'TON',
    countryCallingCodes: ['676'],
    currencies: ['TOP'],
    name: 'Tonga'
  },
  {
    id: 'TR',
    alpha2: 'TR',
    alpha3: 'TUR',
    countryCallingCodes: ['90'],
    currencies: ['TRY'],
    name: 'Turkey'
  },
  {
    id: 'TT',
    alpha2: 'TT',
    alpha3: 'TTO',
    countryCallingCodes: ['1868'],
    currencies: ['TTD'],
    name: 'Trinidad And Tobago'
  },
  {
    id: 'TV',
    alpha2: 'TV',
    alpha3: 'TUV',
    countryCallingCodes: ['688'],
    currencies: ['AUD'],
    name: 'Tuvalu'
  },
  {
    id: 'TW',
    alpha2: 'TW',
    alpha3: 'TWN',
    countryCallingCodes: ['886'],
    currencies: ['TWD'],
    name: 'Taiwan, Province Of China'
  },
  {
    id: 'TZ',
    alpha2: 'TZ',
    alpha3: 'TZA',
    countryCallingCodes: ['255'],
    currencies: ['TZS'],
    name: 'Tanzania, United Republic Of'
  },
  {
    id: 'UA',
    alpha2: 'UA',
    alpha3: 'UKR',
    countryCallingCodes: ['380'],
    currencies: ['UAH'],
    name: 'Ukraine'
  },
  {
    id: 'UG',
    alpha2: 'UG',
    alpha3: 'UGA',
    countryCallingCodes: ['256'],
    currencies: ['UGX'],
    name: 'Uganda'
  },
  {
    id: 'UY',
    alpha2: 'UY',
    alpha3: 'URY',
    countryCallingCodes: ['598'],
    currencies: ['UYU', 'UYI'],
    name: 'Uruguay'
  },
  {
    id: 'UZ',
    alpha2: 'UZ',
    alpha3: 'UZB',
    countryCallingCodes: ['998'],
    currencies: ['UZS'],
    name: 'Uzbekistan'
  },
  {
    id: 'VA',
    alpha2: 'VA',
    alpha3: 'VAT',
    countryCallingCodes: ['379'],
    currencies: ['EUR'],
    name: 'Vatican City State'
  },
  {
    id: 'VC',
    alpha2: 'VC',
    alpha3: 'VCT',
    countryCallingCodes: ['1784'],
    currencies: ['XCD'],
    name: 'Saint Vincent And The Grenadines'
  },
  {
    id: 'VE',
    alpha2: 'VE',
    alpha3: 'VEN',
    countryCallingCodes: ['58'],
    currencies: ['VEF'],
    name: 'Venezuela, Bolivarian Republic Of'
  },
  {
    id: 'VG',
    alpha2: 'VG',
    alpha3: 'VGB',
    countryCallingCodes: ['1284'],
    currencies: ['USD'],
    name: 'Virgin Islands (British)'
  },
  {
    id: 'VI',
    alpha2: 'VI',
    alpha3: 'VIR',
    countryCallingCodes: ['1340'],
    currencies: ['USD'],
    name: 'Virgin Islands (US)'
  },
  {
    id: 'VN',
    alpha2: 'VN',
    alpha3: 'VNM',
    countryCallingCodes: ['84'],
    currencies: ['VND'],
    name: 'Viet Nam'
  },
  {
    id: 'VU',
    alpha2: 'VU',
    alpha3: 'VUT',
    countryCallingCodes: ['678'],
    currencies: ['VUV'],
    name: 'Vanuatu'
  },
  {
    id: 'WF',
    alpha2: 'WF',
    alpha3: 'WLF',
    countryCallingCodes: ['681'],
    currencies: ['XPF'],
    name: 'Wallis And Futuna'
  },
  {
    id: 'WS',
    alpha2: 'WS',
    alpha3: 'WSM',
    countryCallingCodes: ['685'],
    currencies: ['WST'],
    name: 'Samoa'
  },
  {
    id: 'YE',
    alpha2: 'YE',
    alpha3: 'YEM',
    countryCallingCodes: ['967'],
    currencies: ['YER'],
    name: 'Yemen'
  },
  {
    id: 'YT',
    alpha2: 'YT',
    alpha3: 'MYT',
    countryCallingCodes: ['262'],
    currencies: ['EUR'],
    name: 'Mayotte'
  },
  {
    id: 'ZA',
    alpha2: 'ZA',
    alpha3: 'ZAF',
    countryCallingCodes: ['27'],
    currencies: ['ZAR'],
    name: 'South Africa',
    provinces: [
      {
        name: 'Eastern Cape',
        code: 'EC'
      },
      {
        name: 'Free State',
        code: 'FS'
      },
      {
        name: 'Gauteng',
        code: 'GT'
      },
      {
        name: 'KwaZulu-Natal',
        code: 'NL'
      },
      {
        name: 'Limpopo',
        code: 'LP'
      },
      {
        name: 'Mpumalanga',
        code: 'MP'
      },
      {
        name: 'North West',
        code: 'NW'
      },
      {
        name: 'Northern Cape',
        code: 'NC'
      },
      {
        name: 'Western Cape',
        code: 'WC'
      }
    ]
  },
  {
    id: 'ZM',
    alpha2: 'ZM',
    alpha3: 'ZMB',
    countryCallingCodes: ['260'],
    currencies: ['ZMW'],
    name: 'Zambia'
  },
  {
    id: 'ZW',
    alpha2: 'ZW',
    alpha3: 'ZWE',
    countryCallingCodes: ['263'],
    currencies: ['USD', 'ZAR', 'BWP', 'GBP', 'EUR'],
    name: 'Zimbabwe'
  }
];
