const {sortPages}=require('../Logic/report.js')
const {test, expect}=require('@jest/globals')

test('sortPages 2 pages',()=>{
    const input ={
        'https://wagslane.dev':2,
        'https://wagslane.dev/path':8
    }
    const actual =sortPages(input)
    const expected=[
        ['https://wagslane.dev/path',8],
        ['https://wagslane.dev',2]
    ]
    expect(actual).toEqual(expected)
})
test('sortPages 2 pages',()=>{
    const input ={
        'https://wagslane.dev':2,
        'https://wagslane.dev/path':8,
        'https://wagslane.dev/path2':13,
        'https://wagslane.dev/path3':1,
        'https://wagslane.dev/path4':18
    }
    const actual =sortPages(input)
    const expected=[
        ['https://wagslane.dev/path4',18],
        ['https://wagslane.dev/path2',13],
        ['https://wagslane.dev/path',8],
        ['https://wagslane.dev',2],
        ['https://wagslane.dev/path3',1]
    ]
    expect(actual).toEqual(expected)
})