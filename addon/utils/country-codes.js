export type CountryData = {
  id: string;
  name: string;
  alpha2: string;
  alpha3: string;
  countryCallingCodes: string[];
  showOnTop: true;
};

export const countries: CountryData[] = [
  {
    id: 'US',
    alpha2: 'US',
    alpha3: 'USA',
    countryCallingCodes: ['1'],
    currencies: ['USD'],
    name: 'United States',
    showOnTop: true
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
    countryCallingCodes: ['1 473'],
    currencies: ['GBP'],
    name: 'United Kingdom',
    showOnTop: true
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
    name: 'United Arab Emirates'
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
    countryCallingCodes: ['1 268'],
    currencies: ['XCD'],
    name: 'Antigua And Barbuda'
  },
  {
    id: 'AI',
    alpha2: 'AI',
    alpha3: 'AIA',
    countryCallingCodes: ['1 264'],
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
    name: 'Argentina'
  },
  {
    id: 'AS',
    alpha2: 'AS',
    alpha3: 'ASM',
    countryCallingCodes: ['1 684'],
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
    name: 'Australia'
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
    countryCallingCodes: ['1 246'],
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
    countryCallingCodes: ['1 441'],
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
    name: 'Brazil'
  },
  {
    id: 'BS',
    alpha2: 'BS',
    alpha3: 'BHS',
    countryCallingCodes: ['1 242'],
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
    name: 'Canada'
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
    name: 'Chile'
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
    name: 'China'
  },
  {
    id: 'CO',
    alpha2: 'CO',
    alpha3: 'COL',
    countryCallingCodes: ['57'],
    currencies: ['COP', 'COU'],
    name: 'Colombia'
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
    countryCallingCodes: ['1 767'],
    currencies: ['XCD'],
    name: 'Dominica'
  },
  {
    id: 'DO',
    alpha2: 'DO',
    alpha3: 'DOM',
    countryCallingCodes: ['1 809', '1 829', '1 849'],
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
    name: 'Egypt'
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
    name: 'Spain'
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
    countryCallingCodes: ['44'],
    currencies: ['XAF'],
    name: 'Gabon'
  },
  {
    id: 'GD',
    alpha2: 'GD',
    alpha3: 'GRD',
    countryCallingCodes: ['995'],
    currencies: ['XCD'],
    name: 'Grenada'
  },
  {
    id: 'GE',
    alpha2: 'GE',
    alpha3: 'GEO',
    countryCallingCodes: ['594'],
    currencies: ['GEL'],
    name: 'Georgia'
  },
  {
    id: 'GF',
    alpha2: 'GF',
    alpha3: 'GUF',
    countryCallingCodes: ['44'],
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
    name: 'Guatemala'
  },
  {
    id: 'GU',
    alpha2: 'GU',
    alpha3: 'GUM',
    countryCallingCodes: ['1 671'],
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
    countryCallingCodes: ['592'],
    currencies: ['GYD'],
    name: 'Guyana'
  },
  {
    id: 'HK',
    alpha2: 'HK',
    alpha3: 'HKG',
    countryCallingCodes: ['852'],
    currencies: ['HKD'],
    name: 'Hong Kong'
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
    alpha3: 'IDN',
    currencies: ['IDR'],
    countryCallingCodes: ['62'],
    name: 'Indonesia'
  },
  {
    id: 'IE',
    alpha2: 'IE',
    alpha3: 'IRL',
    countryCallingCodes: ['353'],
    currencies: ['EUR'],
    name: 'Ireland'
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
    name: 'India'
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
    name: 'Italy'
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
    countryCallingCodes: ['1 876'],
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
    name: 'Japan'
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
    countryCallingCodes: ['1 869'],
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
    name: 'Korea, Republic Of'
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
    countryCallingCodes: ['1 345'],
    currencies: ['KYD'],
    name: 'Cayman Islands'
  },
  {
    id: 'KZ',
    alpha2: 'KZ',
    alpha3: 'KAZ',
    countryCallingCodes: ['7', '7 6', '7 7'],
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
    countryCallingCodes: ['1 758'],
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
    countryCallingCodes: ['1 670'],
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
    countryCallingCodes: ['1 664'],
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
    name: 'Mexico'
  },
  {
    id: 'MY',
    alpha2: 'MY',
    alpha3: 'MYS',
    countryCallingCodes: ['60'],
    currencies: ['MYR'],
    name: 'Malaysia'
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
    name: 'Nigeria'
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
    name: 'New Zealand'
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
    name: 'Panama'
  },
  {
    id: 'PE',
    alpha2: 'PE',
    alpha3: 'PER',
    countryCallingCodes: ['51'],
    currencies: ['PEN'],
    name: 'Peru'
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
    name: 'Philippines'
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
    countryCallingCodes: ['1 787', '1 939'],
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
    name: 'Portugal'
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
    name: 'Romania'
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
    countryCallingCodes: ['7', '7 3', '7 4', '7 8'],
    currencies: ['RUB'],
    name: 'Russian Federation'
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
    countryCallingCodes: ['1 649'],
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
    name: 'Thailand'
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
    countryCallingCodes: ['1 868'],
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
    countryCallingCodes: ['379', '39'],
    currencies: ['EUR'],
    name: 'Vatican City State'
  },
  {
    id: 'VC',
    alpha2: 'VC',
    alpha3: 'VCT',
    countryCallingCodes: ['1 784'],
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
    countryCallingCodes: ['1 284'],
    currencies: ['USD'],
    name: 'Virgin Islands (British)'
  },
  {
    id: 'VI',
    alpha2: 'VI',
    alpha3: 'VIR',
    countryCallingCodes: ['1 340'],
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
    name: 'South Africa'
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
] as const;
