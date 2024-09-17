
//想添加到哪个位置，第一个就填哪个模块的ID名称。
//后面就是你要插入的widget名。可以同时添加多个。
//用obj表格模式写的话，能指定在某个特定passage里显示。passage也能同时指定多个。

//just put the zoneID(see the widget copy.twee at temp folder) to the first,
//then put your widget name or widget setting to next argument.
//also you can add a lot at once.

//simpleFrameworks.addto('iModHeader', 'aSimpleTest')
/*
simpleFrameworks.addto('ModMenuSmall', 'BridgeButton')
simpleFrameworks.addto('BeforeLinkZone', {
    passage:'Temple Cloister',
    widget:'LearnKamiMagic',
});
simpleFrameworks.addto('iModHeader', {
    passage:'Orphanage',
    widget:'touchpaint',
});
simpleFrameworks.addto('BeforeLinkZone', {
    passage:'Orphanage',
    widget:'RealWorldPaint',
});
simpleFrameworks.addto('iModCheats', 'KamiMaigcLearnCheat');
simpleFrameworks.addto('iModHeader', 'KamiMaigcChant');
simpleFrameworks.addto('iModHeader', 'amuleteffect');
simpleFrameworks.addto('iModReady', 'InvisableStart');
simpleFrameworks.addto('iModFooter', 'InvisableComplete');
simpleFrameworks.addto('iModFooter', 'KamiMaigc'); 
simpleFrameworks.addto('ModStatusBar', 'GraceBar')
simpleFrameworks.addto('ModCharaDescription', 'KamiMagicRecord')
simpleFrameworks.addto('ModCharaDescription', 'amuletstatus')
//Var
//KaMi
Object.defineProperty(window, 'KamiMagicCleanChant', { value:0 } )
Object.defineProperty(window, 'KamiMagicCleanLearned', { value:true } )
Object.defineProperty(window, 'RainBowBridgeChant', { value:0 } )
Object.defineProperty(window, 'RainBowBridgeLearned', { value:true } )
Object.defineProperty(window, 'KamiMagicHopeChant', { value:0 } )
Object.defineProperty(window, 'KamiMagicHopeLearned', { value:true } )
Object.defineProperty(window, 'KamiMagicHelpChant', { value:0 } )
Object.defineProperty(window, 'KamiMagicHelpLearned', { value:true } )
Object.defineProperty(window, 'KamiMagicHealthChant', { value:0 } )
Object.defineProperty(window, 'KamiMagicHealthLearned', { value:true } )
Object.defineProperty(window, 'KamiMagicLockChant', { value:0 } )
Object.defineProperty(window, 'KamiMagicLockLearned', { value:true } )
Object.defineProperty(window, 'KamiMagicLockValue', { value:0 } )
Object.defineProperty(window, 'KamiMagicLockActive', { value:false } )
Object.defineProperty(window, 'KamiMagicLockTimer', { value:0 } )
Object.defineProperty(window, 'KamiMagicLockTimerLocale', { value:0 } )
Object.defineProperty(window, 'KamiMagicInvisableChant', { value:0 } )
Object.defineProperty(window, 'KamiMagicInvisableLearned', { value:true } )
Object.defineProperty(window, 'KamiMagicInvisableValue', { value:0 } )
Object.defineProperty(window, 'KamiMagicInvisableActive', { value:false } )
Object.defineProperty(window, 'KamiMagicInvisableTimer', { value:0 } )
Object.defineProperty(window, 'KamiMagicInvisableTimerLocale', { value:0 } )
Object.defineProperty(window, 'KamiMagicJudgeChant', { value:0 } )
Object.defineProperty(window, 'KamiMagicJudgeLearned', { value:true } )
Object.defineProperty(window, 'KamiMagicPurgeChant', { value:0 } )
Object.defineProperty(window, 'KamiMagicPurgeLearned', { value:true } )
//Trigger
Object.defineProperty(window, 'canUseKamiMagic', { value:false } )
Object.defineProperty(window, 'haveKamiMagic', { value:false } )
Object.defineProperty(window, 'KamiMagicUseGrace', { value:true } )
Object.defineProperty(window, 'ShowKamiMagicMenu', { value:false } )
Object.defineProperty(window, 'KamiMagicDebug', { value:true } )
Object.defineProperty(window, 'ShowButton', { value:0 } )
//联动
Object.defineProperty(window, 'KamiMagicCconfig_bjxLinkage', { value:false } )
Object.defineProperty(window, 'KamiMagicCconfig_icrLinkage', { value:false } )
//GoldenYard
Object.defineProperty(window, 'GoldenYardMusicPlay', { value:false } )
Object.defineProperty(window, 'GoldenYardMusicIndex', { value:0 } )
Object.defineProperty(window, 'GoldenSkilTrain', { value:0 } )
//PaintWorld
Object.defineProperty(window, 'PaintWorldOpenEvent', { value:false } )
Object.defineProperty(window, 'PaintWorldTouchPaint', { value:false } )
Object.defineProperty(window, 'PaintWorldAmuletLost', { value:false } )
Object.defineProperty(window, 'PaintWorldAmuletStatus', { value:false } )
Object.defineProperty(window, 'PaintWorldAmuletActive', { value:false } )
//Button
simpleFrameworks.addto('iModOptions', 'KamiMagicConfig')
simpleFrameworks.addto('iModOptions', 'RButtonShow')
simpleFrameworks.addto('iModOptions', 'KamiMagicGrace')
simpleFrameworks.addto('iModOptions', 'LearnAllKamiMagic')






async function fetchDataAsync() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        //
        setup.LocationImages["goldenyard"] = {
            "folder":"golden_yard",
            "base":{
                "default":{
                    "condition":[
                        "(revive:eval)",
                        "(() => !Weather.isSnow)"
                    ],
                    "image":"base.png"
                },
                "snow":{
                    "condition":[
                        "(revive:eval)",
                        "(() => Weather.isSnow)"
                    ],
                    "image":"snow.png"
                }
            }
        }
    }
}

fetchDataAsync().then(data => { }).catch(err => { console.log("GoldenYard: Now Awake.") });
//simpleFrameworks.addto('ModCaptionDescription', 'TestCaption')
//simpleFrameworks.addto('ModCaptionAfterDescription', 'TestCaptionAfter')
//simpleFrameworks.addto('iModReady', 'newMoney')
/*
simpleFrameworks.addto('iModFooter', {
    passage:'Start', //set what passage your widget will show up
    widget:'aSimpleTest',
})


simpleFrameworks.addto('iModFooter', {
    passage:['Start', 'Home'], //this can be array, then your widget only show up at certain passage
    widget:'aSimpleTest',
})

//also can add a lot at once
simpleFrameworks.addto('iModFooter', {passage:'Start', widget:'aSimpleTest'}, {passage:'Start', widget:'aSimpleTest'},{passage:'Start', widget:'aSimpleTest'},{passage:'Start', widget:'aSimpleTest'},{passage:'Start', widget:'aSimpleTest'},)*/

