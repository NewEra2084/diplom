module.exports = [
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (values)=>{
    const cacheRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        valueLabels: new Map()
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const { valueLabels } = cacheRef.current;
        const valueLabelsCache = new Map();
        const filledValues = values.map((item)=>{
            const { value, label } = item;
            const mergedLabel = label ?? valueLabels.get(value);
            // Save in cache
            valueLabelsCache.set(value, mergedLabel);
            return {
                ...item,
                label: mergedLabel
            };
        });
        cacheRef.current.valueLabels = valueLabelsCache;
        return [
            filledValues
        ];
    }, [
        values
    ]);
};
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useCheckedKeys.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.1.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree/es/utils/conductUtil.js [app-ssr] (ecmascript)");
;
;
const useCheckedKeys = (rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const extractValues = (values)=>values.map(({ value })=>value);
        const checkedKeys = extractValues(rawLabeledValues);
        const halfCheckedKeys = extractValues(rawHalfCheckedValues);
        const missingValues = checkedKeys.filter((key)=>!keyEntities[key]);
        let finalCheckedKeys = checkedKeys;
        let finalHalfCheckedKeys = halfCheckedKeys;
        if (treeConduction) {
            const conductResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conductCheck"])(checkedKeys, true, keyEntities);
            finalCheckedKeys = conductResult.checkedKeys;
            finalHalfCheckedKeys = conductResult.halfCheckedKeys;
        }
        return [
            Array.from(new Set([
                ...missingValues,
                ...finalCheckedKeys
            ])),
            finalHalfCheckedKeys
        ];
    }, [
        rawLabeledValues,
        rawHalfCheckedValues,
        treeConduction,
        keyEntities
    ]);
};
const __TURBOPACK__default__export__ = useCheckedKeys;
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/valueUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fillFieldNames",
    ()=>fillFieldNames,
    "getAllKeys",
    ()=>getAllKeys,
    "isCheckDisabled",
    ()=>isCheckDisabled,
    "isNil",
    ()=>isNil,
    "toArray",
    ()=>toArray
]);
const toArray = (value)=>Array.isArray(value) ? value : value !== undefined ? [
        value
    ] : [];
const fillFieldNames = (fieldNames)=>{
    const { label, value, children } = fieldNames || {};
    return {
        _title: label ? [
            label
        ] : [
            'title',
            'label'
        ],
        value: value || 'value',
        key: value || 'value',
        children: children || 'children'
    };
};
const isCheckDisabled = (node)=>!node || node.disabled || node.disableCheckbox || node.checkable === false;
const getAllKeys = (treeData, fieldNames)=>{
    const keys = [];
    const dig = (list)=>{
        list.forEach((item)=>{
            const children = item[fieldNames.children];
            if (children) {
                keys.push(item[fieldNames.value]);
                dig(children);
            }
        });
    };
    dig(treeData);
    return keys;
};
const isNil = (val)=>val === null || val === undefined;
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useDataEntities.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.1.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/valueUtil.js [app-ssr] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (treeData, fieldNames)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const collection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertDataToEntities"])(treeData, {
            fieldNames,
            initWrapper: (wrapper)=>({
                    ...wrapper,
                    valueEntities: new Map()
                }),
            processEntity: (entity, wrapper)=>{
                const val = entity.node[fieldNames.value];
                // Check if exist same value
                if ("TURBOPACK compile-time truthy", 1) {
                    const key = entity.node.key;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNil"])(val), 'TreeNode `value` is invalidate: undefined');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!wrapper.valueEntities.has(val), `Same \`value\` exist in the tree: ${val}`);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!key || String(key) === String(val), `\`key\` or \`value\` with TreeNode must be the same or you can remove one of them. key: ${key}, value: ${val}.`);
                }
                wrapper.valueEntities.set(val, entity);
            }
        });
        return collection;
    }, [
        treeData,
        fieldNames
    ]);
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/* istanbul ignore file */ /** This is a placeholder, not real render in dom */ const TreeNode = ()=>null;
const __TURBOPACK__default__export__ = TreeNode;
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/legacyUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertChildrenToData",
    ()=>convertChildrenToData,
    "fillAdditionalInfo",
    ()=>fillAdditionalInfo,
    "fillLegacyProps",
    ()=>fillLegacyProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/Children/toArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeNode.js [app-ssr] (ecmascript)");
