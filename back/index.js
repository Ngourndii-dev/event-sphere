require('dotenv').config();
const { faker } = require('@faker-js/faker');
faker.locale = 'fr';
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
    const allCurrencies = [
      { code: 'AED', name: 'Dirham des Émirats arabes unis', symbol: 'د.إ' },
      { code: 'AFN', name: 'Afghani afghan', symbol: '؋' },
      { code: 'ALL', name: 'Lek albanais', symbol: 'L' },
      { code: 'AMD', name: 'Dram arménien', symbol: '֏' },
      { code: 'ANG', name: 'Florin des Antilles néerlandaises', symbol: 'ƒ' },
      { code: 'AOA', name: 'Kwanza angolais', symbol: 'Kz' },
      { code: 'ARS', name: 'Peso argentin', symbol: '$' },
      { code: 'AUD', name: 'Dollar australien', symbol: '$' },
      { code: 'AWG', name: 'Florin arubais', symbol: 'ƒ' },
      { code: 'AZN', name: 'Manat azerbaïdjanais', symbol: '₼' },
      { code: 'BAM', name: 'Mark convertible de Bosnie-Herzégovine', symbol: 'KM' },
      { code: 'BBD', name: 'Dollar barbadien', symbol: '$' },
      { code: 'BDT', name: 'Taka bangladais', symbol: '৳' },
      { code: 'BGN', name: 'Lev bulgare', symbol: 'лв' },
      { code: 'BHD', name: 'Dinar bahreïni', symbol: '.د.ب' },
      { code: 'BIF', name: 'Franc burundais', symbol: 'FBu' },
      { code: 'BMD', name: 'Dollar bermudien', symbol: '$' },
      { code: 'BND', name: 'Dollar brunéien', symbol: '$' },
      { code: 'BOB', name: 'Boliviano bolivien', symbol: 'Bs' },
      { code: 'BRL', name: 'Real brésilien', symbol: 'R$' },
      { code: 'BSD', name: 'Dollar bahaméen', symbol: '$' },
      { code: 'BTN', name: 'Ngultrum bhoutanais', symbol: 'Nu.' },
      { code: 'BWP', name: 'Pula botswanais', symbol: 'P' },
      { code: 'BYN', name: 'Rouble biélorusse', symbol: 'Br' },
      { code: 'BZD', name: 'Dollar bélizien', symbol: '$' },
      { code: 'CAD', name: 'Dollar canadien', symbol: '$' },
      { code: 'CDF', name: 'Franc congolais', symbol: 'FC' },
      { code: 'CHF', name: 'Franc suisse', symbol: 'CHF' },
      { code: 'CLP', name: 'Peso chilien', symbol: '$' },
      { code: 'CNY', name: 'Yuan chinois', symbol: '¥' },
      { code: 'COP', name: 'Peso colombien', symbol: '$' },
      { code: 'CRC', name: 'Colón costaricain', symbol: '₡' },
      { code: 'CUP', name: 'Peso cubain', symbol: '$' },
      { code: 'CVE', name: 'Escudo cap-verdien', symbol: '$' },
      { code: 'CZK', name: 'Couronne tchèque', symbol: 'Kč' },
      { code: 'DJF', name: 'Franc djiboutien', symbol: 'Fdj' },
      { code: 'DKK', name: 'Couronne danoise', symbol: 'kr' },
      { code: 'DOP', name: 'Peso dominicain', symbol: '$' },
      { code: 'DZD', name: 'Dinar algérien', symbol: 'د.ج' },
      { code: 'EGP', name: 'Livre égyptienne', symbol: '£' },
      { code: 'ERN', name: 'Nakfa érythréen', symbol: 'Nfk' },
      { code: 'ETB', name: 'Birr éthiopien', symbol: 'Br' },
      { code: 'EUR', name: 'Euro', symbol: '€' },
      { code: 'FJD', name: 'Dollar fidjien', symbol: '$' },
      { code: 'FKP', name: 'Livre des îles Falkland', symbol: '£' },
      { code: 'FOK', name: 'Couronne féroïenne', symbol: 'kr' },
      { code: 'GBP', name: 'Livre sterling', symbol: '£' },
      { code: 'GEL', name: 'Lari géorgien', symbol: '₾' },
      { code: 'GGP', name: 'Livre de Guernesey', symbol: '£' },
      { code: 'GHS', name: 'Cedi ghanéen', symbol: '₵' },
      { code: 'GIP', name: 'Livre de Gibraltar', symbol: '£' },
      { code: 'GMD', name: 'Dalasi gambien', symbol: 'D' },
      { code: 'GNF', name: 'Franc guinéen', symbol: 'FG' },
      { code: 'GTQ', name: 'Quetzal guatémaltèque', symbol: 'Q' },
      { code: 'GYD', name: 'Dollar guyanien', symbol: '$' },
      { code: 'HKD', name: 'Dollar de Hong Kong', symbol: '$' },
      { code: 'HNL', name: 'Lempira hondurien', symbol: 'L' },
      { code: 'HRK', name: 'Kuna croate', symbol: 'kn' },
      { code: 'HTG', name: 'Gourde haïtienne', symbol: 'G' },
      { code: 'HUF', name: 'Forint hongrois', symbol: 'Ft' },
      { code: 'IDR', name: 'Roupie indonésienne', symbol: 'Rp' },
      { code: 'ILS', name: 'Nouveau shekel israélien', symbol: '₪' },
      { code: 'IMP', name: 'Livre de l\'île de Man', symbol: '£' },
      { code: 'INR', name: 'Roupie indienne', symbol: '₹' },
      { code: 'IQD', name: 'Dinar irakien', symbol: 'ع.د' },
      { code: 'IRR', name: 'Rial iranien', symbol: '﷼' },
      { code: 'ISK', name: 'Couronne islandaise', symbol: 'kr' },
      { code: 'JEP', name: 'Livre de Jersey', symbol: '£' },
      { code: 'JMD', name: 'Dollar jamaïcain', symbol: '$' },
      { code: 'JOD', name: 'Dinar jordanien', symbol: 'د.ا' },
      { code: 'JPY', name: 'Yen japonais', symbol: '¥' },
      { code: 'KES', name: 'Shilling kényan', symbol: 'KSh' },
      { code: 'KGS', name: 'Som kirghize', symbol: 'с' },
      { code: 'KHR', name: 'Riel cambodgien', symbol: '៛' },
      { code: 'KID', name: 'Dollar de Kiribati', symbol: '$' },
      { code: 'KMF', name: 'Franc comorien', symbol: 'CF' },
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
      { code: 'MAD', name: 'Dirham marocain', symbol: 'د.م.' },
      { code: 'MDL', name: 'Leu moldave', symbol: 'L' },
      { code: 'MGA', name: 'Ariary malgache', symbol: 'Ar' },
      { code: 'MKD', name: 'Denar macédonien', symbol: 'ден' },
      { code: 'MMK', name: 'Kyat birman', symbol: 'K' },
      { code: 'MNT', name: 'Tugrik mongol', symbol: '₮' },
      { code: 'MOP', name: 'Pataca macanaise', symbol: 'MOP$' },
      { code: 'MRU', name: 'Ouguiya mauritanienne', symbol: 'UM' },
      { code: 'MUR', name: 'Roupie mauricienne', symbol: '₨' },
      { code: 'MVR', name: 'Rufiyaa maldivienne', symbol: 'Rf' },
      { code: 'MWK', name: 'Kwacha malawite', symbol: 'MK' },
      { code: 'MXN', name: 'Peso mexicain', symbol: '$' },
      { code: 'MYR', name: 'Ringgit malaisien', symbol: 'RM' },
      { code: 'MZN', name: 'Metical mozambicain', symbol: 'MT' },
      { code: 'NAD', name: 'Dollar namibien', symbol: '$' },
      { code: 'NGN', name: 'Naira nigérian', symbol: '₦' },
      { code: 'NIO', name: 'Córdoba oro nicaraguayen', symbol: 'C$' },
      { code: 'NOK', name: 'Couronne norvégienne', symbol: 'kr' },
      { code: 'NPR', name: 'Roupie népalaise', symbol: '₨' },
      { code: 'NZD', name: 'Dollar néo-zélandais', symbol: '$' },
      { code: 'OMR', name: 'Rial omanais', symbol: 'ر.ع.' },
      { code: 'PAB', name: 'Balboa panaméen', symbol: 'B/.' },
      { code: 'PEN', name: 'Sol péruvien', symbol: 'S/.' },
      { code: 'PGK', name: 'Kina papou-néo-guinéen', symbol: 'K' },
      { code: 'PHP', name: 'Peso philippin', symbol: '₱' },
      { code: 'PKR', name: 'Roupie pakistanaise', symbol: '₨' },
      { code: 'PLN', name: 'Zloty polonais', symbol: 'zł' },
      { code: 'PYG', name: 'Guarani paraguayen', symbol: '₲' },
      { code: 'QAR', name: 'Rial qatari', symbol: 'ر.ق' },
      { code: 'RON', name: 'Leu roumain', symbol: 'lei' },
      { code: 'RSD', name: 'Dinar serbe', symbol: 'дин.' },
      { code: 'RUB', name: 'Rouble russe', symbol: '₽' },
      { code: 'RWF', name: 'Franc rwandais', symbol: 'FRw' },
      { code: 'SAR', name: 'Riyal saoudien', symbol: 'ر.س' },
      { code: 'SBD', name: 'Dollar des îles Salomon', symbol: '$' },
      { code: 'SCR', name: 'Roupie seychelloise', symbol: '₨' },
      { code: 'SDG', name: 'Livre soudanaise', symbol: '£' },
      { code: 'SEK', name: 'Couronne suédoise', symbol: 'kr' },
      { code: 'SGD', name: 'Dollar de Singapour', symbol: '$' },
      { code: 'SHP', name: 'Livre de Sainte-Hélène', symbol: '£' },
      { code: 'SLE', name: 'Leone sierra-léonais', symbol: 'Le' },
      { code: 'SOS', name: 'Shilling somalien', symbol: 'Sh' },
      { code: 'SRD', name: 'Dollar surinamais', symbol: '$' },
      { code: 'SSP', name: 'Livre sud-soudanaise', symbol: '£' },
      { code: 'STN', name: 'Dobra santoméen', symbol: 'Db' },
      { code: 'SYP', name: 'Livre syrienne', symbol: '£' },
      { code: 'SZL', name: 'Lilangeni swazi', symbol: 'L' },
      { code: 'THB', name: 'Baht thaïlandais', symbol: '฿' },
      { code: 'TJS', name: 'Somoni tadjik', symbol: 'SM' },
      { code: 'TMT', name: 'Manat turkmène', symbol: 'T' },
      { code: 'TND', name: 'Dinar tunisien', symbol: 'د.ت' },
      { code: 'TOP', name: 'Pa\'anga tongan', symbol: 'T$' },
      { code: 'TRY', name: 'Livre turque', symbol: '₺' },
      { code: 'TTD', name: 'Dollar trinidadien', symbol: '$' },
      { code: 'TVD', name: 'Dollar tuvaluan', symbol: '$' },
      { code: 'TWD', name: 'Nouveau dollar taïwanais', symbol: 'NT$' },
      { code: 'TZS', name: 'Shilling tanzanien', symbol: 'Sh' },
      { code: 'UAH', name: 'Hryvnia ukrainienne', symbol: '₴' },
      { code: 'UGX', name: 'Shilling ougandais', symbol: 'USh' },
      { code: 'USD', name: 'Dollar américain', symbol: '$' },
      { code: 'UYU', name: 'Peso uruguayen', symbol: '$' },
      { code: 'UZS', name: 'Sum ouzbek', symbol: 'so\'m' },
      { code: 'VES', name: 'Bolívar vénézuélien', symbol: 'Bs.' },
      { code: 'VND', name: 'Dong vietnamien', symbol: '₫' },
      { code: 'VUV', name: 'Vatu vanuatuan', symbol: 'VT' },
      { code: 'WST', name: 'Tala samoan', symbol: 'T' },
      { code: 'XAF', name: 'Franc CFA (BEAC)', symbol: 'FCFA' },
      { code: 'XCD', name: 'Dollar des Caraïbes orientales', symbol: '$' },
      { code: 'XDR', name: 'Droits de tirage spéciaux (FMI)', symbol: 'XDR' },
      { code: 'XOF', name: 'Franc CFA (BCEAO)', symbol: 'CFA' },
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
    const users = Array.from({ length: 50 }, () => ({
      full_name: faker.person.fullName(),
      username: faker.internet.username().toLowerCase().replace(/\s/g, '_'),
      email: faker.internet.email().toLowerCase(),
      password_hash: faker.internet.password({ length: 12 }),
      birthdate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
      cin: faker.string.alphanumeric({ length: 10, casing: 'upper' }),
      role: faker.helpers.arrayElement(['manager', 'partner', 'admin']),
      created_at: faker.date.past({ years: 2 }),
    }));
    for (const user of users) {
      await client.query(
        'INSERT INTO users (full_name, username, email, password_hash, birthdate, cin, role, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [user.full_name, user.username, user.email, user.password_hash, user.birthdate, user.cin, user.role, user.created_at]
      );
    }
    const clients = Array.from({ length: 50 }, () => ({
      full_name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      cin: faker.string.alphanumeric({ length: 10, casing: 'upper' }),
      occupation: faker.person.jobTitle(),
      created_at: faker.date.past({ years: 1 }),
    }));
    for (const clientData of clients) {
      await client.query(
        'INSERT INTO clients (full_name, email, cin, occupation, created_at) VALUES ($1, $2, $3, $4, $5)',
        [clientData.full_name, clientData.email, clientData.cin, clientData.occupation, clientData.created_at]
      );
    }
    const categories = [
      'Technologie', 'Art & Culture', 'Musique', 'Sports', 'Charité',
      'Éducation', 'Santé', 'Environnement', 'Gastronomie', 'Mode'
    ].map(name => ({
      name,
      description: faker.lorem.sentence(),
    }));
    for (const category of categories) {
      await client.query(
        'INSERT INTO event_categories (name, description) VALUES ($1, $2)',
        [category.name, category.description]
      );
    }
    const currencyResult = await client.query('SELECT id FROM currencies');
    const validCurrencyIds = currencyResult.rows.map(row => row.id);
    const userResult = await client.query('SELECT id FROM users');
    const validUserIds = userResult.rows.map(row => row.id);
    const categoryResult = await client.query('SELECT id FROM event_categories');
    const validCategoryIds = categoryResult.rows.map(row => row.id);
    const events = Array.from({ length: 50 }, () => {
      const startDate = faker.date.future({ years: 1 });
      const endDate = faker.date.soon({ days: 7, refDate: startDate });
      return {
        title: faker.lorem.words({ min: 3, max: 5 }).slice(0, 100),
        description: faker.lorem.paragraphs({ min: 2, max: 5 }),
        category_id: faker.helpers.arrayElement(validCategoryIds),
        start_date: startDate,
        end_date: endDate,
        location: `${faker.location.city()}, ${faker.location.country()}`.slice(0, 255),
        status: faker.helpers.arrayElement(['draft', 'published', 'ongoing', 'completed', 'cancelled']),
        budget: faker.finance.amount({ min: 1000, max: 50000, dec: 2 }),
        currency_id: faker.helpers.arrayElement(validCurrencyIds),
        created_by: faker.helpers.arrayElement(validUserIds),
        created_at: faker.date.past({ years: 1, refDate: startDate }),
      };
    });
    for (const event of events) {
      await client.query(
        'INSERT INTO events (title, description, category_id, start_date, end_date, location, status, budget, currency_id, created_by, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
        [event.title, event.description, event.category_id, event.start_date, event.end_date, event.location, event.status, event.budget, event.currency_id, event.created_by, event.created_at]
      );
    }
    const eventResult = await client.query('SELECT id FROM events');
    const validEventIds = eventResult.rows.map(row => row.id);
    const clientResult = await client.query('SELECT id FROM clients');
    const validClientIds = clientResult.rows.map(row => row.id);
    const eventCollaborators = Array.from({ length: 50 }, () => ({
      event_id: faker.helpers.arrayElement(validEventIds),
      user_id: faker.helpers.arrayElement(validUserIds),
      role: faker.helpers.arrayElement(['organizer', 'partner', 'volunteer']),
      status: faker.helpers.arrayElement(['pending', 'accepted', 'rejected']),
      joined_at: faker.date.past({ years: 1 }),
    }));
    for (const collaborator of eventCollaborators) {
      await client.query(
        'INSERT INTO event_collaborators (event_id, user_id, role, status, joined_at) VALUES ($1, $2, $3, $4, $5) ON CONFLICT ON CONSTRAINT unique_collaboration DO NOTHING',
        [collaborator.event_id, collaborator.user_id, collaborator.role, collaborator.status, collaborator.joined_at]
      );
    }
    const eventComments = Array.from({ length: 50 }, () => ({
      event_id: faker.helpers.arrayElement(validEventIds),
      client_id: faker.helpers.arrayElement(validClientIds),
      content: faker.lorem.paragraph(),
      created_at: faker.date.past({ years: 1 }),
    }));
    for (const comment of eventComments) {
      await client.query(
        'INSERT INTO event_comments (event_id, client_id, content, created_at) VALUES ($1, $2, $3, $4)',
        [comment.event_id, comment.client_id, comment.content, comment.created_at]
      );
    }
    const eventPartners = Array.from({ length: 50 }, () => ({
      event_id: faker.helpers.arrayElement(validEventIds),
      client_id: faker.helpers.arrayElement(validClientIds),
      description: faker.company.catchPhrase(),
      offered_help: faker.lorem.paragraph(),
      status: faker.helpers.arrayElement(['pending', 'approved', 'rejected']),
      created_at: faker.date.past({ years: 1 }),
    }));
    for (const partner of eventPartners) {
      await client.query(
        'INSERT INTO event_partners (event_id, client_id, description, offered_help, status, created_at) VALUES ($1, $2, $3, $4, $5, $6)',
        [partner.event_id, partner.client_id, partner.description, partner.offered_help, partner.status, partner.created_at]
      );
    }
  } catch (error) {
    console.error('Error', error);
  } finally {
    await client.end();
  }
}

generateMockData();