/**
 
'Furniture Shop Papers':[
    {
        src:'<<set _normalisedName to Util.escape(_chosenWallpaperCustom).replace(/\[/g, "&#91;").replace(/\]/g, "&#93;")>>',
        to:'<<set _normalisedName to _chosenWallpaperCustom>>'
    }
],
  
 */

//Object.defineProperty(window, 'dyeNames', { value:[] } )
//Object.defineProperty(window, 'hairColor', { value:[] } )
//V.customhaircolor1 = V.customhaircolor1!=null ? V.customhaircolor1 : "#FFFFFF"
//simpleFrameworks.addto('iModOptions', 'CustomHairColor1')
simpleFrameworks.addto('iModHeader', 'LoadCustomColor');


async function fetchDataAsync_customhair() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        /*
        for (let id in ModClothes) {
            if (ModClothes[id].length > 0) {
                for (var i = 0; i < ModClothes[id].length; i++) {
                    setup.clothes[id].push(ModClothes[id][i])
                    setup.clothes[id][setup.clothes[id].length-1].index = setup.clothes[id].length-1
                }
            }
        }
        for (let id in NunClothes) {
            if (NunClothes[id].length > 0) {
                for (var i = 0; i < NunClothes[id].length; i++) {
                    setup.clothes[id].push(NunClothes[id][i])
                    setup.clothes[id][setup.clothes[id].length-1].index = setup.clothes[id].length-1
                }
            }
        }
            */


        setup.customhairs = {}
        setup.customhairs.dyeNames = []
        setup.customhairs.hairColor = []

        setup.colours.hair.push({
            "variable": "customcolor1",
            "name": "自定义颜色1",
            "name_cap": "自定义颜色1",
            "csstext": "customcolor1hair",
            "natural": false,
            "dye": true,
            "canvasfilter": {
                "blend":  "#FFFFFF",
                "blendMode": "hard-light"
            }
        })
        setup.colours.hair.push({
            "variable": "customcolor2",
            "name": "自定义颜色2",
            "name_cap": "自定义颜色2",
            "csstext": "customcolor2hair",
            "natural": false,
            "dye": true,
            "canvasfilter": {
                "blend":  "#FFFFFF",
                "blendMode": "hard-light"
            }
        })
        setup.colours.hair.push({
            "variable": "customcolor3",
            "name": "自定义颜色3",
            "name_cap": "自定义颜色3",
            "csstext": "customcolor3hair",
            "natural": false,
            "dye": true,
            "canvasfilter": {
                "blend":  "#FFFFFF",
                "blendMode": "hard-light"
            }
        })
        setup.colours.hair.push({
            "variable": "customcolor4",
            "name": "自定义颜色4",
            "name_cap": "自定义颜色4",
            "csstext": "customcolor4hair",
            "natural": false,
            "dye": true,
            "canvasfilter": {
                "blend":  "#FFFFFF",
                "blendMode": "hard-light"
            }
        })
        setup.colours.hair_map.customcolor1 = {
            "variable": "customcolor1",
            "name": "自定义颜色1",
            "name_cap": "自定义颜色1",
            "csstext": "customcolor1hair",
            "natural": false,
            "dye": true,
            "canvasfilter": {
                "blend": "#FFFFFF",
                "brightness": 0.3,
                "blendMode": "hard-light"
            }
        }
        setup.colours.hair_map.customcolor2 = {
            "variable": "customcolor2",
            "name": "自定义颜色2",
            "name_cap": "自定义颜色2",
            "csstext": "customcolor2hair",
            "natural": false,
            "dye": true,
            "canvasfilter": {
                "blend": "#FFFFFF",
                "brightness": 0.3,
                "blendMode": "hard-light"
            }
        }
        setup.colours.hair_map.customcolor3 = {
            "variable": "customcolor3",
            "name": "自定义颜色3",
            "name_cap": "自定义颜色3",
            "csstext": "customcolor3hair",
            "natural": false,
            "dye": true,
            "canvasfilter": {
                "blend": "#FFFFFF",
                "brightness": 0.3,
                "blendMode": "hard-light"
            }
        }
        setup.colours.hair_map.customcolor4 = {
            "variable": "customcolor4",
            "name": "自定义颜色4",
            "name_cap": "自定义颜色4",
            "csstext": "customcolor4hair",
            "natural": false,
            "dye": true,
            "canvasfilter": {
                "blend": "#FFFFFF",
                "brightness": 0.3,
                "blendMode": "hard-light"
            }
        }
        var dyeNames = []
        var hairColor = []
        for (var i = 1; i < setup.colours.hair.length; i++) {
            dyeNames.push(setup.colours.hair[i].name_cap)
            hairColor.push(setup.colours.hair[i].variable)
        }
        //V.testkey = "机魂大悦"
        //V.dyeNames = dyeNames
        //V.hairColor = hairColor
        setup.customhairs.dyeNames = dyeNames
        setup.customhairs.hairColor = hairColor
    }
}
fetchDataAsync_customhair().then(data => { }).catch(err => {
    console.log("CustomHairLoadSuccessful.")


});