;
;
;
;
function convertChildrenToData(nodes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(nodes).map((node)=>{
        if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](node) || !node.type) {
            return null;
        }
        const { key, props: { children, value, ...restProps } } = node;
        const data = {
            key,
            value,
            ...restProps
        };
        const childData = convertChildrenToData(children);
        if (childData.length) {
            data.children = childData;
        }
        return data;
    }).filter((data)=>data);
}
function fillLegacyProps(dataNode) {
    if (!dataNode) {
        return dataNode;
    }
    const cloneNode = {
        ...dataNode
    };
    if (!('props' in cloneNode)) {
        Object.defineProperty(cloneNode, 'props', {
            get () {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access.');
                return cloneNode;
            }
        });
    }
    return cloneNode;
}
function fillAdditionalInfo(extra, triggerValue, checkedValues, treeData, showPosition, fieldNames) {
    let triggerNode = null;
    let nodeList = null;
    function generateMap() {
        function dig(list, level = '0', parentIncluded = false) {
            return list.map((option, index)=>{
                const pos = `${level}-${index}`;
                const value = option[fieldNames.value];
                const included = checkedValues.includes(value);
                const children = dig(option[fieldNames.children] || [], pos, included);
                const node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], option, children.map((child)=>child.node));
                // Link with trigger node
                if (triggerValue === value) {
                    triggerNode = node;
                }
                if (included) {
                    const checkedNode = {
                        pos,
                        node,
                        children
                    };
                    if (!parentIncluded) {
                        nodeList.push(checkedNode);
                    }
                    return checkedNode;
                }
                return null;
            }).filter((node)=>node);
        }
        if (!nodeList) {
            nodeList = [];
            dig(treeData);
            // Sort to keep the checked node length
            nodeList.sort(({ node: { props: { value: val1 } } }, { node: { props: { value: val2 } } })=>{
                const index1 = checkedValues.indexOf(val1);
                const index2 = checkedValues.indexOf(val2);
                return index1 - index2;
            });
        }
    }
    Object.defineProperty(extra, 'triggerNode', {
        get () {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '`triggerNode` is deprecated. Please consider decoupling data with node.');
            generateMap();
            return triggerNode;
        }
    });
    Object.defineProperty(extra, 'allCheckedNodes', {
        get () {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '`allCheckedNodes` is deprecated. Please consider decoupling data with node.');
            generateMap();
            if (showPosition) {
                return nodeList;
            }
            return nodeList.map(({ node })=>node);
        }
    });
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useFilterTreeData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/legacyUtil.js [app-ssr] (ecmascript)");
;
;
const useFilterTreeData = (treeData, searchValue, options)=>{
    const { fieldNames, treeNodeFilterProp, filterTreeNode } = options;
    const { children: fieldChildren } = fieldNames;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!searchValue || filterTreeNode === false) {
            return treeData;
        }
        const filterOptionFunc = typeof filterTreeNode === 'function' ? filterTreeNode : (_, dataNode)=>String(dataNode[treeNodeFilterProp]).toUpperCase().includes(searchValue.toUpperCase());
        const filterTreeNodes = (nodes, keepAll = false)=>nodes.reduce((filtered, node)=>{
                const children = node[fieldChildren];
                const isMatch = keepAll || filterOptionFunc(searchValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillLegacyProps"])(node));
                const filteredChildren = filterTreeNodes(children || [], isMatch);
                if (isMatch || filteredChildren.length) {
                    filtered.push({
                        ...node,
                        isLeaf: undefined,
                        [fieldChildren]: filteredChildren
                    });
                }
                return filtered;
            }, []);
        return filterTreeNodes(treeData);
    }, [
        treeData,
        searchValue,
        fieldChildren,
        treeNodeFilterProp,
        filterTreeNode
    ]);
};
const __TURBOPACK__default__export__ = useFilterTreeData;
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useRefFunc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useRefFunc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useRefFunc(callback) {
    const funcRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    funcRef.current = callback;
    const cacheFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((...args)=>{
        return funcRef.current(...args);
    }, []);
    return cacheFn;
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useTreeData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useTreeData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/legacyUtil.js [app-ssr] (ecmascript)");
;
;
function buildTreeStructure(nodes, config) {
    const { id, pId, rootPId } = config;
    const nodeMap = new Map();
    const rootNodes = [];
    nodes.forEach((node)=>{
        const nodeKey = node[id];
        const clonedNode = {
            ...node,
            key: node.key || nodeKey
        };
        nodeMap.set(nodeKey, clonedNode);
    });
    nodeMap.forEach((node)=>{
        const parentKey = node[pId];
        const parent = nodeMap.get(parentKey);
        if (parent) {
            parent.children = parent.children || [];
            parent.children.push(node);
        } else if (parentKey === rootPId || rootPId === null) {
            rootNodes.push(node);
        }
    });
    return rootNodes;
}
function useTreeData(treeData, children, simpleMode) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (treeData) {
            if (simpleMode) {
                const config = {
                    id: 'id',
                    pId: 'pId',
                    rootPId: null,
                    ...typeof simpleMode === 'object' ? simpleMode : {}
                };
                return buildTreeStructure(treeData, config);
            }
            return treeData;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertChildrenToData"])(children);
    }, [
        children,
        simpleMode,
        treeData
    ]);
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/LegacyContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const LegacySelectContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const __TURBOPACK__default__export__ = LegacySelectContext;
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeSelectContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const TreeSelectContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const __TURBOPACK__default__export__ = TreeSelectContext;
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/OptionList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$5$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.5.2_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/select/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$5$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useBaseProps$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.5.2_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-ssr] (ecmascript) <export default as useBaseProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.1.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.1.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree/es/contextTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/KeyCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/hooks/useMemo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$LegacyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/LegacyContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeSelectContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeSelectContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/valueUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/hooks/useEvent.js [app-ssr] (ecmascript) <export default as useEvent>");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
;
;
const HIDDEN_STYLE = {
    width: 0,
    height: 0,
    display: 'flex',
    overflow: 'hidden',
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0
};
const OptionList = (_, ref)=>{
    const { prefixCls, multiple, searchValue, toggleOpen, open, notFoundContent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$5$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useBaseProps$3e$__["useBaseProps"])();
    const { virtual, listHeight, listItemHeight, listItemScrollOffset, treeData, fieldNames, onSelect, popupMatchSelectWidth, treeExpandAction, treeTitleRender, onPopupScroll, leftMaxCount, leafCountOnly, valueEntities, classNames: treeClassNames, styles } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeSelectContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const { checkable, checkedKeys, halfCheckedKeys, treeExpandedKeys, treeDefaultExpandAll, treeDefaultExpandedKeys, onTreeExpand, treeIcon, showTreeIcon, switcherIcon, treeLine, treeNodeFilterProp, loadData, treeLoadedKeys, treeMotion, onTreeLoad, keyEntities } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$LegacyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const treeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    const memoTreeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>treeData, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        open,
        treeData
    ], (prev, next)=>next[0] && prev[1] !== next[1]);
    // ========================== Values ==========================
    const mergedCheckedKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!checkable) {
            return null;
        }
        return {
            checked: checkedKeys,
            halfChecked: halfCheckedKeys
        };
    }, [
        checkable,
        checkedKeys,
        halfCheckedKeys
    ]);
    // ========================== Scroll ==========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Single mode should scroll to current key
        if (open && !multiple && checkedKeys.length) {
            treeRef.current?.scrollTo({
                key: checkedKeys[0]
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        open
    ]);
    // ========================== Events ==========================
    const onListMouseDown = (event)=>{
        event.preventDefault();
    };
    const onInternalSelect = (__, info)=>{
        const { node } = info;
        if (checkable && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCheckDisabled"])(node)) {
            return;
        }
        onSelect(node.key, {
            selected: !checkedKeys.includes(node.key)
        });
        if (!multiple) {
            toggleOpen(false);
        }
    };
    // =========================== Keys ===========================
    const [expandedKeys, setExpandedKeys] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](treeDefaultExpandedKeys);
    const [searchExpandedKeys, setSearchExpandedKeys] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const mergedExpandedKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (treeExpandedKeys) {
            return [
                ...treeExpandedKeys
            ];
        }
        return searchValue ? searchExpandedKeys : expandedKeys;
    }, [
        expandedKeys,
        searchExpandedKeys,
        treeExpandedKeys,
        searchValue
    ]);
    const onInternalExpand = (keys)=>{
        setExpandedKeys(keys);
        setSearchExpandedKeys(keys);
        if (onTreeExpand) {
            onTreeExpand(keys);
        }
    };
    // ========================== Search ==========================
    const lowerSearchValue = String(searchValue).toLowerCase();
    const filterTreeNode = (treeNode)=>{
        if (!lowerSearchValue) {
            return false;
        }
        return String(treeNode[treeNodeFilterProp]).toLowerCase().includes(lowerSearchValue);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (searchValue) {
            setSearchExpandedKeys((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllKeys"])(treeData, fieldNames));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        searchValue
    ]);
    // ========================= Disabled =========================
    // Cache disabled states in React state to ensure re-render when cache updates
    const [disabledCache, setDisabledCache] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Map());
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (leftMaxCount) {
            setDisabledCache(new Map());
        }
    }, [
        leftMaxCount
    ]);
    function getDisabledWithCache(node) {
        const value = node[fieldNames.value];
        if (!disabledCache.has(value)) {
            const entity = valueEntities.get(value);
            const isLeaf = (entity.children || []).length === 0;
            if (!isLeaf) {
                const checkableChildren = entity.children.filter((childTreeNode)=>!childTreeNode.node.disabled && !childTreeNode.node.disableCheckbox && !checkedKeys.includes(childTreeNode.node[fieldNames.value]));
                const checkableChildrenCount = checkableChildren.length;
                disabledCache.set(value, checkableChildrenCount > leftMaxCount);
            } else {
                disabledCache.set(value, false);
            }
        }
        return disabledCache.get(value);
    }
    const nodeDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])((node)=>{
        const nodeValue = node[fieldNames.value];
        if (checkedKeys.includes(nodeValue)) {
            return false;
        }
        if (leftMaxCount === null) {
            return false;
        }
        if (leftMaxCount <= 0) {
            return true;
        }
        // This is a low performance calculation
        if (leafCountOnly && leftMaxCount) {
            return getDisabledWithCache(node);
        }
        return false;
    });
    // ========================== Get First Selectable Node ==========================
    const getFirstMatchingNode = (nodes)=>{
        for (const node of nodes){
            if (node.disabled || node.selectable === false) {
                continue;
            }
            if (searchValue) {
                if (filterTreeNode(node)) {
                    return node;
                }
            } else {
                return node;
            }
            if (node[fieldNames.children]) {
                const matchInChildren = getFirstMatchingNode(node[fieldNames.children]);
                if (matchInChildren) {
                    return matchInChildren;
                }
            }
        }
        return null;
    };
    // ========================== Active ==========================
    const [activeKey, setActiveKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const activeEntity = keyEntities[activeKey];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!open) {
            return;
        }
        let nextActiveKey = null;
        const getFirstNode = ()=>{
            const firstNode = getFirstMatchingNode(memoTreeData);
            return firstNode ? firstNode[fieldNames.value] : null;
        };
        // single mode active first checked node
        if (!multiple && checkedKeys.length && !searchValue) {
            nextActiveKey = checkedKeys[0];
        } else {
            nextActiveKey = getFirstNode();
        }
        setActiveKey(nextActiveKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        open,
        searchValue
    ]);
    // ========================= Keyboard =========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>({
            scrollTo: treeRef.current?.scrollTo,
            onKeyDown: (event)=>{
                const { which } = event;
                switch(which){
                    // >>> Arrow keys
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].UP:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DOWN:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].LEFT:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].RIGHT:
                        treeRef.current?.onKeyDown(event);
                        break;
                    // >>> Select item
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ENTER:
                        {
                            if (activeEntity) {
                                const isNodeDisabled = nodeDisabled(activeEntity.node);
                                const { selectable, value, disabled } = activeEntity?.node || {};
                                if (selectable !== false && !disabled && !isNodeDisabled) {
                                    onInternalSelect(null, {
                                        node: {
                                            key: activeKey
                                        },
                                        selected: !checkedKeys.includes(value)
                                    });
                                }
                            }
                            break;
                        }
                    // >>> Close
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ESC:
                        {
                            toggleOpen(false);
                        }
                }
            },
            onKeyUp: ()=>{}
        }));
    const hasLoadDataFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>searchValue ? false : true, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        searchValue,
        treeExpandedKeys || expandedKeys
    ], ([preSearchValue], [nextSearchValue, nextExcludeSearchExpandedKeys])=>preSearchValue !== nextSearchValue && !!(nextSearchValue || nextExcludeSearchExpandedKeys));
    const syncLoadData = hasLoadDataFn ? loadData : null;
    // ========================== Render ==========================
    if (memoTreeData.length === 0) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
            role: "listbox",
            className: `${prefixCls}-empty`,
            onMouseDown: onListMouseDown
        }, notFoundContent);
    }
    const treeProps = {
        fieldNames
    };
    if (treeLoadedKeys) {
        treeProps.loadedKeys = treeLoadedKeys;
    }
    if (mergedExpandedKeys) {
        treeProps.expandedKeys = mergedExpandedKeys;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        onMouseDown: onListMouseDown
    }, activeEntity && open && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: HIDDEN_STYLE,
        "aria-live": "assertive"
    }, activeEntity.node.value), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstableContext"].Provider, {
        value: {
            nodeDisabled
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], _extends({
        classNames: treeClassNames?.popup,
        styles: styles?.popup,
        ref: treeRef,
        focusable: false,
        prefixCls: `${prefixCls}-tree`,
        treeData: memoTreeData,
        height: listHeight,
        itemHeight: listItemHeight,
        itemScrollOffset: listItemScrollOffset,
        virtual: virtual !== false && popupMatchSelectWidth !== false,
        multiple: multiple,
        icon: treeIcon,
        showIcon: showTreeIcon,
        switcherIcon: switcherIcon,
        showLine: treeLine,
        loadData: syncLoadData,
        motion: treeMotion,
        activeKey: activeKey,
        checkable: checkable,
        checkStrictly: true,
        checkedKeys: mergedCheckedKeys,
        selectedKeys: !checkable ? checkedKeys : [],
        defaultExpandAll: treeDefaultExpandAll,
        titleRender: treeTitleRender
    }, treeProps, {
        // Proxy event out
        onActiveChange: setActiveKey,
        onSelect: onInternalSelect,
        onCheck: onInternalSelect,
        onExpand: onInternalExpand,
        onLoad: onTreeLoad,
        filterTreeNode: filterTreeNode,
        expandAction: treeExpandAction,
        onScroll: onPopupScroll
    }))));
};
const RefOptionList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](OptionList);
if ("TURBOPACK compile-time truthy", 1) {
    RefOptionList.displayName = 'OptionList';
}
const __TURBOPACK__default__export__ = RefOptionList;
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/strategyUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHOW_ALL",
    ()=>SHOW_ALL,
    "SHOW_CHILD",
    ()=>SHOW_CHILD,
    "SHOW_PARENT",
    ()=>SHOW_PARENT,
    "formatStrategyValues",
    ()=>formatStrategyValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/valueUtil.js [app-ssr] (ecmascript)");
