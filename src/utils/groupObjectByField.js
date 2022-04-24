// const list = [
//     {
//         'name': 'Display',
//         'group': '12/10/2022',
//         'id': '60',
//         'value': 12
//     },
//     {
//         'name': 'Manufacturer',
//         'group': '12/10/2022',
//         'id': '58',
//         'value': 52
//     },
//     {
//         'name': 'OS',
//         'group': '13/10/2022',
//         'id': '37',
//         'value': 42
//     }
// ];

export function groupObjectByField(list, key, countKey) {
    const groups = list.reduce((groups, item) => {
        const group = (groups[item[key]] || []);
        group.push(item);
        groups[item[key]] = group;
        return groups;
    }, {});

    for (const key in groups) {
        const result = groups[key].reduce((total, currentValue) => total + currentValue[countKey], 0) / groups[key].length;
        groups[key] = Math.ceil(result);
    }
      
    return groups;
}

// console.log(groupObjectByField(list, 'group', 'value'));