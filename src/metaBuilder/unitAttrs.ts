import { define } from '../customDefine';
import { BaseBuilder } from './baseBuilder';

const template =
`---@enum(key, partial) y3.Const.UnitAttr
local UnitAttr = {
%{ATTR_ENUMS}
}

y3.util.tableMerge(y3.const.UnitAttr or {}, UnitAttr)
`;

export class UnitAttrs extends BaseBuilder {
    constructor(path: string) {
        super(path);
        this.update();
        define.单位属性.onDidChange(() => {
            this.update();
        });
    }

    async make() {
        let attrs = await define.单位属性.getAttrs();
        if (attrs.length === 0) {
            return;
        }
        return template.replace('%{ATTR_ENUMS}', attrs.map(attr => {
            return `    ["${attr.name}"] = "${attr.key}",`;
        }).join('\r\n'));
    }

}