;
const SHOW_ALL = 'SHOW_ALL';
const SHOW_PARENT = 'SHOW_PARENT';
const SHOW_CHILD = 'SHOW_CHILD';
function formatStrategyValues(values, strategy, keyEntities, fieldNames) {
    const valueSet = new Set(values);
    if (strategy === SHOW_CHILD) {
        return values.filter((key)=>{
            const entity = keyEntities[key];
            return !entity || !entity.children || !entity.children.some(({ node })=>valueSet.has(node[fieldNames.value])) || !entity.children.every(({ node })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCheckDisabled"])(node) || valueSet.has(node[fieldNames.value]));
        });
    }
    if (strategy === SHOW_PARENT) {
        return values.filter((key)=>{
            const entity = keyEntities[key];
            const parent = entity ? entity.parent : null;
            return !parent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCheckDisabled"])(parent.node) || !valueSet.has(parent.key);
        });
    }
    return values;
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/warningPropsUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/valueUtil.js [app-ssr] (ecmascript)");
;
;
function warningProps(props) {
    const { searchPlaceholder, treeCheckStrictly, treeCheckable, labelInValue, value, multiple, showCheckedStrategy, maxCount } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!searchPlaceholder, '`searchPlaceholder` has been removed.');
    if (treeCheckStrictly && labelInValue === false) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '`treeCheckStrictly` will force set `labelInValue` to `true`.');
    }
    if (labelInValue || treeCheckStrictly) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(value).every((val)=>val && typeof val === 'object' && 'value' in val), 'Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead.');
    }
    if (treeCheckStrictly || multiple || treeCheckable) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!value || Array.isArray(value), '`value` should be an array when `TreeSelect` is checkable or multiple.');
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!Array.isArray(value), '`value` should not be array when `TreeSelect` is single mode.');
    }
    if (maxCount && (showCheckedStrategy === 'SHOW_ALL' && !treeCheckStrictly || showCheckedStrategy === 'SHOW_PARENT')) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '`maxCount` not work with `showCheckedStrategy=SHOW_ALL` (when `treeCheckStrictly=false`) or `showCheckedStrategy=SHOW_PARENT`.');
    }
}
const __TURBOPACK__default__export__ = warningProps;
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useSearchConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSearchConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useSearchConfig(showSearch, props) {
    const { searchValue, inputValue, onSearch, autoClearSearchValue, filterTreeNode, treeNodeFilterProp } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const isObject = typeof showSearch === 'object';
        const searchConfig = {
            searchValue: searchValue ?? inputValue,
            onSearch,
            autoClearSearchValue,
            filterTreeNode,
            treeNodeFilterProp,
            ...isObject ? showSearch : {}
        };
        return [
            isObject ? true : showSearch,
            searchConfig
        ];
    }, [
        showSearch,
        searchValue,
        inputValue,
        onSearch,
        autoClearSearchValue,
        filterTreeNode,
        treeNodeFilterProp
    ]);
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeSelect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$5$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.5.2_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/select/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$5$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BaseSelect$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.5.2_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/select/es/BaseSelect/index.js [app-ssr] (ecmascript) <export default as BaseSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/hooks/useId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.1.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree/es/utils/conductUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.8.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useCheckedKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useCheckedKeys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useDataEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useDataEntities.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useFilterTreeData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useFilterTreeData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useRefFunc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useRefFunc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useTreeData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useTreeData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$LegacyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/LegacyContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$OptionList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/OptionList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeSelectContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeSelectContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/legacyUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$strategyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/strategyUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/valueUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$warningPropsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/warningPropsUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useSearchConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/hooks/useSearchConfig.js [app-ssr] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function isRawValue(value) {
    return !value || typeof value !== 'object';
}
const TreeSelect = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { id, prefixCls = 'rc-tree-select', // Value
    value, defaultValue, onChange, onSelect, onDeselect, // Search
    showSearch, searchValue: legacySearchValue, inputValue: legacyinputValue, onSearch: legacyOnSearch, autoClearSearchValue: legacyAutoClearSearchValue, filterTreeNode: legacyFilterTreeNode, treeNodeFilterProp: legacytreeNodeFilterProp, // Selector
    showCheckedStrategy, treeNodeLabelProp, //  Mode
    multiple, treeCheckable, treeCheckStrictly, labelInValue, maxCount, // FieldNames
    fieldNames, // Data
    treeDataSimpleMode, treeData, children, loadData, treeLoadedKeys, onTreeLoad, // Expanded
    treeDefaultExpandAll, treeExpandedKeys, treeDefaultExpandedKeys, onTreeExpand, treeExpandAction, // Options
    virtual, listHeight = 200, listItemHeight = 20, listItemScrollOffset = 0, onPopupVisibleChange, popupMatchSelectWidth = true, // Tree
    treeLine, treeIcon, showTreeIcon, switcherIcon, treeMotion, treeTitleRender, onPopupScroll, classNames: treeSelectClassNames, styles, ...restProps } = props;
    const mergedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(id);
    const treeConduction = treeCheckable && !treeCheckStrictly;
    const mergedCheckable = treeCheckable || treeCheckStrictly;
    const mergedLabelInValue = treeCheckStrictly || labelInValue;
    const mergedMultiple = mergedCheckable || multiple;
    const searchProps = {
        searchValue: legacySearchValue,
        inputValue: legacyinputValue,
        onSearch: legacyOnSearch,
        autoClearSearchValue: legacyAutoClearSearchValue,
        filterTreeNode: legacyFilterTreeNode,
        treeNodeFilterProp: legacytreeNodeFilterProp
    };
    const [mergedShowSearch, searchConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useSearchConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(showSearch, searchProps);
    const { searchValue, onSearch, autoClearSearchValue = true, filterTreeNode, treeNodeFilterProp = 'value' } = searchConfig;
    const [internalValue, setInternalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(defaultValue, value);
    // `multiple` && `!treeCheckable` should be show all
    const mergedShowCheckedStrategy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!treeCheckable) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$strategyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOW_ALL"];
        }
        return showCheckedStrategy || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$strategyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOW_CHILD"];
    }, [
        showCheckedStrategy,
        treeCheckable
    ]);
    // ========================== Warning ===========================
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$warningPropsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props);
    }
    // ========================= FieldNames =========================
    const mergedFieldNames = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillFieldNames"])(fieldNames), /* eslint-disable react-hooks/exhaustive-deps */ [
        JSON.stringify(fieldNames)
    ]);
    // =========================== Search ===========================
    const [internalSearchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$8$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('', searchValue);
    const mergedSearchValue = internalSearchValue || '';
    const onInternalSearch = (searchText)=>{
        setSearchValue(searchText);
        onSearch?.(searchText);
    };
    // ============================ Data ============================
    // `useTreeData` only do convert of `children` or `simpleMode`.
    // Else will return origin `treeData` for perf consideration.
    // Do not do anything to loop the data.
    const mergedTreeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useTreeData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(treeData, children, treeDataSimpleMode);
    const { keyEntities, valueEntities } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useDataEntities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedTreeData, mergedFieldNames);
    /** Get `missingRawValues` which not exist in the tree yet */ const splitRawValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((newRawValues)=>{
        const missingRawValues = [];
        const existRawValues = [];
        // Keep missing value in the cache
        newRawValues.forEach((val)=>{
            if (valueEntities.has(val)) {
                existRawValues.push(val);
            } else {
                missingRawValues.push(val);
            }
        });
        return {
            missingRawValues,
            existRawValues
        };
    }, [
        valueEntities
    ]);
    // Filtered Tree
    const filteredTreeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useFilterTreeData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedTreeData, mergedSearchValue, {
        fieldNames: mergedFieldNames,
        treeNodeFilterProp,
        filterTreeNode
    });
    // =========================== Label ============================
    const getLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((item)=>{
        if (item) {
            if (treeNodeLabelProp) {
                return item[treeNodeLabelProp];
            }
            // Loop from fieldNames
            const { _title: titleList } = mergedFieldNames;
            for(let i = 0; i < titleList.length; i += 1){
                const title = item[titleList[i]];
                if (title !== undefined) {
                    return title;
                }
            }
        }
    }, [
        mergedFieldNames,
        treeNodeLabelProp
    ]);
    // ========================= Wrap Value =========================
    const toLabeledValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((draftValues)=>{
        const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(draftValues);
        return values.map((val)=>{
            if (isRawValue(val)) {
                return {
                    value: val
                };
            }
            return val;
        });
    }, []);
    const convert2LabelValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((draftValues)=>{
        const values = toLabeledValues(draftValues);
        return values.map((item)=>{
            let { label: rawLabel } = item;
            const { value: rawValue, halfChecked: rawHalfChecked } = item;
            let rawDisabled;
            const entity = valueEntities.get(rawValue);
            // Fill missing label & status
            if (entity) {
                rawLabel = treeTitleRender ? treeTitleRender(entity.node) : rawLabel ?? getLabel(entity.node);
                rawDisabled = entity.node.disabled;
            } else if (rawLabel === undefined) {
                // We try to find in current `labelInValue` value
                const labelInValueItem = toLabeledValues(internalValue).find((labeledItem)=>labeledItem.value === rawValue);
                rawLabel = labelInValueItem.label;
            }
            return {
                label: rawLabel,
                value: rawValue,
                halfChecked: rawHalfChecked,
                disabled: rawDisabled
            };
        });
    }, [
        valueEntities,
        getLabel,
        toLabeledValues,
        internalValue
    ]);
    // =========================== Values ===========================
    const rawMixedLabeledValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>toLabeledValues(internalValue === null ? [] : internalValue), [
        toLabeledValues,
        internalValue
    ]);
    // Split value into full check and half check
    const [rawLabeledValues, rawHalfLabeledValues] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const fullCheckValues = [];
        const halfCheckValues = [];
        rawMixedLabeledValues.forEach((item)=>{
            if (item.halfChecked) {
                halfCheckValues.push(item);
            } else {
                fullCheckValues.push(item);
            }
        });
        return [
            fullCheckValues,
            halfCheckValues
        ];
    }, [
        rawMixedLabeledValues
    ]);
    // const [mergedValues] = useCache(rawLabeledValues);
    const rawValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>rawLabeledValues.map((item)=>item.value), [
        rawLabeledValues
    ]);
    // Convert value to key. Will fill missed keys for conduct check.
    const [rawCheckedValues, rawHalfCheckedValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useCheckedKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rawLabeledValues, rawHalfLabeledValues, treeConduction, keyEntities);
    // Convert rawCheckedKeys to check strategy related values
    const displayValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        // Collect keys which need to show
        const displayKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$strategyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatStrategyValues"])(rawCheckedValues, mergedShowCheckedStrategy, keyEntities, mergedFieldNames);
        // Convert to value and filled with label
        const values = displayKeys.map((key)=>keyEntities[key]?.node?.[mergedFieldNames.value] ?? key);
        // Back fill with origin label
        const labeledValues = values.map((val)=>{
            const targetItem = rawLabeledValues.find((item)=>item.value === val);
            const label = labelInValue ? targetItem?.label : treeTitleRender?.(targetItem);
            return {
                value: val,
                label
            };
        });
        const rawDisplayValues = convert2LabelValues(labeledValues);
        const firstVal = rawDisplayValues[0];
        if (!mergedMultiple && firstVal && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNil"])(firstVal.value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNil"])(firstVal.label)) {
            return [];
        }
        return rawDisplayValues.map((item)=>({
                ...item,
                label: item.label ?? item.value
            }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mergedFieldNames,
        mergedMultiple,
        rawCheckedValues,
        rawLabeledValues,
        convert2LabelValues,
        mergedShowCheckedStrategy,
        keyEntities
    ]);
    const [cachedDisplayValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(displayValues);
    // ========================== MaxCount ==========================
    const mergedMaxCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (mergedMultiple && (mergedShowCheckedStrategy === 'SHOW_CHILD' || treeCheckStrictly || !treeCheckable)) {
            return maxCount;
        }
        return null;
    }, [
        maxCount,
        mergedMultiple,
        treeCheckStrictly,
        mergedShowCheckedStrategy,
        treeCheckable
    ]);
    // =========================== Change ===========================
    const triggerChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useRefFunc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((newRawValues, extra, source)=>{
        const formattedKeyList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$strategyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatStrategyValues"])(newRawValues, mergedShowCheckedStrategy, keyEntities, mergedFieldNames);
        // Not allow pass with `maxCount`
        if (mergedMaxCount && formattedKeyList.length > mergedMaxCount) {
            return;
        }
        const labeledValues = convert2LabelValues(newRawValues);
        setInternalValue(labeledValues);
        // Clean up if needed
        if (autoClearSearchValue) {
            setSearchValue('');
        }
        // Generate rest parameters is costly, so only do it when necessary
        if (onChange) {
            let eventValues = newRawValues;
            if (treeConduction) {
                eventValues = formattedKeyList.map((key)=>{
                    const entity = valueEntities.get(key);
                    return entity ? entity.node[mergedFieldNames.value] : key;
                });
            }
            const { triggerValue, selected } = extra || {
                triggerValue: undefined,
                selected: undefined
            };
            let returnRawValues = eventValues;
            // We need fill half check back
            if (treeCheckStrictly) {
                const halfValues = rawHalfLabeledValues.filter((item)=>!eventValues.includes(item.value));
                returnRawValues = [
                    ...returnRawValues,
                    ...halfValues
                ];
            }
            const returnLabeledValues = convert2LabelValues(returnRawValues);
            const additionalInfo = {
                // [Legacy] Always return as array contains label & value
                preValue: rawLabeledValues,
                triggerValue
            };
            // [Legacy] Fill legacy data if user query.
            // This is expansive that we only fill when user query
            // https://github.com/react-component/tree-select/blob/fe33eb7c27830c9ac70cd1fdb1ebbe7bc679c16a/src/Select.jsx
            let showPosition = true;
            if (treeCheckStrictly || source === 'selection' && !selected) {
                showPosition = false;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillAdditionalInfo"])(additionalInfo, triggerValue, newRawValues, mergedTreeData, showPosition, mergedFieldNames);
            if (mergedCheckable) {
                additionalInfo.checked = selected;
            } else {
                additionalInfo.selected = selected;
            }
            const returnValues = mergedLabelInValue ? returnLabeledValues : returnLabeledValues.map((item)=>item.value);
            onChange(mergedMultiple ? returnValues : returnValues[0], mergedLabelInValue ? null : returnLabeledValues.map((item)=>item.label), additionalInfo);
        }
    });
    // ========================== Options ===========================
    /** Trigger by option list */ const onOptionSelect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((selectedKey, { selected, source })=>{
        const entity = keyEntities[selectedKey];
        const node = entity?.node;
        const selectedValue = node?.[mergedFieldNames.value] ?? selectedKey;
        // Never be falsy but keep it safe
        if (!mergedMultiple) {
            // Single mode always set value
            triggerChange([
                selectedValue
            ], {
                selected: true,
                triggerValue: selectedValue
            }, 'option');
        } else {
            let newRawValues = selected ? [
                ...rawValues,
                selectedValue
            ] : rawCheckedValues.filter((v)=>v !== selectedValue);
            // Add keys if tree conduction
            if (treeConduction) {
                // Should keep missing values
                const { missingRawValues, existRawValues } = splitRawValues(newRawValues);
                const keyList = existRawValues.map((val)=>valueEntities.get(val).key);
                // Conduction by selected or not
                let checkedKeys;
                if (selected) {
                    ({ checkedKeys } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conductCheck"])(keyList, true, keyEntities));
                } else {
                    ({ checkedKeys } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conductCheck"])(keyList, {
                        checked: false,
                        halfCheckedKeys: rawHalfCheckedValues
                    }, keyEntities));
                }
                // Fill back of keys
                newRawValues = [
                    ...missingRawValues,
                    ...checkedKeys.map((key)=>keyEntities[key].node[mergedFieldNames.value])
                ];
            }
            triggerChange(newRawValues, {
                selected,
                triggerValue: selectedValue
            }, source || 'option');
        }
        // Trigger select event
        if (selected || !mergedMultiple) {
            onSelect?.(selectedValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillLegacyProps"])(node));
        } else {
            onDeselect?.(selectedValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillLegacyProps"])(node));
        }
    }, [
        splitRawValues,
        valueEntities,
        keyEntities,
        mergedFieldNames,
        mergedMultiple,
        rawValues,
        triggerChange,
        treeConduction,
        onSelect,
        onDeselect,
        rawCheckedValues,
        rawHalfCheckedValues,
        maxCount
    ]);
    // ========================== Dropdown ==========================
    const onInternalPopupVisibleChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((open)=>{
        if (onPopupVisibleChange) {
            onPopupVisibleChange(open);
        }
    }, [
        onPopupVisibleChange
    ]);
    // ====================== Display Change ========================
    const onDisplayValuesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$hooks$2f$useRefFunc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((newValues, info)=>{
        const newRawValues = newValues.map((item)=>item.value);
        if (info.type === 'clear') {
            triggerChange(newRawValues, {}, 'selection');
            return;
        }
        // TreeSelect only have multiple mode which means display change only has remove
        if (info.values.length) {
            onOptionSelect(info.values[0].value, {
                selected: false,
                source: 'selection'
            });
        }
    });
    // ========================== Context ===========================
    const treeSelectContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return {
            virtual,
            popupMatchSelectWidth,
            listHeight,
            listItemHeight,
            listItemScrollOffset,
            treeData: filteredTreeData,
            fieldNames: mergedFieldNames,
            onSelect: onOptionSelect,
            treeExpandAction,
            treeTitleRender,
            onPopupScroll,
            leftMaxCount: maxCount === undefined ? null : maxCount - cachedDisplayValues.length,
            leafCountOnly: mergedShowCheckedStrategy === 'SHOW_CHILD' && !treeCheckStrictly && !!treeCheckable,
            valueEntities,
            classNames: treeSelectClassNames,
            styles
        };
    }, [
        virtual,
        popupMatchSelectWidth,
        listHeight,
        listItemHeight,
        listItemScrollOffset,
        filteredTreeData,
        mergedFieldNames,
        onOptionSelect,
        treeExpandAction,
        treeTitleRender,
        onPopupScroll,
        maxCount,
        cachedDisplayValues.length,
        mergedShowCheckedStrategy,
        treeCheckStrictly,
        treeCheckable,
        valueEntities,
        treeSelectClassNames,
        styles
    ]);
    // ======================= Legacy Context =======================
    const legacyContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            checkable: mergedCheckable,
            loadData,
            treeLoadedKeys,
            onTreeLoad,
            checkedKeys: rawCheckedValues,
            halfCheckedKeys: rawHalfCheckedValues,
            treeDefaultExpandAll,
            treeExpandedKeys,
            treeDefaultExpandedKeys,
            onTreeExpand,
            treeIcon,
            treeMotion,
            showTreeIcon,
            switcherIcon,
            treeLine,
            treeNodeFilterProp,
            keyEntities
        }), [
        mergedCheckable,
        loadData,
        treeLoadedKeys,
        onTreeLoad,
        rawCheckedValues,
        rawHalfCheckedValues,
        treeDefaultExpandAll,
        treeExpandedKeys,
        treeDefaultExpandedKeys,
        onTreeExpand,
        treeIcon,
        treeMotion,
        showTreeIcon,
        switcherIcon,
        treeLine,
        treeNodeFilterProp,
        keyEntities
    ]);
    // =========================== Render ===========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeSelectContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: treeSelectContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$LegacyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: legacyContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$5$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BaseSelect$3e$__["BaseSelect"], _extends({
        ref: ref
    }, restProps, {
        classNames: treeSelectClassNames,
        styles: styles,
        id: mergedId,
        prefixCls: prefixCls,
        mode: mergedMultiple ? 'multiple' : undefined,
        displayValues: cachedDisplayValues,
        onDisplayValuesChange: onDisplayValuesChange,
        autoClearSearchValue: autoClearSearchValue,
        showSearch: mergedShowSearch,
        searchValue: mergedSearchValue,
        onSearch: onInternalSearch,
        OptionList: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$OptionList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        emptyOptions: !mergedTreeData.length,
        onPopupVisibleChange: onInternalPopupVisibleChange,
        popupMatchSelectWidth: popupMatchSelectWidth
    }))));
});
// Assign name for Debug
if ("TURBOPACK compile-time truthy", 1) {
    TreeSelect.displayName = 'TreeSelect';
}
const GenericTreeSelect = TreeSelect;
GenericTreeSelect.TreeNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
GenericTreeSelect.SHOW_ALL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$strategyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOW_ALL"];
GenericTreeSelect.SHOW_PARENT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$strategyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOW_PARENT"];
GenericTreeSelect.SHOW_CHILD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$strategyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOW_CHILD"];
const __TURBOPACK__default__export__ = GenericTreeSelect;
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeSelect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeSelect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$utils$2f$strategyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/utils/strategyUtil.js [app-ssr] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeSelect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeNode.js [app-ssr] (ecmascript) <export default as TreeNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TreeNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$2d$select$40$1$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$rc$2d$component$2f$tree$2d$select$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree-select@1.6.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@rc-component/tree-select/es/TreeNode.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=688be_%40rc-component_tree-select_es_ff471813._.js.map