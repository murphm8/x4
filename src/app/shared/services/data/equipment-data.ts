/* tslint:disable:max-line-length */
import { EquipmentType } from './equipment-type-data';
import { EquipmentClass } from './equipment-class-data';
import { Races } from './race-data';
import { Factions } from './factions-data';
import { Size } from './size-data';

export const Equipments = [
   {
      id: 'countermeasure_flares_01',
      name: 'Flares',
      description: 'A piece of equipment tried and tested over hundreds of years, the modern flare has continued to be a boon for many a combat pilot in recent years. Forcibly ejected from a compartment of a ship, flares then explode so that the sudden heat signature may distract a guided missile from its original target, and before exploding additionally send out a small electro-magnetic signature that can disrupt a target lock before a missile is even fired.',
      type: EquipmentType.countermeasures,
      equipmentClass: EquipmentClass.countermeasure,
      price: { min: 2179, max: 2663, avg: 2421 },
      production: [
         {
            time: 1,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedcomposites', amount: 1 },
               { ware: 'energycells', amount: 9 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'ore', amount: 4 },
               { ware: 'silicon', amount: 3 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_l_allround_01_mk1',
      name: 'ARG L All-round Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      hull: 4033,
      price: { min: 321518, max: 392966, avg: 357242 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      thrust: { forward: 4206, reverse: 4627 },
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 147 },
               { ware: 'energycells', amount: 25 },
               { ware: 'engineparts', amount: 67 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_l_travel_01_mk1',
      name: 'ARG L Travel Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      hull: 4033,
      price: { min: 337593, max: 412614, avg: 375104 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 4006, reverse: 3605 },
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 148 },
               { ware: 'energycells', amount: 37 },
               { ware: 'engineparts', amount: 76 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_m_allround_01_mk1',
      name: 'ARG M All-round Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 11767, max: 14382, avg: 13074 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      thrust: { forward: 1002, reverse: 952 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 15 },
               { ware: 'engineparts', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_m_allround_01_mk2',
      name: 'ARG M All-round Engine Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 58166, max: 71092, avg: 64629 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 1212, reverse: 1228 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 18 },
               { ware: 'energycells', amount: 30 },
               { ware: 'engineparts', amount: 22 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_m_allround_01_mk3',
      name: 'ARG M All-round Engine Mk3',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 287722, max: 351660, avg: 319691 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 1353, reverse: 1413 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 90 },
               { ware: 'energycells', amount: 60 },
               { ware: 'engineparts', amount: 110 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_m_combat_01_mk1',
      name: 'ARG M Combat Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 14357, max: 17547, avg: 15952 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      thrust: { forward: 1052, reverse: 1105 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 15 },
               { ware: 'engineparts', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_m_combat_01_mk2',
      name: 'ARG M Combat Engine Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 69711, max: 85202, avg: 77457 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 1273, reverse: 1471 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 22 },
               { ware: 'energycells', amount: 30 },
               { ware: 'engineparts', amount: 26 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_m_combat_01_mk3',
      name: 'ARG M Combat Engine Mk3',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 345444, max: 422209, avg: 383827 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 1420, reverse: 1715 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 110 },
               { ware: 'energycells', amount: 60 },
               { ware: 'engineparts', amount: 130 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_m_travel_01_mk1',
      name: 'ARG M Travel Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 13062, max: 15964, avg: 14513 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      thrust: { forward: 1002, reverse: 902 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 15 },
               { ware: 'engineparts', amount: 6 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_m_travel_01_mk2',
      name: 'ARG M Travel Engine Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 65234, max: 79730, avg: 72482 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 1212, reverse: 1091 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 20 },
               { ware: 'energycells', amount: 30 },
               { ware: 'engineparts', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_m_travel_01_mk3',
      name: 'ARG M Travel Engine Mk3',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 331013, max: 404572, avg: 367793 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 1353, reverse: 1217 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 105 },
               { ware: 'energycells', amount: 60 },
               { ware: 'engineparts', amount: 125 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_s_allround_01_mk1',
      name: 'ARG S All-round Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 5526, max: 6754, avg: 6140 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      thrust: { forward: 396, reverse: 416 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 4 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_s_allround_01_mk2',
      name: 'ARG S All-round Engine Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 26370, max: 32230, avg: 29300 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 479, reverse: 574 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 8 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_s_allround_01_mk3',
      name: 'ARG S All-round Engine Mk3',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 123301, max: 150701, avg: 137001 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 535, reverse: 679 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 40 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 45 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_s_combat_01_mk1',
      name: 'ARG S Combat Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 8116, max: 9919, avg: 9017 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      thrust: { forward: 416, reverse: 499 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 6 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_s_combat_01_mk2',
      name: 'ARG S Combat Engine Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 40504, max: 49505, avg: 45005 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 503, reverse: 710 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 12 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 16 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_s_combat_01_mk3',
      name: 'ARG S Combat Engine Mk3',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 181023, max: 221250, avg: 201137 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 561, reverse: 850 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 60 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 65 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_s_travel_01_mk1',
      name: 'ARG S Travel Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 6821, max: 8336, avg: 7579 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      thrust: { forward: 396, reverse: 396 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_s_travel_01_mk2',
      name: 'ARG S Travel Engine Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 34732, max: 42450, avg: 38591 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 479, reverse: 499 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 10 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 14 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_s_travel_01_mk3',
      name: 'ARG S Travel Engine Mk3',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 166592, max: 203613, avg: 185103 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 535, reverse: 568 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 55 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 60 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_xl_allround_01_mk1',
      name: 'ARG XL All-round Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      hull: 12193,
      price: { min: 424061, max: 518297, avg: 471179 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 11076, reverse: 12184 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 193 },
               { ware: 'energycells', amount: 50 },
               { ware: 'engineparts', amount: 89 },
            ],
         },
      ]
   },
   {
      id: 'engine_arg_xl_travel_01_mk1',
      name: 'ARG XL Travel Engine Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      hull: 9955,
      price: { min: 445263, max: 544210, avg: 494737 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      thrust: { forward: 10549, reverse: 9494 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 195 },
               { ware: 'energycells', amount: 50 },
               { ware: 'engineparts', amount: 101 },
            ],
         },
      ]
   },
   {
      id: 'engine_kha_m_combat_01_mk1',
      name: 'KHA M Combat Engine Mk1',
      description: 'No information available',
      race: Races.khaak,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 1, max: 1, avg: 1 },
      owners: [ Factions.khaak ],
      thrust: { forward: 1400, reverse: 1600 },
      production: [
      ]
   },
   {
      id: 'engine_kha_m_combat_02_mk1',
      name: 'KHA M Combat Engine Array Mk1',
      description: 'No information available',
      race: Races.khaak,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 1, max: 1, avg: 1 },
      owners: [ Factions.khaak ],
      thrust: { forward: 1400, reverse: 1662 },
      production: [
      ]
   },
   {
      id: 'engine_kha_s_combat_01_mk1',
      name: 'KHA S Combat Engine Mk1',
      description: 'No information available',
      race: Races.khaak,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 1, max: 1, avg: 1 },
      owners: [ Factions.khaak ],
      thrust: { forward: 500, reverse: 770 },
      production: [
      ]
   },
   {
      id: 'engine_par_l_allround_01_mk1',
      name: 'PAR L All-round Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      hull: 4018,
      price: { min: 324732, max: 396895, avg: 360814 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 4332, reverse: 4766 },
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 147 },
               { ware: 'energycells', amount: 25 },
               { ware: 'engineparts', amount: 67 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_l_travel_01_mk1',
      name: 'PAR L Travel Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      hull: 4018,
      price: { min: 340969, max: 416740, avg: 378855 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 4126, reverse: 3713 },
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 148 },
               { ware: 'energycells', amount: 37 },
               { ware: 'engineparts', amount: 76 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_m_allround_01_mk1',
      name: 'PAR M All-round Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 11767, max: 14382, avg: 13074 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 1032, reverse: 980 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 15 },
               { ware: 'engineparts', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_m_allround_01_mk2',
      name: 'PAR M All-round Engine Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 58166, max: 71092, avg: 64629 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 1249, reverse: 1265 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 18 },
               { ware: 'energycells', amount: 30 },
               { ware: 'engineparts', amount: 22 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_m_allround_01_mk3',
      name: 'PAR M All-round Engine Mk3',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 287722, max: 351660, avg: 319691 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 1393, reverse: 1455 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 90 },
               { ware: 'energycells', amount: 60 },
               { ware: 'engineparts', amount: 110 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_m_combat_01_mk1',
      name: 'PAR M Combat Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 14357, max: 17547, avg: 15952 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 1084, reverse: 1138 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 15 },
               { ware: 'engineparts', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_m_combat_01_mk2',
      name: 'PAR M Combat Engine Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 69711, max: 85202, avg: 77457 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 1311, reverse: 1515 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 22 },
               { ware: 'energycells', amount: 30 },
               { ware: 'engineparts', amount: 26 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_m_combat_01_mk3',
      name: 'PAR M Combat Engine Mk3',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 345444, max: 422209, avg: 383827 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 1463, reverse: 1766 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 110 },
               { ware: 'energycells', amount: 60 },
               { ware: 'engineparts', amount: 130 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_m_travel_01_mk1',
      name: 'PAR M Travel Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 13062, max: 15964, avg: 14513 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 1032, reverse: 929 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 15 },
               { ware: 'engineparts', amount: 6 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_m_travel_01_mk2',
      name: 'PAR M Travel Engine Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 65234, max: 79730, avg: 72482 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 1249, reverse: 1124 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 20 },
               { ware: 'energycells', amount: 30 },
               { ware: 'engineparts', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_m_travel_01_mk3',
      name: 'PAR M Travel Engine Mk3',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 331013, max: 404572, avg: 367793 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 1393, reverse: 1254 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 105 },
               { ware: 'energycells', amount: 60 },
               { ware: 'engineparts', amount: 125 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_s_allround_01_mk1',
      name: 'PAR S All-round Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 5526, max: 6754, avg: 6140 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 408, reverse: 428 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 4 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_s_allround_01_mk2',
      name: 'PAR S All-round Engine Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 26370, max: 32230, avg: 29300 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 494, reverse: 591 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 8 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_s_allround_01_mk3',
      name: 'PAR S All-round Engine Mk3',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 123301, max: 150701, avg: 137001 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 551, reverse: 700 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 40 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 45 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_s_combat_01_mk1',
      name: 'PAR S Combat Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 8116, max: 9919, avg: 9017 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 428, reverse: 514 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 6 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_s_combat_01_mk2',
      name: 'PAR S Combat Engine Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 40504, max: 49505, avg: 45005 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 518, reverse: 731 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 12 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 16 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_s_combat_01_mk3',
      name: 'PAR S Combat Engine Mk3',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 181023, max: 221250, avg: 201137 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 578, reverse: 876 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 60 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 65 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_s_travel_01_mk1',
      name: 'PAR S Travel Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 6821, max: 8336, avg: 7579 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 408, reverse: 408 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_s_travel_01_mk2',
      name: 'PAR S Travel Engine Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 34732, max: 42450, avg: 38591 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 494, reverse: 514 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 10 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 14 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_s_travel_01_mk3',
      name: 'PAR S Travel Engine Mk3',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 166592, max: 203613, avg: 185103 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 551, reverse: 585 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 55 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 60 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_xl_allround_01_mk1',
      name: 'PAR XL All-round Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      hull: 9899,
      price: { min: 428301, max: 523479, avg: 475890 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 11408, reverse: 12549 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 193 },
               { ware: 'energycells', amount: 50 },
               { ware: 'engineparts', amount: 89 },
            ],
         },
      ]
   },
   {
      id: 'engine_par_xl_travel_01_mk1',
      name: 'PAR XL Travel Engine Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      hull: 9955,
      price: { min: 449716, max: 549653, avg: 499685 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      thrust: { forward: 10865, reverse: 9779 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 205 },
               { ware: 'energycells', amount: 56 },
               { ware: 'engineparts', amount: 91 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_l_allround_01_mk1',
      name: 'TEL L All-round Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      hull: 4018,
      price: { min: 321235, max: 392621, avg: 356928 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      thrust: { forward: 4080, reverse: 4488 },
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 147 },
               { ware: 'energycells', amount: 25 },
               { ware: 'engineparts', amount: 67 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_l_travel_01_mk1',
      name: 'TEL L Travel Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      hull: 4018,
      price: { min: 337296, max: 412251, avg: 374774 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 3886, reverse: 3497 },
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 148 },
               { ware: 'energycells', amount: 39 },
               { ware: 'engineparts', amount: 76 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_m_allround_01_mk1',
      name: 'TEL M All-round Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 11757, max: 14370, avg: 13064 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      thrust: { forward: 972, reverse: 923 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 15 },
               { ware: 'engineparts', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_m_allround_01_mk2',
      name: 'TEL M All-round Engine Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 58118, max: 71033, avg: 64575 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 1176, reverse: 1192 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 18 },
               { ware: 'energycells', amount: 30 },
               { ware: 'engineparts', amount: 22 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_m_allround_01_mk3',
      name: 'TEL M All-round Engine Mk3',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 287479, max: 351363, avg: 319421 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 1312, reverse: 1370 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 90 },
               { ware: 'energycells', amount: 60 },
               { ware: 'engineparts', amount: 110 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_m_combat_01_mk1',
      name: 'TEL M Combat Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 14345, max: 17533, avg: 15939 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      thrust: { forward: 1021, reverse: 1072 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 15 },
               { ware: 'engineparts', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_m_combat_01_mk2',
      name: 'TEL M Combat Engine Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 69652, max: 85131, avg: 77391 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      thrust: { forward: 1235, reverse: 1427 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 22 },
               { ware: 'energycells', amount: 30 },
               { ware: 'engineparts', amount: 26 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_m_combat_01_mk3',
      name: 'TEL M Combat Engine Mk3',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 345151, max: 421851, avg: 383501 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 1378, reverse: 1663 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 110 },
               { ware: 'energycells', amount: 60 },
               { ware: 'engineparts', amount: 130 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_m_travel_01_mk1',
      name: 'TEL M Travel Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 13051, max: 15952, avg: 14501 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      thrust: { forward: 972, reverse: 875 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 15 },
               { ware: 'engineparts', amount: 6 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_m_travel_01_mk2',
      name: 'TEL M Travel Engine Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 65179, max: 79663, avg: 72421 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 1176, reverse: 1058 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 20 },
               { ware: 'energycells', amount: 30 },
               { ware: 'engineparts', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_m_travel_01_mk3',
      name: 'TEL M Travel Engine Mk3',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 330733, max: 404229, avg: 367481 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 1312, reverse: 1181 },
      production: [
         {
            time: 15,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 105 },
               { ware: 'energycells', amount: 60 },
               { ware: 'engineparts', amount: 125 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_s_allround_01_mk1',
      name: 'TEL S All-round Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 5522, max: 6749, avg: 6135 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      thrust: { forward: 384, reverse: 403 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 4 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_s_allround_01_mk2',
      name: 'TEL S All-round Engine Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 26348, max: 32203, avg: 29276 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 465, reverse: 557 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 8 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_s_allround_01_mk3',
      name: 'TEL S All-round Engine Mk3',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 123197, max: 150574, avg: 136885 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 519, reverse: 659 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 40 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 45 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_s_combat_01_mk1',
      name: 'TEL S Combat Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 8110, max: 9912, avg: 9011 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      thrust: { forward: 403, reverse: 484 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 6 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_s_combat_01_mk2',
      name: 'TEL S Combat Engine Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 40471, max: 49464, avg: 44967 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      thrust: { forward: 488, reverse: 688 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 12 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 16 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_s_combat_01_mk3',
      name: 'TEL S Combat Engine Mk3',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 180869, max: 221062, avg: 200966 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 544, reverse: 825 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 60 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 65 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_s_travel_01_mk1',
      name: 'TEL S Travel Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 6816, max: 8330, avg: 7573 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      thrust: { forward: 384, reverse: 384 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_s_travel_01_mk2',
      name: 'TEL S Travel Engine Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 34703, max: 42415, avg: 38559 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 465, reverse: 484 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 10 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 14 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_s_travel_01_mk3',
      name: 'TEL S Travel Engine Mk3',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 166451, max: 203440, avg: 184946 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 519, reverse: 551 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 55 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 60 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_xl_allround_01_mk1',
      name: 'TEL XL All-round Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      hull: 9939,
      price: { min: 423689, max: 517843, avg: 470766 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 10744, reverse: 11818 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 193 },
               { ware: 'energycells', amount: 50 },
               { ware: 'engineparts', amount: 89 },
            ],
         },
      ]
   },
   {
      id: 'engine_tel_xl_travel_01_mk1',
      name: 'TEL XL Travel Engine Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      hull: 9955,
      price: { min: 444873, max: 543734, avg: 494304 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      thrust: { forward: 10232, reverse: 9209 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 196 },
               { ware: 'energycells', amount: 50 },
               { ware: 'engineparts', amount: 100 },
            ],
         },
      ]
   },
   {
      id: 'engine_xen_l_allround_01_mk1',
      name: 'XEN L All-round Engine Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      hull: 4033,
      price: { min: 321322, max: 392726, avg: 357024 },
      owners: [ Factions.xenon ],
      thrust: { forward: 4206, reverse: 4627 },
      production: [
         {
            time: 8,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 25 },
               { ware: 'ore', amount: 411 },
               { ware: 'silicon', amount: 411 },
            ],
         },
      ]
   },
   {
      id: 'engine_xen_m_combat_01_mk1',
      name: 'XEN M Combat Engine Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 15811, max: 19325, avg: 17568 },
      owners: [ Factions.xenon ],
      thrust: { forward: 1286, reverse: 1486 },
      production: [
         {
            time: 4,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'ore', amount: 19 },
               { ware: 'silicon', amount: 19 },
            ],
         },
      ]
   },
   {
      id: 'engine_xen_m_travel_01_mk1',
      name: 'XEN M Travel Engine Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 14256, max: 17424, avg: 15840 },
      owners: [ Factions.xenon ],
      thrust: { forward: 1224, reverse: 1102 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'ore', amount: 17 },
               { ware: 'silicon', amount: 17 },
            ],
         },
      ]
   },
   {
      id: 'engine_xen_s_combat_01_mk1',
      name: 'XEN S Combat Engine Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 6134, max: 7498, avg: 6816 },
      owners: [ Factions.xenon ],
      thrust: { forward: 503, reverse: 768 },
      production: [
         {
            time: 2,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 7 },
               { ware: 'silicon', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'engine_xen_xl_allround_01_mk1',
      name: 'XEN XL All-round Engine Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.engines,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      hull: 29561,
      price: { min: 424138, max: 518390, avg: 471264 },
      owners: [ Factions.xenon ],
      thrust: { forward: 11076, reverse: 12184 },
      production: [
         {
            time: 16,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 50 },
               { ware: 'ore', amount: 541 },
               { ware: 'silicon', amount: 541 },
            ],
         },
      ]
   },
   {
      id: 'missile_cluster_heavy_mk1',
      name: 'Heavy Cluster Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 12141,
      hull: 2,
      price: { min: 1530, max: 2070, avg: 1800 },
      production: [
         {
            time: 3,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 30 },
               { ware: 'missilecomponents', amount: 12 },
            ],
         },
         {
            time: 3,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 8 },
               { ware: 'ore', amount: 4 },
               { ware: 'silicon', amount: 3 },
            ],
         },
      ]
   },
   {
      id: 'missile_cluster_light_mk1',
      name: 'Light Cluster Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 2361,
      hull: 1,
      price: { min: 680, max: 920, avg: 800 },
      production: [
         {
            time: 1.5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'missilecomponents', amount: 4 },
            ],
         },
         {
            time: 2,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 6 },
               { ware: 'ore', amount: 2 },
               { ware: 'silicon', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'missile_dumbfire_heavy_mk1',
      name: 'Heavy Dumbfire Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 3960,
      hull: 2,
      price: { min: 451, max: 610, avg: 530 },
      production: [
         {
            time: 1,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 7 },
               { ware: 'missilecomponents', amount: 5 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 2 },
               { ware: 'ore', amount: 1 },
               { ware: 'silicon', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'missile_dumbfire_heavy_mk2',
      name: 'Heavy Dumbfire Missile Mk2',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 4320,
      hull: 3,
      price: { min: 1539, max: 2082, avg: 1810 },
      production: [
         {
            time: 1.5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 14 },
               { ware: 'missilecomponents', amount: 25 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 9 },
               { ware: 'ore', amount: 4 },
               { ware: 'silicon', amount: 3 },
            ],
         },
      ]
   },
   {
      id: 'missile_dumbfire_light_mk1',
      name: 'Light Dumbfire Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 1100,
      hull: 1,
      price: { min: 213, max: 288, avg: 250 },
      production: [
         {
            time: 1,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'missilecomponents', amount: 1 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 1 },
               { ware: 'ore', amount: 1 },
               { ware: 'silicon', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'missile_dumbfire_light_mk2',
      name: 'Light Dumbfire Missile Mk2',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 1200,
      hull: 1,
      price: { min: 553, max: 748, avg: 650 },
      production: [
         {
            time: 1.5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'missilecomponents', amount: 5 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 2 },
               { ware: 'ore', amount: 2 },
               { ware: 'silicon', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'missile_emp_mk1',
      name: 'EMP Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 0,
      hull: 1,
      price: { min: 808, max: 1093, avg: 950 },
      production: [
         {
            time: 1,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'missilecomponents', amount: 11 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 2 },
               { ware: 'silicon', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'missile_guided_heavy_mk1',
      name: 'Heavy Guided Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 3520,
      hull: 3,
      price: { min: 1915, max: 2590, avg: 2253 },
      production: [
         {
            time: 2,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 16 },
               { ware: 'missilecomponents', amount: 3 },
               { ware: 'smartchips', amount: 3 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 16 },
               { ware: 'ore', amount: 5 },
               { ware: 'silicon', amount: 3 },
            ],
         },
      ]
   },
   {
      id: 'missile_guided_light_mk1',
      name: 'Light Guided Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 685,
      hull: 1,
      price: { min: 729, max: 986, avg: 858 },
      production: [
         {
            time: 1,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 8 },
               { ware: 'missilecomponents', amount: 1 },
               { ware: 'smartchips', amount: 1 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 2 },
               { ware: 'silicon', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'missile_heatseeker_heavy_mk1',
      name: 'Heavy Heatseeker Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 3592,
      hull: 2,
      price: { min: 2178, max: 2947, avg: 2563 },
      production: [
         {
            time: 4,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'missilecomponents', amount: 6 },
               { ware: 'smartchips', amount: 3 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 5 },
               { ware: 'silicon', amount: 4 },
            ],
         },
      ]
   },
   {
      id: 'missile_heatseeker_light_mk1',
      name: 'Light Heatseeker Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 698,
      hull: 1,
      price: { min: 839, max: 1136, avg: 988 },
      production: [
         {
            time: 2,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'missilecomponents', amount: 2 },
               { ware: 'smartchips', amount: 1 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'ore', amount: 1 },
               { ware: 'silicon', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'missile_smart_heavy_mk1',
      name: 'Heavy Smart Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 3378,
      hull: 3,
      price: { min: 2465, max: 3335, avg: 2900 },
      production: [
         {
            time: 2,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'missilecomponents', amount: 3 },
               { ware: 'smartchips', amount: 4 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 6 },
               { ware: 'silicon', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'missile_smart_light_mk1',
      name: 'Light Smart Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 657,
      hull: 1,
      price: { min: 1211, max: 1639, avg: 1425 },
      production: [
         {
            time: 1,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'missilecomponents', amount: 1 },
               { ware: 'smartchips', amount: 2 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 3 },
               { ware: 'silicon', amount: 2 },
            ],
         },
      ]
   },
   {
      id: 'missile_swarm_heavy_mk1',
      name: 'Heavy Swarm Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 690,
      hull: 3,
      price: { min: 1934, max: 2616, avg: 2275 },
      production: [
         {
            time: 2,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'missilecomponents', amount: 10 },
               { ware: 'smartchips', amount: 2 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'ore', amount: 4 },
               { ware: 'silicon', amount: 3 },
            ],
         },
      ]
   },
   {
      id: 'missile_swarm_light_mk1',
      name: 'Light Swarm Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 134,
      hull: 1,
      price: { min: 967, max: 1308, avg: 1138 },
      production: [
         {
            time: 1,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'missilecomponents', amount: 5 },
               { ware: 'smartchips', amount: 1 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 2 },
               { ware: 'silicon', amount: 2 },
            ],
         },
      ]
   },
   {
      id: 'missile_torpedo_heavy_mk1',
      name: 'Heavy Torpedo Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 17246,
      hull: 38,
      price: { min: 17563, max: 23762, avg: 20663 },
      production: [
         {
            time: 6,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 40 },
               { ware: 'missilecomponents', amount: 40 },
               { ware: 'smartchips', amount: 35 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 50 },
               { ware: 'ore', amount: 30 },
               { ware: 'silicon', amount: 20 },
            ],
         },
      ]
   },
   {
      id: 'missile_torpedo_light_mk1',
      name: 'Light Torpedo Missile Mk1',
      description: 'No information available',
      type: EquipmentType.missiles,
      equipmentClass: EquipmentClass.missile,
      explosionDamage: 4791,
      hull: 8,
      price: { min: 3921, max: 5304, avg: 4613 },
      production: [
         {
            time: 3,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'missilecomponents', amount: 8 },
               { ware: 'smartchips', amount: 7 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 40 },
               { ware: 'ore', amount: 20 },
               { ware: 'silicon', amount: 15 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_l_standard_01_mk1',
      name: 'ARG L Shield Generator Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.large,
      hull: 2000,
      recharge: { max: 38844, rate: 173, delay: 0 },
      price: { min: 42166, max: 51536, avg: 46851 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 50 },
               { ware: 'fieldcoils', amount: 13 },
               { ware: 'shieldcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_l_standard_01_mk2',
      name: 'ARG L Shield Generator Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.large,
      hull: 2000,
      recharge: { max: 46282, rate: 268, delay: 0 },
      price: { min: 205644, max: 251343, avg: 228494 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 100 },
               { ware: 'fieldcoils', amount: 65 },
               { ware: 'shieldcomponents', amount: 50 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_m_standard_01_mk1',
      name: 'ARG M Shield Generator Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 5147, rate: 26, delay: 0.5 },
      price: { min: 12838, max: 15691, avg: 14264 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'fieldcoils', amount: 3 },
               { ware: 'shieldcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_m_standard_01_mk2',
      name: 'ARG M Shield Generator Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 6133, rate: 41, delay: 0.5 },
      price: { min: 62115, max: 75918, avg: 69017 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 40 },
               { ware: 'fieldcoils', amount: 15 },
               { ware: 'shieldcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_m_standard_02_mk1',
      name: 'ARG M Shield Generator Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 5147, rate: 26, delay: 0.5 },
      price: { min: 12838, max: 15691, avg: 14264 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'fieldcoils', amount: 3 },
               { ware: 'shieldcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_m_standard_02_mk2',
      name: 'ARG M Shield Generator Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 6133, rate: 41, delay: 0.5 },
      price: { min: 61597, max: 75285, avg: 68441 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 25 },
               { ware: 'fieldcoils', amount: 15 },
               { ware: 'shieldcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_s_standard_01_mk1',
      name: 'ARG S Shield Generator Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 827, rate: 82, delay: 12.1 },
      price: { min: 1218, max: 1489, avg: 1354 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'shieldcomponents', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_s_standard_01_mk2',
      name: 'ARG S Shield Generator Mk2',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 988, rate: 128, delay: 12.1 },
      price: { min: 10186, max: 12449, avg: 11318 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'fieldcoils', amount: 2 },
               { ware: 'shieldcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_s_standard_01_mk3',
      name: 'ARG S Shield Generator Mk3',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 1411, rate: 219, delay: 12.1 },
      price: { min: 49892, max: 60979, avg: 55436 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'fieldcoils', amount: 10 },
               { ware: 'shieldcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'shield_arg_xl_standard_01_mk1',
      name: 'ARG XL Shield Generator Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.extralarge,
      hull: 6000,
      recharge: { max: 129481, rate: 492, delay: 0 },
      price: { min: 225671, max: 275820, avg: 250745 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 150 },
               { ware: 'fieldcoils', amount: 82 },
               { ware: 'shieldcomponents', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'shield_kha_m_standard_01_mk1',
      name: 'KHA S Shield Generator Mk1',
      description: 'No information available',
      race: Races.khaak,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 4632, rate: 25, delay: 0.57 },
      price: { min: 1, max: 1, avg: 1 },
      owners: [ Factions.khaak ],
      production: [
      ]
   },
   {
      id: 'shield_kha_s_standard_01_mk1',
      name: 'KHA M Shield Generator Mk1',
      description: 'No information available',
      race: Races.khaak,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 745, rate: 79, delay: 13.9 },
      price: { min: 1, max: 1, avg: 1 },
      owners: [ Factions.khaak ],
      production: [
      ]
   },
   {
      id: 'shield_par_l_standard_01_mk1',
      name: 'PAR L Shield Generator Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.large,
      hull: 2000,
      recharge: { max: 34960, rate: 184, delay: 0 },
      price: { min: 42166, max: 51536, avg: 46851 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 50 },
               { ware: 'fieldcoils', amount: 13 },
               { ware: 'shieldcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'shield_par_l_standard_01_mk2',
      name: 'PAR L Shield Generator Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.large,
      hull: 2000,
      recharge: { max: 41654, rate: 284, delay: 0 },
      price: { min: 205644, max: 251343, avg: 228494 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 100 },
               { ware: 'fieldcoils', amount: 65 },
               { ware: 'shieldcomponents', amount: 50 },
            ],
         },
      ]
   },
   {
      id: 'shield_par_m_standard_01_mk1',
      name: 'PAR M Shield Generator Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 4632, rate: 28, delay: 0.42 },
      price: { min: 12838, max: 15691, avg: 14264 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'fieldcoils', amount: 3 },
               { ware: 'shieldcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_par_m_standard_01_mk2',
      name: 'PAR M Shield Generator Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 5520, rate: 43, delay: 0.42 },
      price: { min: 62115, max: 75918, avg: 69017 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 40 },
               { ware: 'fieldcoils', amount: 15 },
               { ware: 'shieldcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'shield_par_m_standard_02_mk1',
      name: 'PAR M Shield Generator Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 4632, rate: 28, delay: 0.42 },
      price: { min: 12015, max: 14685, avg: 13350 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'fieldcoils', amount: 3 },
               { ware: 'shieldcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_par_m_standard_02_mk2',
      name: 'PAR M Shield Generator Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 5520, rate: 43, delay: 0.42 },
      price: { min: 26058, max: 31849, avg: 28954 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 25 },
               { ware: 'fieldcoils', amount: 9 },
               { ware: 'shieldcomponents', amount: 6 },
            ],
         },
      ]
   },
   {
      id: 'shield_par_s_standard_01_mk1',
      name: 'PAR S Shield Generator Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 745, rate: 87, delay: 10.2 },
      price: { min: 1218, max: 1489, avg: 1354 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'shieldcomponents', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'shield_par_s_standard_01_mk2',
      name: 'PAR S Shield Generator Mk2',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 889, rate: 135, delay: 10.2 },
      price: { min: 10186, max: 12449, avg: 11318 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'fieldcoils', amount: 2 },
               { ware: 'shieldcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_par_s_standard_01_mk3',
      name: 'PAR S Shield Generator Mk3',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 1270, rate: 232, delay: 10.2 },
      price: { min: 49892, max: 60979, avg: 55436 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'fieldcoils', amount: 10 },
               { ware: 'shieldcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'shield_par_xl_standard_01_mk1',
      name: 'PAR XL Shield Generator Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.extralarge,
      hull: 6000,
      recharge: { max: 116532, rate: 521, delay: 0 },
      price: { min: 225671, max: 275820, avg: 250745 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 150 },
               { ware: 'fieldcoils', amount: 82 },
               { ware: 'shieldcomponents', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_l_standard_01_mk1',
      name: 'TEL L Shield Generator Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.large,
      hull: 2000,
      recharge: { max: 42729, rate: 166, delay: 0 },
      price: { min: 42166, max: 51536, avg: 46851 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 50 },
               { ware: 'fieldcoils', amount: 13 },
               { ware: 'shieldcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_l_standard_01_mk2',
      name: 'TEL L Shield Generator Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.large,
      hull: 2000,
      recharge: { max: 50911, rate: 257, delay: 0 },
      price: { min: 205644, max: 251343, avg: 228494 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 100 },
               { ware: 'fieldcoils', amount: 65 },
               { ware: 'shieldcomponents', amount: 50 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_m_standard_01_mk1',
      name: 'TEL M Shield Generator Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 5662, rate: 25, delay: 0.57 },
      price: { min: 12838, max: 15691, avg: 14264 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'fieldcoils', amount: 3 },
               { ware: 'shieldcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_m_standard_01_mk2',
      name: 'TEL M Shield Generator Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 6746, rate: 39, delay: 0.57 },
      price: { min: 62115, max: 75918, avg: 69017 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 40 },
               { ware: 'fieldcoils', amount: 15 },
               { ware: 'shieldcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_m_standard_02_mk1',
      name: 'TEL M Shield Generator Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 5662, rate: 25, delay: 0.57 },
      price: { min: 12015, max: 14685, avg: 13350 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'fieldcoils', amount: 3 },
               { ware: 'shieldcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_m_standard_02_mk2',
      name: 'TEL M Shield Generator Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 6746, rate: 39, delay: 0.57 },
      price: { min: 26058, max: 31849, avg: 28954 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 25 },
               { ware: 'fieldcoils', amount: 9 },
               { ware: 'shieldcomponents', amount: 6 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_s_standard_01_mk1',
      name: 'TEL S Shield Generator Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 910, rate: 79, delay: 13.9 },
      price: { min: 1218, max: 1489, avg: 1354 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'shieldcomponents', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_s_standard_01_mk2',
      name: 'TEL S Shield Generator Mk2',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 1087, rate: 122, delay: 13.9 },
      price: { min: 10186, max: 12449, avg: 11318 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'fieldcoils', amount: 2 },
               { ware: 'shieldcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_s_standard_01_mk3',
      name: 'TEL S Shield Generator Mk3',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 1552, rate: 210, delay: 13.9 },
      price: { min: 49892, max: 60979, avg: 55436 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'fieldcoils', amount: 10 },
               { ware: 'shieldcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'shield_tel_xl_standard_01_mk1',
      name: 'TEL XL Shield Generator Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.extralarge,
      hull: 6000,
      recharge: { max: 142429, rate: 470, delay: 0 },
      price: { min: 225671, max: 275820, avg: 250745 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 150 },
               { ware: 'fieldcoils', amount: 82 },
               { ware: 'shieldcomponents', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'shield_xen_l_standard_01_mk1',
      name: 'XEN L Shield Generator Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.large,
      hull: 2000,
      recharge: { max: 36902, rate: 194, delay: 0 },
      price: { min: 41386, max: 50582, avg: 45984 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 25 },
               { ware: 'ore', amount: 51 },
               { ware: 'silicon', amount: 51 },
            ],
         },
      ]
   },
   {
      id: 'shield_xen_l_standard_01_mk2',
      name: 'XEN L Shield Generator Mk2',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.large,
      hull: 2000,
      recharge: { max: 43968, rate: 300, delay: 0 },
      price: { min: 110765, max: 135379, avg: 123072 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 50 },
               { ware: 'ore', amount: 138 },
               { ware: 'silicon', amount: 138 },
            ],
         },
      ]
   },
   {
      id: 'shield_xen_m_standard_01_mk1',
      name: 'XEN M Shield Generator Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 4890, rate: 29, delay: 0.55 },
      price: { min: 13478, max: 16474, avg: 14976 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'ore', amount: 16 },
               { ware: 'silicon', amount: 16 },
            ],
         },
      ]
   },
   {
      id: 'shield_xen_m_standard_01_mk2',
      name: 'XEN M Shield Generator Mk2',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 5826, rate: 45, delay: 0.55 },
      price: { min: 27821, max: 34003, avg: 30912 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 34 },
               { ware: 'silicon', amount: 34 },
            ],
         },
      ]
   },
   {
      id: 'shield_xen_m_standard_02_mk1',
      name: 'XEN M Shield Generator Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 4890, rate: 29, delay: 0.55 },
      price: { min: 13478, max: 16474, avg: 14976 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'ore', amount: 16 },
               { ware: 'silicon', amount: 16 },
            ],
         },
      ]
   },
   {
      id: 'shield_xen_m_standard_02_mk2',
      name: 'XEN M Shield Generator Mk2',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.medium,
      hull: 500,
      recharge: { max: 5826, rate: 45, delay: 0.55 },
      price: { min: 27821, max: 34003, avg: 30912 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 34 },
               { ware: 'silicon', amount: 34 },
            ],
         },
      ]
   },
   {
      id: 'shield_xen_s_standard_01_mk1',
      name: 'XEN S Shield Generator Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 786, rate: 92, delay: 13.3 },
      price: { min: 1901, max: 2323, avg: 2112 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'ore', amount: 2 },
               { ware: 'silicon', amount: 2 },
            ],
         },
      ]
   },
   {
      id: 'shield_xen_s_standard_01_mk2',
      name: 'XEN S Shield Generator Mk2',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.small,
      recharge: { max: 938, rate: 143, delay: 13.3 },
      price: { min: 4579, max: 5597, avg: 5088 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 5 },
               { ware: 'silicon', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'shield_xen_xl_standard_01_mk1',
      name: 'XEN XL Shield Generator Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.shields,
      equipmentClass: EquipmentClass.shieldgenerator,
      size: Size.extralarge,
      hull: 6000,
      recharge: { max: 123007, rate: 550, delay: 0 },
      price: { min: 221493, max: 270714, avg: 246104 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 77 },
               { ware: 'ore', amount: 278 },
               { ware: 'silicon', amount: 278 },
            ],
         },
      ]
   },
   {
      id: 'ship_arg_xs_police_01_a',
      name: 'Argon Station Security Vessel',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_xs,
      hull: 281,
      price: { min: 9707, max: 13133, avg: 11420 },
      owners: [ Factions.antigone, Factions.argon ],
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'ship_gen_s_fightingdrone_01_a',
      name: 'Defence Drone',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_s,
      hull: 1900,
      price: { min: 11611, max: 15709, avg: 13660 },
      production: [
         {
            time: 90,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 30 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'ore', amount: 10 },
               { ware: 'silicon', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'ship_gen_s_miningdrone_liquid_01_a',
      name: 'Gas Collector Drone',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_s,
      hull: 1700,
      price: { min: 11781, max: 15939, avg: 13860 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 20 },
            ],
         },
         {
            time: 30,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 40 },
               { ware: 'ore', amount: 15 },
               { ware: 'silicon', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'ship_gen_s_miningdrone_solid_01_a',
      name: 'Mining Drone',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_s,
      hull: 1700,
      price: { min: 11781, max: 15939, avg: 13860 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 20 },
            ],
         },
         {
            time: 30,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 40 },
               { ware: 'ore', amount: 15 },
               { ware: 'silicon', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'ship_gen_xs_buildingdrone_01_a',
      name: 'Building Drone',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_xs,
      hull: 207,
      price: { min: 12980, max: 17561, avg: 15270 },
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 10 },
            ],
         },
         {
            time: 3,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 14 },
               { ware: 'ore', amount: 20 },
               { ware: 'silicon', amount: 20 },
            ],
         },
      ]
   },
   {
      id: 'ship_gen_xs_cargodrone_empty_01_a',
      name: 'Cargo Drone',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_xs,
      hull: 523,
      price: { min: 13728, max: 18573, avg: 16150 },
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 10 },
            ],
         },
         {
            time: 6,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 36 },
               { ware: 'ore', amount: 20 },
               { ware: 'silicon', amount: 20 },
            ],
         },
      ]
   },
   {
      id: 'ship_gen_xs_repairdrone_01_a',
      name: 'Repair Drone',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_xs,
      hull: 207,
      price: { min: 12980, max: 17561, avg: 15270 },
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 10 },
            ],
         },
         {
            time: 3,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 14 },
               { ware: 'ore', amount: 20 },
               { ware: 'silicon', amount: 20 },
            ],
         },
      ]
   },
   {
      id: 'ship_par_xs_police_01_a',
      name: 'Paranid Station Security Vessel',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_xs,
      hull: 281,
      price: { min: 9707, max: 13133, avg: 11420 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'ship_tel_xs_police_01_a',
      name: 'Teladi Station Security Vessel A',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_xs,
      hull: 281,
      price: { min: 9707, max: 13133, avg: 11420 },
      owners: [ Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'ship_tel_xs_police_02_a',
      name: 'Teladi Station Security Vessel B',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_xs,
      hull: 281,
      price: { min: 9707, max: 13133, avg: 11420 },
      owners: [ Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'ship_tel_xs_police_03_a',
      name: 'Teladi Station Security Vessel C',
      description: 'No information available',
      type: EquipmentType.drones,
      equipmentClass: EquipmentClass.ship_xs,
      hull: 281,
      price: { min: 9707, max: 13133, avg: 11420 },
      owners: [ Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'dronecomponents', amount: 1 },
               { ware: 'energycells', amount: 50 },
               { ware: 'smartchips', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'software_dockmk1',
      name: 'Docking Computer Mk1',
      description: 'This flight software automates the final stages of the docking procedure.',
      type: EquipmentType.software,
      price: { min: 5000, max: 10000, avg: 7500 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
            ],
         },
      ]
   },
   {
      id: 'software_dockmk2',
      name: 'Docking Computer Mk2',
      description: 'This flight software increases the range at which the docking procedure can be automated.',
      type: EquipmentType.software,
      price: { min: 24576, max: 40960, avg: 32768 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
            ],
         },
      ]
   },
   {
      id: 'software_flightassistmk1',
      name: 'Flight Assist Software Mk1',
      description: 'This flight software assists a pilot by automatically compensating for drift when changing flight direction.',
      type: EquipmentType.software,
      price: { min: 6825, max: 11375, avg: 9100 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
            ],
         },
      ]
   },
   {
      id: 'software_scannerlongrangemk1',
      name: 'Long-range Scanner Software Mk1',
      description: 'This scanning software provides a means to detect objects at great distances.',
      type: EquipmentType.software,
      equipmentClass: EquipmentClass.scanner,
      price: { min: 29274, max: 35779, avg: 32526 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
            ],
         },
      ]
   },
   {
      id: 'software_scannerlongrangemk2',
      name: 'Long-range Scanner Software Mk2',
      description: 'This scanning software increases scan resolution, allowing more accurate identification of certain types of objects.',
      type: EquipmentType.software,
      equipmentClass: EquipmentClass.scanner,
      price: { min: 58547, max: 71558, avg: 65052 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
            ],
         },
      ]
   },
   {
      id: 'software_scannerobjectmk1',
      name: 'Basic Scanner',
      description: 'This scanning software provides basic identification of nearby objects.',
      type: EquipmentType.software,
      equipmentClass: EquipmentClass.scanner,
      price: { min: 10907, max: 13331, avg: 12119 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
            ],
         },
      ]
   },
   {
      id: 'software_scannerobjectmk2',
      name: 'Police Scanner',
      description: 'This scanning software allows a pilot to inspect the contents of the cargo hold of another ship. Its use is illegal unless an appropriate police licence has been obtained.',
      type: EquipmentType.software,
      equipmentClass: EquipmentClass.scanner,
      price: { min: 36733, max: 44896, avg: 40815 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
            ],
         },
      ]
   },
   {
      id: 'software_targetmk1',
      name: 'Targeting Computer Extension Mk1',
      description: 'This targeting software allows a ship\'s targeting system to lock on to small objects such as debris and floating containers.',
      type: EquipmentType.software,
      price: { min: 6144, max: 10240, avg: 8192 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
            ],
         },
      ]
   },
   {
      id: 'software_trademk1',
      name: 'Trading Computer Extension Mk1',
      description: 'This trading software maintains a link to potential buyers and sellers for a limited time, to provide current trade offer information.',
      type: EquipmentType.software,
      price: { min: 8438, max: 14063, avg: 11250 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_l_allround_01_mk1',
      name: 'L All-round Thrusters Mk1',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      price: { min: 253435, max: 309754, avg: 281595 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 120 },
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 48 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 324 },
               { ware: 'silicon', amount: 324 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_l_allround_01_mk2',
      name: 'L All-round Thrusters Mk2',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      price: { min: 1266139, max: 1547503, avg: 1406821 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 600 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 240 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 648 },
               { ware: 'silicon', amount: 648 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_l_allround_01_mk3',
      name: 'L All-round Thrusters Mk3',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.large,
      price: { min: 6328619, max: 7734979, avg: 7031799 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 20,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3000 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 1200 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 40 },
               { ware: 'ore', amount: 1296 },
               { ware: 'silicon', amount: 1296 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_m_allround_01_mk1',
      name: 'M All-round Thrusters Mk1',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 11717, max: 14321, avg: 13019 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 4 },
               { ware: 'energycells', amount: 5 },
               { ware: 'engineparts', amount: 4 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'ore', amount: 15 },
               { ware: 'silicon', amount: 15 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_m_allround_01_mk2',
      name: 'M All-round Thrusters Mk2',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 58067, max: 70971, avg: 64519 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 20 },
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 20 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 30 },
               { ware: 'silicon', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_m_allround_01_mk3',
      name: 'M All-round Thrusters Mk3',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 289300, max: 353589, avg: 321445 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 100 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 100 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 60 },
               { ware: 'silicon', amount: 60 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_m_combat_01_mk1',
      name: 'M Combat Thrusters Mk1',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 14899, max: 18210, avg: 16555 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 6 },
               { ware: 'energycells', amount: 5 },
               { ware: 'engineparts', amount: 4 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'ore', amount: 19 },
               { ware: 'silicon', amount: 19 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_m_combat_01_mk2',
      name: 'M Combat Thrusters Mk2',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 73978, max: 90418, avg: 82198 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 30 },
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 20 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 38 },
               { ware: 'silicon', amount: 38 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_m_combat_01_mk3',
      name: 'M Combat Thrusters Mk3',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.medium,
      price: { min: 368854, max: 450821, avg: 409838 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 150 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 100 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 76 },
               { ware: 'silicon', amount: 76 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_s_allround_01_mk1',
      name: 'S All-round Thrusters Mk1',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 5353, max: 6542, avg: 5948 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'engineparts', amount: 4 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'ore', amount: 7 },
               { ware: 'silicon', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_s_allround_01_mk2',
      name: 'S All-round Thrusters Mk2',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 83968, max: 102627, avg: 93298 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 20 },
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 40 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 14 },
               { ware: 'silicon', amount: 14 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_s_allround_01_mk3',
      name: 'S All-round Thrusters Mk3',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 199757, max: 244147, avg: 221952 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 60 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 80 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 28 },
               { ware: 'silicon', amount: 28 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_s_combat_01_mk1',
      name: 'S Combat Thrusters Mk1',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 6241, max: 7628, avg: 6934 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 3 },
               { ware: 'energycells', amount: 5 },
               { ware: 'engineparts', amount: 1 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'ore', amount: 8 },
               { ware: 'silicon', amount: 8 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_s_combat_01_mk2',
      name: 'S Combat Thrusters Mk2',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 39752, max: 48586, avg: 44169 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 15 },
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 12 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 16 },
               { ware: 'silicon', amount: 16 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_s_combat_01_mk3',
      name: 'S Combat Thrusters Mk3',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.small,
      price: { min: 157946, max: 193045, avg: 175495 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 50 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 60 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 32 },
               { ware: 'silicon', amount: 32 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_xl_allround_01_mk1',
      name: 'XL All-round Thrusters Mk1',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      price: { min: 538346, max: 657978, avg: 598162 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 260 },
               { ware: 'energycells', amount: 10 },
               { ware: 'engineparts', amount: 96 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 687 },
               { ware: 'silicon', amount: 687 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_xl_allround_01_mk2',
      name: 'XL All-round Thrusters Mk2',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      price: { min: 2690693, max: 3288625, avg: 2989659 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 1300 },
               { ware: 'energycells', amount: 20 },
               { ware: 'engineparts', amount: 480 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 1374 },
               { ware: 'silicon', amount: 1374 },
            ],
         },
      ]
   },
   {
      id: 'thruster_gen_xl_allround_01_mk3',
      name: 'XL All-round Thrusters Mk3',
      description: 'No information available',
      type: EquipmentType.thrusters,
      equipmentClass: EquipmentClass.engine,
      size: Size.extralarge,
      price: { min: 13451392, max: 16440590, avg: 14945991 },
      thrust: { forward: 0, reverse: 0 },
      production: [
         {
            time: 30,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'antimatterconverters', amount: 6500 },
               { ware: 'energycells', amount: 40 },
               { ware: 'engineparts', amount: 2400 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 40 },
               { ware: 'ore', amount: 2748 },
               { ware: 'silicon', amount: 2748 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_l_beam_01_mk1',
      name: 'ARG L Beam Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 2300,
      price: { min: 135464, max: 165567, avg: 150515 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 18 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_l_dumbfire_01_mk1',
      name: 'ARG L Dumbfire Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.large,
      hull: 5000,
      price: { min: 67905, max: 82995, avg: 75450 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 9 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 15 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_l_guided_01_mk1',
      name: 'ARG L Tracking Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.large,
      hull: 5000,
      price: { min: 78261, max: 95652, avg: 86957 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_l_laser_01_mk1',
      name: 'ARG L Pulse Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 2300,
      price: { min: 52289, max: 63909, avg: 58099 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 4 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 20 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_l_mining_01_mk1',
      name: 'ARG L Mining Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 2300,
      price: { min: 49166, max: 60092, avg: 54629 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 3 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 21 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_l_plasma_01_mk1',
      name: 'ARG L Plasma Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 2300,
      price: { min: 93055, max: 113734, avg: 103395 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 39 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_beam_01_mk1',
      name: 'ARG M Beam Turret Mk1',
      description: 'Beam Turret',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 45385, max: 55471, avg: 50428 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_beam_02_mk1',
      name: 'ARG M Beam Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 500,
      price: { min: 45385, max: 55471, avg: 50428 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_dumbfire_02_mk1',
      name: 'ARG M Dumbfire Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.medium,
      hull: 1100,
      price: { min: 22865, max: 27946, avg: 25406 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 3 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_flak_01_mk1',
      name: 'ARG M Flak Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 41730, max: 87581, avg: 64655 },
      owners: [ Factions.alliance, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 5 },
               { ware: 'energycells', amount: 18 },
               { ware: 'turretcomponents', amount: 21 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_flak_02_mk1',
      name: 'ARG M Flak Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 500,
      price: { min: 41730, max: 87581, avg: 64655 },
      owners: [ Factions.alliance, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 5 },
               { ware: 'energycells', amount: 18 },
               { ware: 'turretcomponents', amount: 21 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_gatling_01_mk1',
      name: 'ARG M Bolt Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 24665, max: 30147, avg: 27406 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 12 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_gatling_02_mk1',
      name: 'ARG M Bolt Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 500,
      price: { min: 22857, max: 27936, avg: 25397 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 8 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_guided_02_mk1',
      name: 'ARG M Tracking Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.medium,
      hull: 1100,
      price: { min: 26317, max: 32166, avg: 29242 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_laser_01_mk1',
      name: 'ARG M Pulse Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 21378, max: 26128, avg: 23753 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_laser_02_mk1',
      name: 'ARG M Pulse Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 500,
      price: { min: 21378, max: 26128, avg: 23753 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_mining_01_mk1',
      name: 'ARG M Mining Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 16446, max: 20101, avg: 18274 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_mining_02_mk1',
      name: 'ARG M Mining Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 500,
      price: { min: 16446, max: 20101, avg: 18274 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_plasma_01_mk1',
      name: 'ARG M Plasma Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 31249, max: 38193, avg: 34721 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 13 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_plasma_02_mk1',
      name: 'ARG M Plasma Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 500,
      price: { min: 31249, max: 38193, avg: 34721 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 13 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_shotgun_01_mk1',
      name: 'ARG M Shard Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 22857, max: 27936, avg: 25397 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 8 },
            ],
         },
      ]
   },
   {
      id: 'turret_arg_m_shotgun_02_mk1',
      name: 'ARG M Shard Turret Mk1',
      description: 'No information available',
      race: Races.argon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 500,
      price: { min: 24665, max: 30147, avg: 27406 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 12 },
            ],
         },
      ]
   },
   {
      id: 'turret_kha_m_beam_01_mk1',
      name: 'KHA M Kyon Turret Mk1',
      description: 'No information available',
      race: Races.khaak,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 500,
      price: { min: 1, max: 1, avg: 1 },
      owners: [ Factions.khaak ],
      production: [
      ]
   },
   {
      id: 'turret_par_l_beam_01_mk1',
      name: 'PAR L Beam Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 3450,
      price: { min: 135464, max: 165567, avg: 150515 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 18 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_l_dumbfire_01_mk1',
      name: 'PAR L Dumbfire Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.large,
      hull: 7500,
      price: { min: 67905, max: 82995, avg: 75450 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 9 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 15 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_l_guided_01_mk1',
      name: 'PAR L Tracking Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.large,
      hull: 7500,
      price: { min: 78261, max: 95652, avg: 86957 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_l_laser_01_mk1',
      name: 'PAR L Pulse Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 3450,
      price: { min: 52289, max: 63909, avg: 58099 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 4 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 20 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_l_mining_01_mk1',
      name: 'PAR L Mining Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 3450,
      price: { min: 49166, max: 60092, avg: 54629 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 3 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 21 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_l_plasma_01_mk1',
      name: 'PAR L Plasma Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 3450,
      price: { min: 93055, max: 113734, avg: 103395 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 39 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_beam_01_mk1',
      name: 'PAR M Beam Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 45385, max: 55471, avg: 50428 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_beam_02_mk1',
      name: 'PAR M Beam Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 24665, max: 30147, avg: 27406 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 12 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_dumbfire_02_mk1',
      name: 'PAR M Dumbfire Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.medium,
      hull: 1650,
      price: { min: 31249, max: 38193, avg: 34721 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 13 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_gatling_01_mk1',
      name: 'PAR M Bolt Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 24665, max: 30147, avg: 27406 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 12 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_gatling_02_mk1',
      name: 'PAR M Bolt Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 26317, max: 32166, avg: 29242 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_guided_02_mk1',
      name: 'PAR M Tracking Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.medium,
      hull: 1650,
      price: { min: 45385, max: 55471, avg: 50428 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_laser_01_mk1',
      name: 'PAR M Pulse Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 21378, max: 26128, avg: 23753 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_laser_02_mk1',
      name: 'PAR M Pulse Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 16446, max: 20101, avg: 18274 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_mining_01_mk1',
      name: 'PAR M Mining Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 16446, max: 20101, avg: 18274 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_mining_02_mk1',
      name: 'PAR M Mining Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 22857, max: 27936, avg: 25397 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 8 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_plasma_01_mk1',
      name: 'PAR M Plasma Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 31249, max: 38193, avg: 34721 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 13 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_plasma_02_mk1',
      name: 'PAR M Plasma Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 21378, max: 26128, avg: 23753 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_shotgun_01_mk1',
      name: 'PAR M Shard Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 22857, max: 27936, avg: 25397 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 8 },
            ],
         },
      ]
   },
   {
      id: 'turret_par_m_shotgun_02_mk1',
      name: 'PAR M Shard Turret Mk1',
      description: 'No information available',
      race: Races.paranid,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 22865, max: 27946, avg: 25406 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 3 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_l_beam_01_mk1',
      name: 'TEL L Beam Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 3450,
      price: { min: 135460, max: 165562, avg: 150511 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 18 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_l_dumbfire_01_mk1',
      name: 'TEL L Dumbfire Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.large,
      hull: 7500,
      price: { min: 67903, max: 82992, avg: 75447 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 9 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 15 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_l_guided_01_mk1',
      name: 'TEL L Tracking Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.large,
      hull: 7500,
      price: { min: 78257, max: 95647, avg: 86952 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_l_laser_01_mk1',
      name: 'TEL L Pulse Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 3450,
      price: { min: 52286, max: 63906, avg: 58096 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 4 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 20 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_l_mining_01_mk1',
      name: 'TEL L Mining Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 3450,
      price: { min: 49163, max: 60088, avg: 54626 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 3 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 21 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_l_plasma_01_mk1',
      name: 'TEL L Plasma Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 3450,
      price: { min: 93050, max: 113728, avg: 103389 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 39 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_beam_01_mk1',
      name: 'TEL M Beam Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 45384, max: 55469, avg: 50426 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_beam_02_mk1',
      name: 'TEL M Beam Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 45384, max: 55469, avg: 50426 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_dumbfire_02_mk1',
      name: 'TEL M Dumbfire Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.medium,
      hull: 1650,
      price: { min: 22865, max: 27946, avg: 25405 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 3 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_gatling_01_mk1',
      name: 'TEL M Bolt Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 24664, max: 30145, avg: 27404 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 12 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_gatling_02_mk1',
      name: 'TEL M Bolt Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 22856, max: 27935, avg: 25395 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 8 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_guided_02_mk1',
      name: 'TEL M Tracking Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.missileturret,
      size: Size.medium,
      hull: 1650,
      price: { min: 26316, max: 32164, avg: 29240 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_laser_01_mk1',
      name: 'TEL M Pulse Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 21376, max: 26127, avg: 23752 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_laser_02_mk1',
      name: 'TEL M Pulse Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 21376, max: 26127, avg: 23752 },
      owners: [ Factions.alliance, Factions.ministry, Factions.scaleplate, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_mining_01_mk1',
      name: 'TEL M Mining Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 16445, max: 20100, avg: 18273 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_mining_02_mk1',
      name: 'TEL M Mining Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 16445, max: 20100, avg: 18273 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_plasma_01_mk1',
      name: 'TEL M Plasma Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 31247, max: 38191, avg: 34719 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 13 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_plasma_02_mk1',
      name: 'TEL M Plasma Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 31247, max: 38191, avg: 34719 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 10 },
               { ware: 'turretcomponents', amount: 13 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_shotgun_01_mk1',
      name: 'TEL M Shard Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 22856, max: 27935, avg: 25395 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 8 },
            ],
         },
      ]
   },
   {
      id: 'turret_tel_m_shotgun_02_mk1',
      name: 'TEL M Shard Turret Mk1',
      description: 'No information available',
      race: Races.teladi,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 750,
      price: { min: 24664, max: 30145, avg: 27404 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'turretcomponents', amount: 12 },
            ],
         },
      ]
   },
   {
      id: 'turret_xen_l_laser_01_mk1',
      name: 'XEN L Pulse Turret Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.large,
      hull: 3500,
      price: { min: 13392, max: 16368, avg: 14880 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 25 },
               { ware: 'ore', amount: 15 },
               { ware: 'silicon', amount: 15 },
            ],
         },
      ]
   },
   {
      id: 'turret_xen_m_beam_02_mk1',
      name: 'XEN M Beam Turret Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 800,
      price: { min: 23242, max: 28406, avg: 25824 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 29 },
               { ware: 'silicon', amount: 29 },
            ],
         },
      ]
   },
   {
      id: 'turret_xen_m_laser_01_mk1',
      name: 'XEN M Pulse Turret Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      price: { min: 23242, max: 28406, avg: 25824 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 29 },
               { ware: 'silicon', amount: 29 },
            ],
         },
      ]
   },
   {
      id: 'turret_xen_m_laser_02_mk1',
      name: 'XEN M Pulse Turret Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.turrets,
      equipmentClass: EquipmentClass.turret,
      size: Size.medium,
      hull: 800,
      price: { min: 23242, max: 28406, avg: 25824 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 29 },
               { ware: 'silicon', amount: 29 },
            ],
         },
      ]
   },
   {
      id: 'weapon_arg_l_destroyer_01_mk1',
      name: 'Behemoth Main Battery',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.large,
      hull: 8000,
      price: { min: 936709, max: 1144866, avg: 1040788 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 140 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 170 },
            ],
         },
      ]
   },
   {
      id: 'weapon_arg_m_ion_01_mk1',
      name: 'M Ion Blaster Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 302254, max: 597081, avg: 449667 },
      owners: [ Factions.alliance, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 56 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 77 },
            ],
         },
      ]
   },
   {
      id: 'weapon_arg_m_ion_01_mk2',
      name: 'M Ion Blaster Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 931956, max: 1819218, avg: 1375587 },
      owners: [ Factions.alliance, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 184 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 191 },
            ],
         },
      ]
   },
   {
      id: 'weapon_arg_s_ion_01_mk1',
      name: 'S Ion Blaster Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 160820, max: 319189, avg: 240004 },
      owners: [ Factions.alliance, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 29 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 44 },
            ],
         },
      ]
   },
   {
      id: 'weapon_arg_s_ion_01_mk2',
      name: 'S Ion Blaster Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 777281, max: 1543247, avg: 1160264 },
      owners: [ Factions.alliance, Factions.argon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 140 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 215 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_mine_01',
      name: 'Mine',
      description: 'Mines are a commonly-used static combat tool that explode and cause massive hull damage under a number of circumstances. Some explode on contact, some when a target comes within a certain range. Some even track their targets and can be programmed to recognise friend from foe.',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.mine,
      explosionDamage: 10000,
      hull: 100,
      price: { min: 4843, max: 6552, avg: 5698 },
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 3 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_mine_02',
      name: 'Tracker Mine',
      description: 'Tracker Mines are deadly devices that have two phases of operation. In the detection phase, the mine detects a valid target within outer detection range and initiates a limited manoeuvre to intercept the target. When it is deemed close enough to trigger, the second detection phase sees the mine\'s explosive payload detonate. Tracker Mines are less effective at chasing fast and agile targets, but can be incredibly dangerous when used in number or against larger and less agile targets.',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.mine,
      explosionDamage: 10000,
      hull: 100,
      price: { min: 9055, max: 12250, avg: 10653 },
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 7 },
               { ware: 'smartchips', amount: 10 },
               { ware: 'weaponcomponents', amount: 3 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 15 },
               { ware: 'ore', amount: 2 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_mine_03',
      name: 'Friend/Foe Mine',
      description: 'Friend/Foe Mines are equipped with specialist software that allows the user to program the mine not to respond to friendly targets. This is usually achieved over comm-frequency identification, and friendly targets must stay informed of changes to the frequency as not to accidentally fall foul of the mine\'s dangerous payload - this in of itself is almost always an automated process.',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.mine,
      explosionDamage: 10000,
      hull: 100,
      price: { min: 17478, max: 23647, avg: 20563 },
      production: [
         {
            time: 60,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 11 },
               { ware: 'smartchips', amount: 30 },
               { ware: 'weaponcomponents', amount: 3 },
            ],
         },
         {
            time: 10,
            amount: 1,
            method: 'xenon',
            name: 'Xenon',
            wares: [
               { ware: 'energycells', amount: 20 },
               { ware: 'ore', amount: 1 },
               { ware: 'silicon', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_beam_01_mk1',
      name: 'M Beam Emitter Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 25530, max: 31203, avg: 28367 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_beam_01_mk2',
      name: 'M Beam Emitter Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 127132, max: 155383, avg: 141257 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 10 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 50 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_dumbfire_01_mk1',
      name: 'M Dumbfire Launcher Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.medium,
      hull: 1001,
      price: { min: 22558, max: 27571, avg: 25064 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.scaleplate, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 3 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_dumbfire_01_mk2',
      name: 'M Dumbfire Launcher Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.medium,
      hull: 1001,
      price: { min: 111753, max: 136587, avg: 124170 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 15 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_gatling_01_mk1',
      name: 'M Bolt Repeater Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 23928, max: 29245, avg: 26586 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 12 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_gatling_01_mk2',
      name: 'M Bolt Repeater Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 119121, max: 145592, avg: 132356 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 5 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 60 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_guided_01_mk1',
      name: 'M Tracking Launcher Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.medium,
      hull: 1001,
      price: { min: 44770, max: 54719, avg: 49745 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 6 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_guided_01_mk2',
      name: 'M Tracking Launcher Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.medium,
      hull: 1001,
      price: { min: 222815, max: 272330, avg: 247572 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 30 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 50 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_laser_01_mk1',
      name: 'M Pulse Laser Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 20763, max: 25377, avg: 23070 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.scaleplate, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_laser_01_mk2',
      name: 'M Pulse Laser Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 103297, max: 126252, avg: 114775 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 5 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 50 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_mining_01_mk1',
      name: 'M Mining Drill Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 16016, max: 19575, avg: 17796 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.scaleplate, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_mining_01_mk2',
      name: 'M Mining Drill Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 79562, max: 97243, avg: 88402 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 5 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 35 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_plasma_01_mk1',
      name: 'M Plasma Cannon Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 30277, max: 37005, avg: 33641 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 13 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_plasma_01_mk2',
      name: 'M Plasma Cannon Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 150867, max: 184393, avg: 167630 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 10 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 65 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_shotgun_01_mk1',
      name: 'M Shard Battery Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 22365, max: 27335, avg: 24850 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 8 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_shotgun_01_mk2',
      name: 'M Shard Battery Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 111308, max: 136043, avg: 123676 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 10 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 40 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_torpedo_01_mk1',
      name: 'M Torpedo Launcher Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.medium,
      hull: 1001,
      price: { min: 78039, max: 95381, avg: 86710 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 8 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_m_torpedo_01_mk2',
      name: 'M Torpedo Launcher Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.medium,
      hull: 1001,
      price: { min: 389160, max: 475640, avg: 432400 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 40 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 125 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_beam_01_mk1',
      name: 'S Beam Emitter Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 23948, max: 29269, avg: 26609 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 9 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_beam_01_mk2',
      name: 'S Beam Emitter Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 104979, max: 128308, avg: 116643 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 10 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 36 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_burst_01_mk1',
      name: 'S Burst Ray Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 18582, max: 39398, avg: 28990 },
      owners: [ Factions.alliance, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 2 },
               { ware: 'energycells', amount: 13 },
               { ware: 'weaponcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_burst_01_mk2',
      name: 'S Burst Ray Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 56299, max: 108078, avg: 82188 },
      owners: [ Factions.alliance, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 12 },
               { ware: 'energycells', amount: 16 },
               { ware: 'weaponcomponents', amount: 7 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_cannon_01_mk1',
      name: 'S Blast Mortar Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      price: { min: 40538, max: 81008, avg: 60773 },
      owners: [ Factions.holyorder, Factions.ministry, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 7 },
               { ware: 'energycells', amount: 9 },
               { ware: 'weaponcomponents', amount: 12 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_cannon_01_mk2',
      name: 'S Blast Mortar Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      price: { min: 57963, max: 111999, avg: 84981 },
      owners: [ Factions.holyorder, Factions.ministry, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 12 },
               { ware: 'energycells', amount: 11 },
               { ware: 'weaponcomponents', amount: 9 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_dumbfire_01_mk1',
      name: 'S Dumbfire Launcher Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.small,
      hull: 500,
      price: { min: 6695, max: 8183, avg: 7439 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.scaleplate, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_dumbfire_01_mk2',
      name: 'S Dumbfire Launcher Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.small,
      hull: 500,
      price: { min: 13370, max: 16341, avg: 14855 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_gatling_01_mk1',
      name: 'S Bolt Repeater Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 43055, max: 52623, avg: 47839 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 8 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 3 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_gatling_01_mk2',
      name: 'S Bolt Repeater Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 214756, max: 262480, avg: 238618 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 40 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 15 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_guided_01_mk1',
      name: 'S Tracking Launcher Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.small,
      hull: 500,
      price: { min: 8277, max: 10117, avg: 9197 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 2 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_guided_01_mk2',
      name: 'S Tracking Launcher Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.small,
      hull: 500,
      price: { min: 40349, max: 49316, avg: 44832 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 5 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 10 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_laser_01_mk1',
      name: 'S Pulse Laser Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 16056, max: 19624, avg: 17840 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.hatikvah, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.scaleplate, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 3 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_laser_01_mk2',
      name: 'S Pulse Laser Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 79761, max: 97485, avg: 88623 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 15 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_mining_01_mk1',
      name: 'S Mining Drill Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 6522, max: 7971, avg: 7247 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 1 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_mining_01_mk2',
      name: 'S Mining Drill Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 32092, max: 39223, avg: 35658 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 5 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_plasma_01_mk1',
      name: 'S Plasma Cannon Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 12851, max: 15707, avg: 14279 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_plasma_01_mk2',
      name: 'S Plasma Cannon Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 55827, max: 68233, avg: 62030 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 5 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 20 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_shotgun_01_mk1',
      name: 'S Shard Battery Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 27152, max: 33186, avg: 30169 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 4 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_shotgun_01_mk2',
      name: 'S Shard Battery Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 135242, max: 165296, avg: 150269 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 20 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_torpedo_01_mk1',
      name: 'S Torpedo Launcher Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.small,
      hull: 500,
      price: { min: 22558, max: 27571, avg: 25064 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 3 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'weapon_gen_s_torpedo_01_mk2',
      name: 'S Torpedo Launcher Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.missilelauncher,
      size: Size.small,
      hull: 500,
      price: { min: 111753, max: 136587, avg: 124170 },
      owners: [ Factions.alliance, Factions.antigone, Factions.argon, Factions.holyorder, Factions.ministry, Factions.paranid, Factions.teladi, Factions.trinity ],
      production: [
         {
            time: 5,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 15 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 25 },
            ],
         },
      ]
   },
   {
      id: 'weapon_kha_m_laser_01_mk1',
      name: 'M Kyon Emitter Mk1',
      description: 'No information available',
      race: Races.khaak,
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1000,
      price: { min: 1, max: 1, avg: 1 },
      owners: [ Factions.khaak ],
      production: [
      ]
   },
   {
      id: 'weapon_kha_s_laser_01_mk1',
      name: 'S Kyon Emitter Mk1',
      description: 'No information available',
      race: Races.khaak,
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 1, max: 1, avg: 1 },
      owners: [ Factions.khaak ],
      production: [
      ]
   },
   {
      id: 'weapon_par_l_destroyer_01_mk1',
      name: 'Odysseus Main Battery',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.large,
      hull: 8000,
      price: { min: 1000201, max: 1222468, avg: 1111335 },
      owners: [ Factions.alliance, Factions.holyorder, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 150 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 180 },
            ],
         },
      ]
   },
   {
      id: 'weapon_par_m_railgun_01_mk1',
      name: 'M Mass Driver Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 304352, max: 600045, avg: 452198 },
      owners: [ Factions.alliance, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 57 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 75 },
            ],
         },
      ]
   },
   {
      id: 'weapon_par_m_railgun_01_mk2',
      name: 'M Mass Driver Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 1188194, max: 2380428, avg: 1784311 },
      owners: [ Factions.alliance, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 203 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 375 },
            ],
         },
      ]
   },
   {
      id: 'weapon_par_s_railgun_01_mk1',
      name: 'S Mass Driver Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 163448, max: 329181, avg: 246314 },
      owners: [ Factions.alliance, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 27 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 55 },
            ],
         },
      ]
   },
   {
      id: 'weapon_par_s_railgun_01_mk2',
      name: 'S Mass Driver Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 860045, max: 1724780, avg: 1292412 },
      owners: [ Factions.alliance, Factions.paranid, Factions.trinity ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 146 },
               { ware: 'energycells', amount: 20 },
               { ware: 'weaponcomponents', amount: 275 },
            ],
         },
      ]
   },
   {
      id: 'weapon_tel_l_destroyer_01_mk1',
      name: 'Phoenix Main Battery',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.large,
      hull: 8000,
      price: { min: 873217, max: 1067265, avg: 970241 },
      owners: [ Factions.alliance, Factions.ministry, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 130 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 160 },
            ],
         },
      ]
   },
   {
      id: 'weapon_tel_m_charge_01_mk1',
      name: 'M Muon Charger Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 17978, max: 39980, avg: 28979 },
      owners: [ Factions.alliance, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 14 },
            ],
         },
      ]
   },
   {
      id: 'weapon_tel_m_charge_01_mk2',
      name: 'M Muon Charger Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 89034, max: 198018, avg: 143526 },
      owners: [ Factions.alliance, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 5 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 70 },
            ],
         },
      ]
   },
   {
      id: 'weapon_tel_s_charge_01_mk1',
      name: 'S Muon Charger Mk1',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 7256, max: 14963, avg: 11109 },
      owners: [ Factions.alliance, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 1 },
               { ware: 'energycells', amount: 5 },
               { ware: 'weaponcomponents', amount: 3 },
            ],
         },
      ]
   },
   {
      id: 'weapon_tel_s_charge_01_mk2',
      name: 'S Muon Charger Mk2',
      description: 'No information available',
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      hull: 500,
      price: { min: 35426, max: 72932, avg: 54179 },
      owners: [ Factions.alliance, Factions.teladi ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'advancedelectronics', amount: 15 },
               { ware: 'energycells', amount: 10 },
               { ware: 'weaponcomponents', amount: 5 },
            ],
         },
      ]
   },
   {
      id: 'weapon_xen_m_laser_01_mk1',
      name: 'M Pulse Laser Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      hull: 1001,
      price: { min: 24019, max: 29357, avg: 26688 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 30 },
               { ware: 'silicon', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'weapon_xen_m_mining_01_mk1',
      name: 'M Mining Drill Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.medium,
      price: { min: 24019, max: 29357, avg: 26688 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 10,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 10 },
               { ware: 'ore', amount: 30 },
               { ware: 'silicon', amount: 30 },
            ],
         },
      ]
   },
   {
      id: 'weapon_xen_s_laser_01_mk1',
      name: 'S Pulse Laser Mk1',
      description: 'No information available',
      race: Races.xenon,
      type: EquipmentType.weapons,
      equipmentClass: EquipmentClass.weapon,
      size: Size.small,
      price: { min: 778, max: 950, avg: 864 },
      owners: [ Factions.xenon ],
      production: [
         {
            time: 4,
            amount: 1,
            method: 'default',
            name: 'Universal',
            wares: [
               { ware: 'energycells', amount: 5 },
               { ware: 'ore', amount: 2 },
            ],
         },
      ]
   },
];
