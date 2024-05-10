exports.entityTypes = [
  {
    name: "Unknown Class",
    bodyShape: 8,
    barrels: [],
  },
  {
    name: "Spectator",
    fieldFactor: 10,
    bodyShape: 0,
    barrels: [],
  },
  {
    name: "Portal",
    fieldFactor: 4,
    bodyShape: 8,
    shell: {
      shape: 3,
      color: 1,
      spinning: true,
      spinSpeed: 3,
      size: 1.7,
      shape: 3
    },
    barrels: []
  },
  {
    name: "Nova",
    bodyShape: 6,
    sizeFactor: 10,
    fieldFactor: 1.21,
    barrels: [],
  },
  {
    name: "Particle",
    fieldFactor: 1,
    bodyShape: 0,
    barrels: []
  },
  {
    name: "Coin",
    bodyShape: 8,
    fieldFactor: 1,
    barrels: [],
  },
  {
    name: "Shrub",
    bodyShape: 6,
    sizeFactor: 10,
    fieldFactor: 1.21,
    shell: {
      shape: 6,
      spinning: true,
      spinSpeed: .1,
      color: 8,
      size: 1.25,
    },
    barrels: [],
  },
  {
    name: "Pentagon",
    bodyShape: 5,
    fieldFactor: 1,
    barrels: [],
  },
  {
    name: "Hexagon",
    bodyShape: 6,
    fieldFactor: 1,
    barrels: [],
  },
  {
    name: "Heptagon",
    bodyShape: 7,
    fieldFactor: 1,
    barrels: [],
  },
  {
    name: "Octagon",
    bodyShape: 8,
    fieldFactor: 1,
    barrels: [],
  },
  {
    name: "Bullet",
    bodyShape: 3,
    fieldFactor: 1,
    barrels: [],
  },
  {
    name: "Drone",
    bodyShape: 6,
    fieldFactor: 1,
    barrels: [],
  },
  {
    name: "Tank",
    bodyShape: 5,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1},
      },
      {
        canShoot: false,
        angle: 0,
        offset: 0,
        height: 1.3,
        width: 0.9,
        trapezoidWidth: -0.3,
      },
    ],
  },
  {
    name: "Twin",
    bodyShape: 5,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 0,
        offset: -0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
    ],
  },
  {
    name: "Flank Guard",
    bodyShape: 6,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 180,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
    ],
  },
  {
    name: "Sniper",
    bodyShape: 5,
    fieldFactor: 1.2,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 2.2,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1.25,
        bullet: {
          damageFactor: 1.1,
          rangeFactor: 1.1,
          penFactor: 1.1,
          spdFactor: 1.5,
          sprFactor: 0.4,
        },
      },
    ],
  },
  {
    name: "Ranger",
    bodyShape: 5,
    fieldFactor: 1.4,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 2.5,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 2.5,
        bullet: {
          damageFactor: 1.3,
          rangeFactor: 1.3,
          penFactor: 1.5,
          spdFactor: 1.5,
          sprFactor: 0.2,
        },
      },
      {
        canShoot: false,
        angle: 0,
        offset: 0,
        height: 1.3,
        width: 0.9,
        trapezoidWidth: -0.3,
      },
    ],
  },
  {
    name: "Vanguard",
    bodyShape: 5,
    fieldFactor: 1.5,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 3,
        width: 1,
        recoil: 1.5,
        delay: 0,
        canShoot: false,
        reload: 5,
      },
      {
        angle: 0,
        offset: 0,
        height: 2,
        width: 1,
        recoil: 5,
        delay: 0,
        reload: 2.2,
        bullet: { damageFactor: 1, rangeFactor: 1.5, penFactor: 1, spdFactor: 1.8 },
      },
      {
        angle: -10,
        offset: .8,
        height: 1.8,
        width: 0.2,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: .5, rangeFactor: 0.8, penFactor: 1, spdFactor: 1.2 },
      },
      {
        angle: 10,
        offset: -.8,
        height: 1.8,
        width: 0.2,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: .5, rangeFactor: 0.8, penFactor: 1, spdFactor: 1.2 },
      },
    ],
  },
  {
    name: "Mothership",
    canMove: false,
    bodyShape: 16,
    fieldFactor: 1.5,
    sizeFactor: 3,
    barrels: (function () {
      let output = [];
      for (let i = 0; i < 16; i++) {
        output.push({
          angle: i * (360 / 16),
          offset: 0,
          height: 1.3,
          width: 0.2,
          recoil: 1,
          delay: 0,
          reload: 1,
          trapezoidWidth: 0.1,
          bullet: {
            damageFactor: 1,
            rangeFactor: 1,
            penFactor: 1,
            spdFactor: 1,
          },
        });
      }
      return output;
    })(),
  },
  {
    name: "Tri-Angle",
    bodyShape: 6,
    fieldFactor: 1,
    spdFactor: 1.25,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 210,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 1.75,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
      {
        angle: 150,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 1.75,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
    ],
  },
  {
    name: "Dominator",
    bodyShape: 0,
    fieldFactor: 2,
    spdFactor: 0,
    sizeFactor: 3,
    hltFactor: 16,
    canMove: false,
    shell: {
      shape: 6,
      spinning: false,
      spinSpeed: 0,
      color: 8,
      size: 1.25,
    },
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.6,
        width: 0.8,
        recoil: 1,
        delay: 0,
        reload: 6,
        bullet: {
          damageFactor: 10,
          rangeFactor: 1,
          penFactor: 100,
          spdFactor: 0.8,
          sprFactor: 0.5,
        },
      },
      {
        canShoot: false,
        angle: 0,
        offset: 0,
        height: 1.2,
        width: 0.8,
        trapezoidWidth: -0.45,
      },
    ],
  },
  {
    name: "Predadom",
    bodyShape: 0,
    fieldFactor: 2,
    spdFactor: 0,
    sizeFactor: 3,
    hltFactor: 16,
    canMove: false,
    shell: {
      shape: 6,
      spinning: false,
      spinSpeed: 0,
      color: 8,
      size: 1.25,
    },
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 2.6,
        width: 0.9,
        recoil: 1,
        delay: 4,
        reload: 6,
        bullet: {
          damageFactor: 10,
          rangeFactor: 1,
          penFactor: 100,
          spdFactor: 0.8,
          sprFactor: 0.5,
        },
      },
      {
        angle: 0,
        offset: 0,
        height: 2.3,
        width: 1.2,
        recoil: 1,
        delay: 2,
        reload: 6,
        bullet: {
          damageFactor: 10,
          rangeFactor: 1,
          penFactor: 100,
          spdFactor: 0.8,
          sprFactor: 0.5,
        },
      },
      {
        angle: 0,
        offset: 0,
        height: 2,
        width: 1.5,
        recoil: 1,
        delay: 0,
        reload: 6,
        bullet: {
          damageFactor: 10,
          rangeFactor: 1,
          penFactor: 100,
          spdFactor: 0.8,
          sprFactor: 0.5,
        },
      },
      {
        canShoot: false,
        angle: 0,
        offset: 0,
        height: 1.1,
        width: 1.5,
        trapezoidWidth: -0.2,
      },
    ],
  },
  {
    name: "Arena Closer",
    bodyShape: 5,
    fieldFactor: 2,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 100,
          rangeFactor: 0.8,
          penFactor: 900,
          spdFactor: 2.5,
          sprFactor: 0.5,
        },
      },
    ],
  },
  {
    name: "Smasher",
    bodyShape: 6,
    fieldFactor: 1.25,
    spdFactor: 1.25,
    hltFactor: 2,
    shell: {
      shape: 6,
      spinning: true,
      spinSpeed: 2,
      color: 8,
      size: 1.25,
    },
    barrels: [],
    //barrels: [{ angle: 0, offset: 0, height: 1.8, width: 0.9, recoil: 0.25, delay: 0, reload: 1, bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1, }, }, { angle: 180, offset: 0, height: 1.7, width: 1, recoil: 3, delay: 0, reload: 0.75, trapezoidWidth: -0.1, bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1, }, }],
  },
  {
    name: "Mega Smasher",
    bodyShape: 6,
    fieldFactor: 1.25,
    spdFactor: 1,
    hltFactor: 2,
    shell: {
      shape: 6,
      spinning: true,
      spinSpeed: 1.5,
      color: 8,
      size: 1.4,
    },
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.9,
        recoil: 5,
        delay: 0,
        reload: 3,
        bullet: {
          damageFactor: 5,
          rangeFactor: 1,
          penFactor: 1,
          spdFactor: 0.7,
        },
      },
    ],
    //barrels: [{ angle: 0, offset: 0, height: 1.8, width: 0.9, recoil: 0.25, delay: 0, reload: 1, bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1, }, }, { angle: 180, offset: 0, height: 1.7, width: 1, recoil: 3, delay: 0, reload: 0.75, trapezoidWidth: -0.1, bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1, }, }],
  },
  {
    name: "Fighter",
    bodyShape: 5,
    fieldFactor: 1,
    spdFactor: 1.25,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.9,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 210,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 1.75,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
      {
        angle: 150,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 1.75,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
      {
        angle: 90,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
      {
        angle: 180 + 90,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
    ],
  },
  {
    name: "Penta Shot",
    bodyShape: 6,
    fieldFactor: 1,
    barrels: [
      {
        angle: -40,
        offset: -0.2,
        height: 1.4,
        width: 0.9,
        recoil: 1,
        delay: 1,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 40,
        offset: 0.2,
        height: 1.4,
        width: 0.9,
        recoil: 1,
        delay: 1,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 20,
        offset: 0.15,
        height: 1.7,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: -20,
        offset: -0.15,
        height: 1.7,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 0,
        offset: 0,
        height: 1.9,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
    ],
  },
  {
    name: "Booster",
    bodyShape: 5,
    fieldFactor: 1,
    spdFactor: 1.25,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.9,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 140,
        offset: -0.1,
        height: 1.35,
        width: 0.9,
        recoil: 1.75,
        delay: 0.9,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
      {
        angle: 220,
        offset: 0.1,
        height: 1.35,
        width: 0.9,
        recoil: 1.75,
        delay: 0.9,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
      {
        angle: 210,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 1.75,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
      {
        angle: 150,
        offset: 0,
        height: 1.5,
        width: 0.9,
        recoil: 1.75,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.5,
          rangeFactor: 0.75,
          penFactor: 0.7,
          spdFactor: 1,
        },
      },
    ],
  },
  {
    name: "Hybrid",
    bodyShape: 6,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.9,
        width: 1.5,
        recoil: 7.5,
        delay: 0,
        reload: 4,
        bullet: {
          damageFactor: 10,
          rangeFactor: 2,
          penFactor: 2,
          spdFactor: 0.97,
        },
      },
      {
        angle: 180,
        offset: 0,
        height: 1.4,
        width: 0.9,
        recoil: 7.5,
        delay: 0,
        reload: 4,
        trapezoidWidth: 0.25,
        bullet: {
          damageFactor: 10,
          rangeFactor: 2,
          penFactor: 2,
          spdFactor: 0.7,
          type: "bDrone",
        },
      },
    ],
  },
  {
    name: "Overseer",
    bodyShape: 6,
    fieldFactor: 1.2,
    barrels: [
      {
        angle: 270,
        offset: 0,
        height: 1.4,
        width: 0.9,
        recoil: 7.5,
        delay: 0,
        reload: 4,
        trapezoidWidth: 0.25,
        bullet: {
          damageFactor: 10,
          rangeFactor: 2,
          penFactor: 2,
          spdFactor: 0.97,
          type: "Drone",
        },
      },
      {
        angle: 90,
        offset: 0,
        height: 1.4,
        width: 0.9,
        recoil: 7.5,
        delay: 0,
        reload: 4,
        trapezoidWidth: 0.25,
        bullet: {
          damageFactor: 10,
          rangeFactor: 2,
          penFactor: 2,
          spdFactor: 0.97,
          type: "Drone",
        },
      },
    ],
  },
  {
    name: "Overlord",
    bodyShape: 6,
    fieldFactor: 1.2,
    barrels: (function (output = []) {
      for (let i = 0; i < 4; i++) {
        output.push({
          angle: i * 90,
          offset: 0,
          height: 1.4,
          width: 0.9,
          recoil: 7.5,
          delay: 0,
          reload: 4,
          trapezoidWidth: 0.25,
          bullet: {
            damageFactor: 10,
            rangeFactor: 2,
            penFactor: 2,
            spdFactor: 0.97,
            type: "bDrone",
          },
        });
      }
      return output;
    })(),
  },
  {
    name: "Flank Penta Shot",
    bodyShape: 8,
    fieldFactor: 1,
    barrels: [
      {
        angle: -40,
        offset: -0.2,
        height: 1.4,
        width: 0.9,
        recoil: 1,
        delay: 1,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 40,
        offset: 0.2,
        height: 1.4,
        width: 0.9,
        recoil: 1,
        delay: 1,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 20,
        offset: 0.15,
        height: 1.7,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: -20,
        offset: -0.15,
        height: 1.7,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 0,
        offset: 0,
        height: 1.9,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      //
      {
        angle: -40 + 180,
        offset: -0.2,
        height: 1.4,
        width: 0.9,
        recoil: 1,
        delay: 1,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 40 + 180,
        offset: 0.2,
        height: 1.4,
        width: 0.9,
        recoil: 1,
        delay: 1,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 20 + 180,
        offset: 0.15,
        height: 1.7,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: -20 + 180,
        offset: -0.15,
        height: 1.7,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 0 + 180,
        offset: 0,
        height: 1.9,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
    ],
  },
  {
    name: "Twin Flank",
    bodyShape: 8,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 0,
        offset: -0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 180,
        offset: 0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 180,
        offset: -0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
    ],
  },
  {
    name: "Triple Twin",
    bodyShape: 8,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 0,
        offset: -0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 120,
        offset: 0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 120,
        offset: -0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 240,
        offset: 0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 240,
        offset: -0.5,
        height: 1.8,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
    ],
  },
  {
    name: "Auto Turret",
    bodyShape: 0,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 2,
        width: 1,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
    ],
  },
  {
    name: "Triple Shot",
    bodyShape: 5,
    fieldFactor: 1,
    barrels: [
      {
        angle: 20,
        offset: 0.15,
        height: 1.7,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: -20,
        offset: -0.15,
        height: 1.7,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 0,
        offset: 0,
        height: 1.9,
        width: 0.9,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
    ],
  },
  //admin tanks
  {
    name: "Radicalisionist",
    bodyShape: 0,
    fieldFactor: 1,
    color: 4,
    shell: {
      shape: 6,
      size: 1.3,
      spinning: true,
      spinSpeed: 2,
      color: 8
    },
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 4.9,
        width: 0.85,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 2 },
      },
      {
        angle: 0,
        offset: 0,
        height: 4.25,
        width: 0.85,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 2 },
      },
      {
        angle: 0,
        offset: 0,
        height: 3.6,
        width: 0.85,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 2 },
      },
      {
        angle: 0,
        offset: 0,
        height: 2.95,
        width: 0.85,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 2 },
      },
      {
        angle: 0,
        offset: 0,
        height: 2.35,
        width: 0.85,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 2 },
      },
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.85,
        recoil: 0,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 2 },
      },
      {
        angle: 180,
        offset: 0.5,
        height: 1.4,
        width: 0.6,
        recoil: 3,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 180,
        offset: -0.5,
        height: 1.4,
        width: 0.6,
        recoil: 3,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        angle: 180,
        offset: 0,
        height: 1.7,
        width: 0.6,
        recoil: 3,
        delay: 0,
        reload: 1,
        bullet: { damageFactor: 1, rangeFactor: 1, penFactor: 1, spdFactor: 1 },
      },
      {
        canShoot: false,
        angle: 0,
        offset: 0,
        height: 1.4,
        width: 1,
        trapezoidWidth: -0.1,
      },
    ],
  },
  {
    name: "Quasar",
    bodyShape: 3,
    sizeFactor: 1.7,
    fieldFactor: 1.21,
    barrels: (function(output = []) {
      for (let i = 0; i < 3; i++) {
        output.push({
          angle: (360 * i) / 3,
          offset: 0.45,
          height: 1.1,
          width: 0.6,
          recoil: 0,
          reload: 1,
          delay: 0,
          bullet: {
            damageFactor: 1.65,
            rangeFactor: 1,
            penFactor: 1.22,
            spdFactor: 1
          }
        }, {
          angle: (360 * i) / 3,
          offset: -0.45,
          height: 1.1,
          width: 0.6,
          recoil: 0,
          reload: 1,
          delay: 0,
          bullet: {
            damageFactor: 1.65,
            rangeFactor: 1,
            penFactor: 1.22,
            spdFactor: 1
          }
        },{
          angle: (360 * i) / 3,
          offset: 0,
          height: 1.2,
          width: 0.6,
          recoil: 0,
          reload: 1,
          delay: 0.5,
          bullet: {
            damageFactor: 1.65,
            rangeFactor: 1,
            penFactor: 1.22,
            spdFactor: 1
          }
        })
      }
      return output
    })()
  },
  {
    name: "PolyBlazar 😈",
    spdFactor: 0.55,
    bodyShape: 6,
    sizeFactor: 1.2,
    fieldFactor: 1,
    barrels: (function(output = []) {
      for (let i = 0; i < 3; i++) {
        output.push({
          angle: (360 * i) / 3,
          offset: 0,
          height: 1.2,
          width: 1,
          recoil: 0,
          reload: 6,
          delay: 0,
          bullet: {
            damageFactor: 2,
            rangeFactor: 1,
            penFactor: 2.87,
            spdFactor: 0.8
          }
        })
      }
      return output
    })()
  },

  // Bosses
  {
    name: "PolyBrute 😈",
    bodyShape: 6,
    sizeFactor: 2.2,
    hltFactor: 12,
    fieldFactor: 1.3,
    spdFactor: .2,
    shell: {
      shape: 6,
      size: 1.45,
      spinning: true,
      spinSpeed: 1,
      color: 8
    },
    barrels: (function(output = []) {
      for (let i = 0; i < 3; i++) {
        output.push({
          angle: (360 / 3) * i,
          offset: 0,
          height: 1.3,
          width: 1.1,
          recoil: 0,
          reload: 4.25,
          delay: 0,
          bullet: {
            damageFactor: 3,
            penFactor: 2,
            spdFactor: 0.5
          }
        }, {
          angle: (360 / 3) * (i+0.5),
          offset: 0,
          height: 2,
          width: 1.15,
          recoil: 0,
          reload: 10,
          delay: 0,
          bullet: {
            damageFactor: 5.2,
            penFactor: 5,
            spdFactor: 0.5
          }
        })
      }
      return output
    })(),
  },
  {
    name: "Corrupted PolyBot 😈",
    bodyShape: 5,
    sizeFactor: 2.6,
    spdFactor: 0.2,
    shell: {
      size: 1.3,
      shape: 5,
      spinning: true,
      spinSpeed: -3,
      color: 8
    },
    hltFacotr: 50,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.5,
        width: 0.3,
        recoil: 1,
        delay: 0,
        reload: 1,
        trapezoidWidth: 0.7,
        canShoot: false,
      },
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 1.3,
        recoil: 25,
        delay: 0,
        reload: 15,
        bullet: {
          damageFactor: 3,
          rangeFactor: 1,
          penFactor: 10,
          spdFactor: .7
        },
      }
    ]
  },
  {
    name: "Dominator",
    bodyShape: 8,
    sizeFactor: 2.2,
    hltFactor: 12,
    fieldFactor: 1.3,
    shell: {
      shape: 3,
      size: 2,
      spinning: true,
      spinSpeed: 4,
      color: 4
    },
    barrels: (function(output = []) {
      for (let i = 0; i < 4; i++) {
        output.push({
          angle: (360 / 4) * i,
          offset: 0,
          height: 2.2,
          width: 0.35,
          recoil: 0.55,
          delay: 0,
          reload: 1,
          trapezoidWidth: 0.15,
          bullet: {
            damageFactor: 0.97,
            rangeFactor: 1,
            penFactor: 0.97,
            spdFactor: 1.05,
            sprFactor: 4
          }
        },
        {
          angle: (360 / 4) * i,
          offset: 0,
          height: 1.8,
          width: 0.5,
          recoil: 0.55,
          delay: 0,
          reload: 0.7,
          trapezoidWidth: 0.15,
          bullet: {
            damageFactor: 0.97,
            rangeFactor: 1,
            penFactor: 0.97,
            spdFactor: 1.05,
            sprFactor: 4
          }
        },{
          angle: (360 / 4) * (i+.5),
          offset: 0,
          height: 1.8,
          width: 0.5,
          recoil: 0.55,
          delay: 0,
          reload: 0.7,
          trapezoidWidth: 0.15,
          bullet: {
            damageFactor: 0.97,
            rangeFactor: 1,
            penFactor: 0.97,
            spdFactor: 1.05,
            sprFactor: 4
          }
        })
      }
      return output
    })(),
  },
  {
    name: "Mega Sprayer",
    bodyShape: 6,
    hltFactor: 17,
    spdFactor: 1.1,
    color: 3,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 2.2,
        width: 0.45,
        recoil: 1,
        delay: 0,
        reload: .8,
        trapezoidWidth: -0.2,
        bullet: {
          damageFactor: 2,
          rangeFactor: 1,
          penFactor: 1.5,
          spdFactor: 1.2,
        }
      },
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.55,
        recoil: 0.45,
        delay: 0,
        reload: .8,
        trapezoidWidth: 0.2,
        bullet: {
          damageFactor: 1,
          rangeFactor: .5,
          penFactor: 0.8,
          spdFactor: 1.05,
          sprFactor: 4
        }
      },
      {
        angle: 180,
        offset: 0,
        height: 1.4,
        width: 0.7,
        recoil: 0.45,
        delay: 0,
        reload: .3,
        trapezoidWidth: 0.4,
        bullet: {
          damageFactor: 0.4,
          rangeFactor: .5,
          penFactor: 0.6,
          spdFactor: 1.05,
          sprFactor: 8,
        }
      }
    ]
  },
  {
    name: "Annihilator",
    bodyShape: 5,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.9,
        width: 1.9,
        recoil: 10,
        delay: 0,
        reload: 4,
        bullet: {
          damageFactor: 10,
          rangeFactor: 2,
          penFactor: 2,
          spdFactor: 0.97,
        },
      },
    ],
  },
  {
    name: "Pounder",
    bodyShape: 5,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.9,
        width: 1.4,
        recoil: 5,
        delay: 0,
        reload: 3,
        bullet: {
          damageFactor: 4,
          rangeFactor: 2,
          penFactor: 2,
          spdFactor: 0.97,
        },
      },
    ],
  },
  {
    name: "Destroyer",
    bodyShape: 5,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.9,
        width: 1.5,
        recoil: 7.5,
        delay: 0,
        reload: 4,
        bullet: {
          damageFactor: 10,
          rangeFactor: 2,
          penFactor: 2,
          spdFactor: 0.97,
        },
      },
    ],
  },
  {
    name: "Machine Gun",
    bodyShape: 6,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.9,
        recoil: 0.5,
        delay: 0,
        reload: 0.5,
        trapezoidWidth: 0.15,
        bullet: {
          damageFactor: 0.97,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1.05,
          sprFactor: 4,
        },
      },
    ],
  },
  {
    name: "Sprayer",
    bodyShape: 6,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 2.2,
        width: 0.9,
        recoil: 0.55,
        delay: 0,
        reload: 0.825,
        bullet: {
          damageFactor: 0.97,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1.05,
          sprFactor: 2
        }
      },
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 0.9,
        recoil: 0.55,
        delay: 0,
        reload: 0.525,
        trapezoidWidth: 0.15,
        bullet: {
          damageFactor: 0.97,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1.05,
          sprFactor: 4
        }
      }
    ]
  },
  {
    name: "Negev",
    bodyShape: 5,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 1.3,
        recoil: 3,
        delay: 0,
        reload: 1.5,
        trapezoidWidth: 0.15,
        bullet: {
          damageFactor: 0.97,
          rangeFactor: 1.25,
          penFactor: 0.97,
          spdFactor: 1.05,
          sprFactor: 2,
        },
      },
    ],
  },
  {
    name: "Triplet",
    bodyShape: 5,
    fieldFactor: 1,
    barrels: [
      {
        angle: 0,
        offset: 0.5,
        height: 1.5,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 0,
        offset: -0.5,
        height: 1.5,
        width: 0.9,
        recoil: 1,
        delay: 0.5,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
      {
        angle: 0,
        offset: 0,
        height: 1.8,
        width: 1,
        recoil: 1,
        delay: 0,
        reload: 1,
        bullet: {
          damageFactor: 0.8,
          rangeFactor: 1,
          penFactor: 0.97,
          spdFactor: 1,
        },
      },
    ],
  },
];
exports.stringEntityTypes = {};
exports.upgradeTree = {
  Tank: {
    tier1: ["Twin", "Flank Guard", "Machine Gun", "Sniper", "Pounder"],
  },
  Sniper: {
    tier2: ["Ranger"],
  },
  "Flank Guard": {
    tier2: ["Tri-Angle", "Hybrid"],
  },
  "Tri-Angle": {
    tier3: ["Booster", "Fighter"],
  },
  Twin: {
    tier2: ["Triple Shot"],
  },
  "Twin Flank": {
    tier3: ["Triple Twin"],
  },
  "Triple Shot": {
    tier3: ["Penta Shot"],
  },
  Ranger: {
    tier3: ["Vanguard"],
  },
 "Machine Gun": {
  tier2: ["Sprayer"],
  },
  Sprayer: {
    tier3: ["Mega Sprayer"],
  },
  "Pounder": {
  tier2: ["Negev"],
  },
  Negev: {
  tier3: ["Annihilator"],
  },
};
exports.entityTypeMockups = [];
// EntityTypes Helper
for (let key in exports.entityTypes) {
  exports.stringEntityTypes[exports.entityTypes[key].name] = key;
}
for (let key in exports.entityTypes) {
  if (!(exports.entityTypes[key].name in exports.upgradeTree)) {
    exports.upgradeTree[exports.entityTypes[key].name] = {
      tier1: [],
      tier2: [],
      tier3: [],
    };
  } else {
    if (exports.upgradeTree[exports.entityTypes[key].name].tier1 == undefined)
      exports.upgradeTree[exports.entityTypes[key].name].tier1 = [];
    if (exports.upgradeTree[exports.entityTypes[key].name].tier2 == undefined)
      exports.upgradeTree[exports.entityTypes[key].name].tier2 = [];
    if (exports.upgradeTree[exports.entityTypes[key].name].tier3 == undefined)
      exports.upgradeTree[exports.entityTypes[key].name].tier3 = [];
  }
  exports.entityTypes[key].id = key;
  try {
    for (let i = 0; i < exports.entityTypes[key].barrels.length; i++) {
      exports.entityTypes[key].barrels[i].angle =
        (exports.entityTypes[key].barrels[i].angle * Math.PI) / 180;
      if (exports.entityTypes[key].barrels[i].canShoot == undefined)
        exports.entityTypes[key].barrels[i].canShoot = true;
    }
  } catch (e) {}
  let entityMockup = {};
  entityMockup.name = exports.entityTypes[key].name;
  if (entityMockup.name.startsWith("UC")) {
    entityMockup.name = "Unnamed Class";
  }
  entityMockup.bodyShape = exports.entityTypes[key].bodyShape;
  entityMockup.barrels = [];
  entityMockup.turrets = exports.entityTypes[key].turrets || [];
  entityMockup.turretsLength = entityMockup.turrets.length;
  for (let i = 0; i < entityMockup.turrets.length; i++) {
    entityMockup.turrets[i].tank =
      exports.stringEntityTypes[entityMockup.turrets[i].tank];
  }
  if (exports.entityTypes[key].shell != undefined)
    entityMockup.shell = exports.entityTypes[key].shell;
  for (let key2 in exports.entityTypes[key].barrels) {
    let barrel = exports.entityTypes[key].barrels[key2];
    entityMockup.barrels.push({
      width: barrel.width,
      height: barrel.height,
      angle: barrel.angle,
      offset: barrel.offset,
      trapezoidWidth: barrel.trapezoidWidth || 0,
    });
  }
  entityMockup.barrelsLength = entityMockup.barrels.length;
  exports.entityTypeMockups.push(entityMockup);
}
for (let key in exports.upgradeTree) {
  for (let key2 in exports.upgradeTree[key]) {
    for (let key3 in exports.upgradeTree[key][key2]) {
      exports.upgradeTree[key][key2][key3] = parseInt(
        exports.stringEntityTypes[exports.upgradeTree[key][key2][key3]]
      );
    }
  }
}
function convertDiepToPolytonk(tank) {
  for (let i = 0; i < tank.barrels.length; i++) {
    tank.barrels[i].height = tank.barrels[i].size;
    delete tank.barrels[i].size;
    tank.barrels[i].height /= 50;
    tank.barrels[i].width /= 50;
    tank.barrels[i].offset /= 50;
  }
  return tank;
}
