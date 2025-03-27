const { faker } = require('@faker-js/faker/locale/fr'); 
const { Client } = require('pg');

require('dotenv').config();

const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
async function generateMockData() {
  try {
    await client.connect();
    console.log('Insertion des devises...');
    const allCurrencies = [
        { code: 'AED', name: 'Dirham des Émirats arabes unis', symbol: 'د.إ' },
        { code: 'AFN', name: 'Afghani afghan', symbol: '؋' },
        { code: 'ALL', name: 'Lek albanais', symbol: 'L' },
        { code: 'AMD', name: 'Dram arménien', symbol: '֏' },
        { code: 'ANG', name: 'Florin des Antilles néerlandaises', symbol: 'ƒ' },
        { code: 'AOA', name: 'Kwanza angolais', symbol: 'Kz' },
        { code: 'ARS', name: 'Peso argentin', symbol: '$' },
        { code: 'AUD', name: 'Dollar australien', symbol: 'A$' },
        { code: 'AWG', name: 'Florin arubais', symbol: 'ƒ' },
        { code: 'AZN', name: 'Manat azerbaïdjanais', symbol: '₼' },
        { code: 'BAM', name: 'Mark convertible de Bosnie-Herzégovine', symbol: 'KM' },
        { code: 'BBD', name: 'Dollar barbadien', symbol: '$' },
        { code: 'BDT', name: 'Taka bangladais', symbol: '৳' },
        { code: 'BGN', name: 'Lev bulgare', symbol: 'лв' },
        { code: 'BHD', name: 'Dinar bahreïni', symbol: '.د.ب' },
        { code: 'BIF', name: 'Franc burundais', symbol: 'FBu' },
        { code: 'BMD', name: 'Dollar bermudien', symbol: '$' },
        { code: 'BND', name: 'Dollar de Brunei', symbol: '$' },
        { code: 'BOB', name: 'Boliviano bolivien', symbol: 'Bs.' },
        { code: 'BRL', name: 'Réal brésilien', symbol: 'R$' },
        { code: 'BSD', name: 'Dollar bahaméen', symbol: '$' },
        { code: 'BTN', name: 'Ngultrum bhoutanais', symbol: 'Nu.' },
        { code: 'BWP', name: 'Pula botswanais', symbol: 'P' },
        { code: 'BYN', name: 'Rouble biélorusse', symbol: 'Br' },
        { code: 'BZD', name: 'Dollar bélizien', symbol: 'BZ$' },
        { code: 'CAD', name: 'Dollar canadien', symbol: 'C$' },
        { code: 'CDF', name: 'Franc congolais', symbol: 'FC' },
        { code: 'CHF', name: 'Franc suisse', symbol: 'CHF' },
        { code: 'CLP', name: 'Peso chilien', symbol: '$' },
        { code: 'CNY', name: 'Yuan chinois', symbol: '¥' },
        { code: 'COP', name: 'Peso colombien', symbol: '$' },
        { code: 'CRC', name: 'Colón costaricien', symbol: '₡' },
        { code: 'CUP', name: 'Peso cubain', symbol: '$' },
        { code: 'CVE', name: 'Escudo cap-verdien', symbol: '$' },
        { code: 'CZK', name: 'Couronne tchèque', symbol: 'Kč' },
        { code: 'DJF', name: 'Franc djiboutien', symbol: 'Fdj' },
        { code: 'DKK', name: 'Couronne danoise', symbol: 'kr' },
        { code: 'DOP', name: 'Peso dominicain', symbol: 'RD$' },
        { code: 'DZD', name: 'Dinar algérien', symbol: 'د.ج' },
        { code: 'EGP', name: 'Livre égyptienne', symbol: '£' },
        { code: 'ERN', name: 'Nakfa érythréen', symbol: 'Nfk' },
        { code: 'ETB', name: 'Birr éthiopien', symbol: 'Br' },
        { code: 'EUR', name: 'Euro', symbol: '€' },
        { code: 'FJD', name: 'Dollar fidjien', symbol: '$' },
        { code: 'FKP', name: 'Livre des îles Falkland', symbol: '£' },
        { code: 'GBP', name: 'Livre sterling', symbol: '£' },
        { code: 'GEL', name: 'Lari géorgien', symbol: '₾' },
        { code: 'GHS', name: 'Cedi ghanéen', symbol: '₵' },
        { code: 'GIP', name: 'Livre de Gibraltar', symbol: '£' },
        { code: 'GMD', name: 'Dalasi gambien', symbol: 'D' },
        { code: 'GNF', name: 'Franc guinéen', symbol: 'FG' },
        { code: 'GTQ', name: 'Quetzal guatémaltèque', symbol: 'Q' },
        { code: 'GYD', name: 'Dollar guyanien', symbol: '$' },
        { code: 'HKD', name: 'Dollar de Hong Kong', symbol: 'HK$' },
        { code: 'HNL', name: 'Lempira hondurien', symbol: 'L' },
        { code: 'HRK', name: 'Kuna croate', symbol: 'kn' },
        { code: 'HTG', name: 'Gourde haïtienne', symbol: 'G' },
        { code: 'HUF', name: 'Forint hongrois', symbol: 'Ft' },
        { code: 'IDR', name: 'Roupie indonésienne', symbol: 'Rp' },
        { code: 'ILS', name: 'Shekel israélien', symbol: '₪' },
        { code: 'INR', name: 'Roupie indienne', symbol: '₹' },
        { code: 'IQD', name: 'Dinar irakien', symbol: 'ع.د' },
        { code: 'IRR', name: 'Rial iranien', symbol: '﷼' },
        { code: 'ISK', name: 'Couronne islandaise', symbol: 'kr' },
        { code: 'JMD', name: 'Dollar jamaïcain', symbol: 'J$' },
        { code: 'JOD', name: 'Dinar jordanien', symbol: 'د.ا' },
        { code: 'JPY', name: 'Yen japonais', symbol: '¥' },
        { code: 'KES', name: 'Shilling kényan', symbol: 'KSh' },
        { code: 'KGS', name: 'Som kirghize', symbol: 'с' },
        { code: 'KHR', name: 'Riel cambodgien', symbol: '៛' },
        { code: 'KMF', name: 'Franc comorien', symbol: 'CF' },
        { code: 'KPW', name: 'Won nord-coréen', symbol: '₩' },
        { code: 'KRW', name: 'Won sud-coréen', symbol: '₩' },
        { code: 'KWD', name: 'Dinar koweïtien', symbol: 'د.ك' },
        { code: 'KYD', name: 'Dollar des îles Caïmans', symbol: '$' },
        { code: 'KZT', name: 'Tenge kazakh', symbol: '₸' },
        { code: 'LAK', name: 'Kip laotien', symbol: '₭' },
        { code: 'LBP', name: 'Livre libanaise', symbol: 'ل.ل' },
        { code: 'LKR', name: 'Roupie srilankaise', symbol: 'Rs' },
        { code: 'LRD', name: 'Dollar libérien', symbol: '$' },
        { code: 'LSL', name: 'Loti lesothan', symbol: 'L' },
        { code: 'LYD', name: 'Dinar libyen', symbol: 'ل.د' },
        { code: 'MAD', name: 'Dirham marocain', symbol: 'MAD' },
        { code: 'MDL', name: 'Leu moldave', symbol: 'L' },
        { code: 'MGA', name: 'Ariary malgache', symbol: 'Ar' },
        { code: 'MKD', name: 'Denar macédonien', symbol: 'ден' },
        { code: 'MMK', name: 'Kyat birman', symbol: 'K' },
        { code: 'MNT', name: 'Tugrik mongol', symbol: '₮' },
        { code: 'MOP', name: 'Pataca de Macao', symbol: 'MOP$' },
        { code: 'MRU', name: 'Ouguiya mauritanien', symbol: 'UM' },
        { code: 'MUR', name: 'Roupie mauricienne', symbol: '₨' },
        { code: 'MVR', name: 'Rufiyaa maldivien', symbol: 'Rf' },
        { code: 'MWK', name: 'Kwacha malawite', symbol: 'MK' },
        { code: 'MXN', name: 'Peso mexicain', symbol: '$' },
        { code: 'MYR', name: 'Ringgit malaisien', symbol: 'RM' },
        { code: 'MZN', name: 'Metical mozambicain', symbol: 'MT' },
        { code: 'NAD', name: 'Dollar namibien', symbol: '$' },
        { code: 'NGN', name: 'Naira nigérian', symbol: '₦' },
        { code: 'NIO', name: 'Córdoba nicaraguayen', symbol: 'C$' },
        { code: 'NOK', name: 'Couronne norvégienne', symbol: 'kr' },
        { code: 'NPR', name: 'Roupie népalaise', symbol: '₨' },
        { code: 'NZD', name: 'Dollar néo-zélandais', symbol: 'NZ$' },
        { code: 'OMR', name: 'Rial omanais', symbol: 'ر.ع.' },
        { code: 'PAB', name: 'Balboa panaméen', symbol: 'B/.' },
        { code: 'PEN', name: 'Sol péruvien', symbol: 'S/' },
        { code: 'PGK', name: 'Kina papou-néo-guinéen', symbol: 'K' },
        { code: 'PHP', name: 'Peso philippin', symbol: '₱' },
        { code: 'PKR', name: 'Roupie pakistanaise', symbol: '₨' },
        { code: 'PLN', name: 'Zloty polonais', symbol: 'zł' },
        { code: 'PYG', name: 'Guarani paraguayen', symbol: '₲' },
        { code: 'QAR', name: 'Riyal qatari', symbol: 'ر.ق' },
        { code: 'RON', name: 'Leu roumain', symbol: 'lei' },
        { code: 'RSD', name: 'Dinar serbe', symbol: 'дин' },
        { code: 'RUB', name: 'Rouble russe', symbol: '₽' },
        { code: 'RWF', name: 'Franc rwandais', symbol: 'FRw' },
        { code: 'SAR', name: 'Riyal saoudien', symbol: 'ر.س' },
        { code: 'SBD', name: 'Dollar des îles Salomon', symbol: '$' },
        { code: 'SCR', name: 'Roupie seychelloise', symbol: '₨' },
        { code: 'SDG', name: 'Livre soudanaise', symbol: 'ج.س.' },
        { code: 'SEK', name: 'Couronne suédoise', symbol: 'kr' },
        { code: 'SGD', name: 'Dollar de Singapour', symbol: 'S$' },
        { code: 'SHP', name: 'Livre de Sainte-Hélène', symbol: '£' },
        { code: 'SLL', name: 'Leone sierra-léonais', symbol: 'Le' },
        { code: 'SOS', name: 'Shilling somalien', symbol: 'Sh' },
        { code: 'SRD', name: 'Dollar surinamais', symbol: '$' },
        { code: 'SSP', name: 'Livre sud-soudanaise', symbol: '£' },
        { code: 'STN', name: 'Dobra de Sao Tomé-et-Principe', symbol: 'Db' },
        { code: 'SVC', name: 'Colón salvadorien', symbol: '$' }, 
        { code: 'SYP', name: 'Livre syrienne', symbol: '£' },
        { code: 'SZL', name: 'Lilangeni swazi', symbol: 'E' },
        { code: 'THB', name: 'Baht thaïlandais', symbol: '฿' },
        { code: 'TJS', name: 'Somoni tadjik', symbol: 'SM' },
        { code: 'TMT', name: 'Manat turkmène', symbol: 'm' },
        { code: 'TND', name: 'Dinar tunisien', symbol: 'د.ت' },
        { code: 'TOP', name: 'Pa’anga tongien', symbol: 'T$' },
        { code: 'TRY', name: 'Livre turque', symbol: '₺' },
        { code: 'TTD', name: 'Dollar de Trinité-et-Tobago', symbol: 'TT$' },
        { code: 'TWD', name: 'Dollar taïwanais', symbol: 'NT$' },
        { code: 'TZS', name: 'Shilling tanzanien', symbol: 'TSh' },
        { code: 'UAH', name: 'Hryvnia ukrainienne', symbol: '₴' },
        { code: 'UGX', name: 'Shilling ougandais', symbol: 'USh' },
        { code: 'USD', name: 'Dollar américain', symbol: '$' },
        { code: 'UYU', name: 'Peso uruguayen', symbol: '$U' },
        { code: 'UZS', name: 'Sum ouzbek', symbol: 'сўм' },
        { code: 'VES', name: 'Bolívar vénézuélien', symbol: 'Bs.' },
        { code: 'VND', name: 'Dong vietnamien', symbol: '₫' },
        { code: 'VUV', name: 'Vatu vanuatuan', symbol: 'VT' },
        { code: 'WST', name: 'Tala samoan', symbol: 'WS$' },
        { code: 'XAF', name: 'Franc CFA BEAC', symbol: 'CFA' },
        { code: 'XCD', name: 'Dollar des Caraïbes orientales', symbol: '$' },
        { code: 'XOF', name: 'Franc CFA BCEAO', symbol: 'CFA' },
        { code: 'XPF', name: 'Franc CFP', symbol: '₣' },
        { code: 'YER', name: 'Rial yéménite', symbol: '﷼' },
        { code: 'ZAR', name: 'Rand sud-africain', symbol: 'R' },
        { code: 'ZMW', name: 'Kwacha zambien', symbol: 'ZK' },
        { code: 'ZWL', name: 'Dollar zimbabwéen', symbol: '$' }
      ];
    for (const currency of allCurrencies) {
      await client.query(
        'INSERT INTO currencies (code, name, symbol) VALUES ($1, $2, $3) ON CONFLICT (code) DO NOTHING',
        [currency.code, currency.name, currency.symbol]
      );
    }
    console.log("success");

    console.log('Génération des utilisateurs...');
    const users = Array.from({ length: 50 }, () => ({
      full_name: faker.person.fullName(),
      username: faker.internet.userName().toLowerCase().replace(/\s/g, '_'),
      email: faker.internet.email().toLowerCase(),
      password_hash: faker.internet.password({ length: 12 }),
      birthdate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
      cin: faker.string.alphanumeric({ length: 10, casing: 'upper' }),
      role: faker.helpers.arrayElement(['manager', 'partner', 'admin']),
      created_at: faker.date.past({ years: 2 }),
    }));

    for (const user of users) {
      await client.query(
        `INSERT INTO users (full_name, username, email, password_hash, birthdate, cin, role, created_at) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        Object.values(user)
      );
    }
    console.log("success");

    console.log('Génération des clients...');
    const clients = Array.from({ length: 50 }, () => ({
      full_name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      cin: faker.string.alphanumeric({ length: 10, casing: 'upper' }),
      occupation: faker.person.jobTitle(),
      phone: faker.phone.number(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
      created_at: faker.date.past({ years: 1 }),
    }));

    for (const clientData of clients) {
      await client.query(
        `INSERT INTO clients (full_name, email, cin, occupation, phone, address, city, country, created_at) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        Object.values(clientData)
      );
    }
    console.log("success");

    console.log('Génération des catégories...');
    const categories = [
      'Technologie', 'Art & Culture', 'Musique', 'Sports', 'Charité', 
      'Éducation', 'Santé', 'Environnement', 'Gastronomie', 'Mode'
    ].map((name, index) => ({
      name,
      description: faker.lorem.sentence(),
      created_at: faker.date.past({ years: 1 }),
    }));

    for (const category of categories) {
      await client.query(
        'INSERT INTO event_categories (name, description, created_at) VALUES ($1, $2, $3)',
        [category.name, category.description, category.created_at]
      );
    }
    console.log("success");

    console.log('Génération des événements...');
    const events = Array.from({ length: 50 }, () => {
      const startDate = faker.date.future({ years: 1 });
      const endDate = faker.date.soon({ days: 7, refDate: startDate });
      
      return {
        title: faker.lorem.words({ min: 3, max: 7 }),
        description: faker.lorem.paragraphs({ min: 2, max: 5 }),
        category_id: faker.number.int({ min: 1, max: categories.length }),
        start_date: startDate,
        end_date: endDate,
        location: `${faker.location.city()}, ${faker.location.country()}`,
        status: faker.helpers.arrayElement(['draft', 'published', 'ongoing', 'completed', 'cancelled']),
        budget: faker.finance.amount({ min: 1000, max: 50000, dec: 2 }),
        currency_id: faker.helpers.arrayElement(allCurrencies.map((_, i) => i + 1)),
        created_by: faker.number.int({ min: 1, max: users.length }),
        created_at: faker.date.past({ years: 1, refDate: startDate }),
        image_url: faker.image.urlLoremFlickr({ category: 'event' }),
      };
    });

    for (const event of events) {
      await client.query(
        `INSERT INTO events (title, description, category_id, start_date, end_date, location, status, 
          budget, currency_id, created_by, created_at, image_url) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        Object.values(event)
      );
    }
    console.log("success");

    console.log('Génération des collaborateurs...');
    const eventCollaborators = Array.from({ length: 50 }, () => ({
      event_id: faker.number.int({ min: 1, max: events.length }),
      user_id: faker.number.int({ min: 1, max: users.length }),
      role: faker.helpers.arrayElement(['organizer', 'partner', 'volunteer', 'sponsor', 'speaker']),
      status: faker.helpers.arrayElement(['pending', 'accepted', 'rejected']),
      joined_at: faker.date.past({ years: 1 }),
      responsibilities: faker.lorem.sentence(),
    }));

    for (const collaborator of eventCollaborators) {
      await client.query(
        `INSERT INTO event_collaborators (event_id, user_id, role, status, joined_at, responsibilities) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        Object.values(collaborator)
      );
    }
    console.log("success");

    console.log('Génération des commentaires...');
    const eventComments = Array.from({ length: 50 }, () => ({
      event_id: faker.number.int({ min: 1, max: events.length }),
      client_id: faker.number.int({ min: 1, max: clients.length }),
      content: faker.lorem.paragraph(),
      created_at: faker.date.past({ years: 1 }),
      rating: faker.number.int({ min: 1, max: 5 }),
    }));

    for (const comment of eventComments) {
      await client.query(
        `INSERT INTO event_comments (event_id, client_id, content, created_at, rating) 
         VALUES ($1, $2, $3, $4, $5)`,
        Object.values(comment)
      );
    }
    console.log("success");

    console.log('Génération des partenaires...');
    const eventPartners = Array.from({ length: 50 }, () => ({
      event_id: faker.number.int({ min: 1, max: events.length }),
      client_id: faker.number.int({ min: 1, max: clients.length }),
      description: faker.company.catchPhrase(),
      offered_help: faker.lorem.paragraph(),
      status: faker.helpers.arrayElement(['pending', 'approved', 'rejected']),
      partnership_date: faker.date.past({ years: 1 }),
      contribution_value: faker.finance.amount({ min: 100, max: 10000, dec: 2 }),
      contribution_currency: faker.helpers.arrayElement(allCurrencies.map(c => c.code)),
    }));

    for (const partner of eventPartners) {
      await client.query(
        `INSERT INTO event_partners (event_id, client_id, description, offered_help, status, 
          partnership_date, contribution_value, contribution_currency) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        Object.values(partner)
      );
    }
    console.log("success");

    console.log('Data mock insert success');
  } catch (error) {
    console.error('Error', error);
  } finally {
    await client.end();
  }
}

generateMockData();