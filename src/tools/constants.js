export const ROUTER_PATH = {
    HOME: '/',
    PRODUCTS: '/productos',
    PRODUCTS_BY_CATEGORY: (category)=>`/${category}/productos`,
    CHECKOUT: '/confirmar-compra',
    CHECKOUT_SHARED: '/confirmar-compra/${id}/pagar',
    SUCCESS: '/detalles-orden',
    PROFILE: '/usuario/perfil',
    LOGIN: '/usuario/acceder',
    REGISTER: '/usuario/registro',
    LOGOUT: '/usuario/salir',
    SEARCH: '/consulta',
    ABOUT: '/nosotros',
    API: {
        USER: '/api/users',
        LOGOUT: '/api/users/logout',
        CHECKOUT: '/api/checkout',
        ORDERS: '/api/orders',
    }
}

export const ROUTER_ID = {
    HOME: 1,
    PRODUCTS: 2,
    CHECKOUT: 3,
    SUCCESS: 4,
    PROFILE: 5,
    LOGIN: 6,
    REGISTER: 14,
    LOGOUT: 7,
    SEARCH: 8,
    ABOUT: 9,
    API: {
        USER: 10,
        LOGOUT: 11,
        CHECKOUT: 12,
        ORDERS: 13,
    }
}

export const PAYMENT_METHODS = {
    "pago_movil": {
        "title": "Pago Movil",
        "description": "Paga con tu banco a traves de la aplicacion movil de tu banco",
        "image": "pago_movil.svg"
    },
    "tdc": {
        "title": "Tarjeta de Credito",
        "description": "Paga con tu tarjeta de credito",
        "image": "tdc.svg"
    },
    "zelle": {
        "title": "Zelle",
        "description": "Paga con tu cuenta de zelle",
        "image": "zelle.svg"
    },
    "paypal": {
        "title": "Paypal",
        "description": "Paga con tu cuenta de paypal",
        "image": "paypal.svg"
    }
}

export const STATES = [
    {
        "id": 1,
        "name": "Amazonas",
        "iso_3166_2": "VE-X",
        "state_code": "X"
    },
    {
        "id": 2,
        "name": "Anzoátegui",
        "iso_3166_2": "VE-B",
        "state_code": "B"
    },
    {
        "id": 3,
        "name": "Apure",
        "iso_3166_2": "VE-C",
        "state_code": "C"
    },
    {
        "id": 4,
        "name": "Aragua",
        "iso_3166_2": "VE-D",
        "state_code": "D"
    },
    {
        "id": 5,
        "name": "Barinas",
        "iso_3166_2": "VE-E",
        "state_code": "E"
    },
    {
        "id": 6,
        "name": "Bolívar",
        "iso_3166_2": "VE-F",
        "state_code": "F"
    },
    {
        "id": 7,
        "name": "Carabobo",
        "iso_3166_2": "VE-G",
        "state_code": "G"
    },
    {
        "id": 8,
        "name": "Cojedes",
        "iso_3166_2": "VE-H",
        "state_code": "H"
    },
    {
        "id": 9,
        "name": "Delta Amacuro",
        "iso_3166_2": "VE-Y",
        "state_code": "Y"
    },
    {
        "id": 10,
        "name": "Distrito Capital",
        "iso_3166_2": "VE-A",
        "state_code": "A"
    },
    {
        "id": 11,
        "name": "Falcón",
        "iso_3166_2": "VE-I",
        "state_code": "I"
    },
    {
        "id": 12,
        "name": "Guárico",
        "iso_3166_2": "VE-J",
        "state_code": "J"
    },
    {
        "id": 13,
        "name": "Lara",
        "iso_3166_2": "VE-K",
        "state_code": "K"
    },
    {
        "id": 14,
        "name": "Mérida",
        "iso_3166_2": "VE-L",
        "state_code": "L"
    },
    {
        "id": 15,
        "name": "Miranda",
        "iso_3166_2": "VE-M",
        "state_code": "M"
    },
    {
        "id": 16,
        "name": "Monagas",
        "iso_3166_2": "VE-N",
        "state_code": "N"
    },
    {
        "id": 17,
        "name": "Nueva Esparta",
        "iso_3166_2": "VE-O",
        "state_code": "O"
    },
    {
        "id": 18,
        "name": "Portuguesa",
        "iso_3166_2": "VE-P",
        "state_code": "P"
    },
    {
        "id": 19,
        "name": "Sucre",
        "iso_3166_2": "VE-R",
        "state_code": "R"
    },
    {
        "id": 20,
        "name": "Táchira",
        "iso_3166_2": "VE-S",
        "state_code": "S"
    },
    {
        "id": 21,
        "name": "Trujillo",
        "iso_3166_2": "VE-T",
        "state_code": "T"
    },
    {
        "id": 22,
        "name": "Vargas",
        "iso_3166_2": "VE-W",
        "state_code": "W"
    },
    {
        "id": 23,
        "name": "Yaracuy",
        "iso_3166_2": "VE-U",
        "state_code": "U"
    },
    {
        "id": 24,
        "name": "Zulia",
        "iso_3166_2": "VE-V",
        "state_code": "V"
    }
]


export const timeFormats = [
	{
		format: 'seconds',
		label: ['segundo','segundos'],
		limit: 60
	},
	{
		format: 'minutes',
		label: ['minuto','minutos'],
		limit: 60
	},
	{
		format: 'hours',
		label: ['hora','horas'],
		limit: 24
	},
	{
		format: 'days',
		label: ['dia','dias'],
		limit: 32
	},
	{
		format: 'mounth',
		label: ['mes','meses'],
		limit: 12
	},
	{
		format: 'year',
		label:['año', 'años'],
		limit: 0
	}
]

export const USER_TYPE = {
    ADMIN: 'admin'
}

export const ENTITIES = {
    auctions: "products",
    users: "users"
}