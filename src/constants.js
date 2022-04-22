export const whitelistCivs = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    14,
    15,
    16,
    18,
    19,
    20,
    26,
    27,
    37,
    38,
    39,
    41
]

export const blacklistCards = [
    {
        id: 'DEHCAfricanHeroCombat',
    },
    {
        id: 'HCXPZapotecAllies1',
        civs: ['homecitydeinca']
    },
    {
        id: 'HCPioneers',
        civs: ['homecityhausa']
    },
    {
        id: 'DEHCShipCampWagonsRepeat',
        civs: ['homecityhausa']
    },
    {
        id: 'HCAdvancedArsenal',
        civs: ['homecityhausa']
    },
    {
        id: 'HCAdvancedArsenal',
        civs: ['homecityethiopians']
    }
]

export const injectedCards = [
    /* Example of injected card
    {
        dbid: '5061',
        name: 'ypHCConsulateRelations',
        age: 2,
        homecity: 'homecityjapanese',
        order: 29,
    }
    */
]

export const blackListUnitTypes = [
    'Hero',
    'AbstractPet',
    'AbstractBannerArmy',
    'Guardian',
    'EmbellishmentClass'
]

export const blacklistFlags = [
    'NotPlayerPlaceable',
    'NonAutoFormedUnit'
]

export const unitTypes = [
    {
        id: 'AbstractRangedInfantry',
        nameId: '42032'
    },
    {
       id: 'AbstractRifleman',
       nameId: '110161'
    },
    {
        id: 'AbstractMusketeer',
        nameId: '110184'
    },
    {
        id: 'AbstractHeavyInfantry',
        nameId: '42017'
    },
    {
        id: 'AbstractHandInfantry',
        nameId: '42034'
    },
    {
        id: 'AbstractLightInfantry',
        nameId: '42089'
    },
    
    {
        id: 'AbstractRangedShockInfantry',
        nameId: '44138'
    },
    {
        id: 'AbstractCavalry',
        nameId: '38214',
    },
    {
        id: 'AbstractHeavyCavalry',
        nameId: '42088',
    },
    {
        id: 'AbstractLightCavalry',
        nameId: '42018'
    },
    {
        id: 'AbstractArtillery',
        nameId: '42094'
    },
    {
        id: 'AbstractNativeWarrior',
        nameId: '42022'
    },
    {
        id: 'Mercenary',
        nameId: '42020'
    },
    {
        id: 'MercType5',
        nameId: '101599'
    },
    {
        id: 'AbstractOutlaw',
        nameId: '110185'
    },
    {
        id: 'AbstractWarShip',
        nameId: '42036'
    }
]

export const blackListUnitTypesPanelUnit = [
    'UnitClass',
    'Military',
    'LogicalTypeScout'
]