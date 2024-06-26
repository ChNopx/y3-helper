// 本项目的常量尽量放到这里

/**
 * 物编数据种类枚举
 */
export enum EditorTableType {
    Unit = "unit",
    Decoration = "decoration",
    Item = "item",
    Ability = "ability",
    Modifier = "modifier",
    Projectile = "projectile",
    Technology = "technology",
    Destructible = "destructible",
    Sound = "sound"
}

/**
 * Y3项目的editor_table文件夹下的各个文件夹名和物编数据种类中文名的对应关系
 */
export const englishPathToChinese: Readonly<{ [key: string]: string } >= {
    "editorunit": "单位",
    "soundall": "声音",
    "abilityall": "技能",
    "editordecoration": "装饰物",
    "editordestructible": "可破坏物",
    "editoritem": "物品",
    "modifierall": "魔法效果",
    "projectileall": "投射物",
    "technologyall": "科技"
};

/**
 * 物编数据种类对应的中文名
 */
export const englishTypeNameToChineseTypeName: Readonly<{ [key: string]: string } >= {
        "unit": "单位",
        "decoration": "装饰物",
        "item": "物品",
        "ability": "技能",
        "modifier": "魔法效果",
        "projectile": "投射物",
        "technology": "科技",
        "destructible": "可破坏物",
        "sound": "声音"
};

/**
 * 物编数据种类对应的英文名
 */
export const chineseTypeNameToEnglishTypeName:Readonly< { [key: string]: string } >= {
        "单位": "unit",
        "装饰物": "decoration",
        "物品": "item",
        "技能": "ability",
        "魔法效果": "modifier",
        "投射物": "projectile",
        "科技": "technology",
        "可破坏物": "destructible",
        "声音": "sound"
};

/**
 * 物编数据类型与其在Y3项目中存放的文件夹名的对应关系
 */
export const editorTableTypeToFolderName: Readonly<{ [key: string]: string }> = {
    "unit": "editorunit",
    "decoration": "editordecoration",
    "item": "editoritem",
    "ability": "abilityall",
    "modifier": "modifierall",
    "projectile": "projectileall",
    "technology": "technologyall",
    "destructible": "editordestructible",
    "sound":"soundall"
};

/**
 * 不同类型的CSV文件导入为Json后会放入不同的文件夹
 */
export const csvTypeToPath: Readonly<{ [key: string]: string }> = {
    "unit": "editorunit",
    "sound": "soundall",
    "ability": "abilityall",
    "model": "editormodel",
    "decoration": "editordecoration",
    "destructible": "editordestructible",
    "effect": "editoreffect",
    "icon": "editoricon",
    "item": "editoritem",
    "physics_object": "editorphysicsobject",
    "physics_object_logic": "editorphysicsobjectlogic",
    "modifier": "modifierall",
    "projectile": "projectileall",
    "store": "storeall",
    "technology": "technologyall"
};

// 默认情况下各类型物编数据CSV文件的相对路径 （相对于工程项目的script文件）
export const defaultTableTypeToCSVfolderPath: Readonly<{ [key: string]: string }> = {
    unit: "./y3-helper/editor_table/csv/单位",
    decoration: "./y3-helper/editor_table/csv/装饰物",
    item: "./y3-helper/editor_table/csv/物品",
    ability: "./y3-helper/editor_table/csv/技能",
    modifier: "./y3-helper/editor_table/csv/魔法效果",
    projectile: "./y3-helper/editor_table/csv/投射物",
    technology: "./y3-helper/editor_table/csv/科技",
    destructible: "./y3-helper/editor_table/csv/可破坏物",
    sound: "./y3-helper/editor_table/csv/声音"
};

export const typeID: { [key: number]: [string, string]} = {
    100000: ["number", "实数"],
    100001: ["boolean", "布尔"],
    100002: ["integer", "整数"],
    100003: ["string", "字符串"],
    100004: ["Point", "点"],
    100006: ["Unit", "单位"],
    100010: ["UnitKey", "单位类型"],
    100011: ["table", "表"],
    100014: ["Ability", "技能"],
    100025: ["Player", "玩家"],
    100026: ["UnitGroup", "单位组"],
    100027: ["PlayerGroup", "玩家组"],
    100031: ["Item", "物品"],
    100032: ["ItemKey", "物品类型"],
    100039: ["AbilityKey", "技能类型"],
    100263: ["Mover", "运动器"],
};
