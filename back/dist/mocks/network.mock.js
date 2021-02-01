"use strict";
var network_interface_1 = require("../lib/network.interface");
var mocked_rail = [
    {
        start: network_interface_1.NetworkStation.vintimille,
        end: network_interface_1.NetworkStation.grasse,
        distance: 57,
        duration: 120,
        stations: [network_interface_1.NetworkStation.vintimille, network_interface_1.NetworkStation.menton, network_interface_1.NetworkStation.monaco, network_interface_1.NetworkStation.nice, network_interface_1.NetworkStation.antibes, network_interface_1.NetworkStation.grasse]
    },
    {
        start: network_interface_1.NetworkStation.grasse,
        end: network_interface_1.NetworkStation.vintimille,
        distance: 57,
        duration: 120,
        stations: [network_interface_1.NetworkStation.grasse, network_interface_1.NetworkStation.antibes, network_interface_1.NetworkStation.nice, network_interface_1.NetworkStation.monaco, network_interface_1.NetworkStation.menton, network_interface_1.NetworkStation.vintimille]
    },
    {
        start: network_interface_1.NetworkStation.nice,
        end: network_interface_1.NetworkStation.macon,
        distance: 75,
        duration: 150,
        stations: [network_interface_1.NetworkStation.nice, network_interface_1.NetworkStation.aix_en_provence, network_interface_1.NetworkStation.marseille, network_interface_1.NetworkStation.grenoble, network_interface_1.NetworkStation.lyon, network_interface_1.NetworkStation.macon]
    },
    {
        start: network_interface_1.NetworkStation.macon,
        end: network_interface_1.NetworkStation.nice,
        distance: 75,
        duration: 150,
        stations: [network_interface_1.NetworkStation.macon, network_interface_1.NetworkStation.lyon, network_interface_1.NetworkStation.grenoble, network_interface_1.NetworkStation.marseille, network_interface_1.NetworkStation.aix_en_provence, network_interface_1.NetworkStation.nice]
    },
    {
        start: network_interface_1.NetworkStation.lyon,
        end: network_interface_1.NetworkStation.lille,
        distance: 200,
        duration: 180,
        stations: [network_interface_1.NetworkStation.lyon, network_interface_1.NetworkStation.vichy, network_interface_1.NetworkStation.bourge, network_interface_1.NetworkStation.orlean, network_interface_1.NetworkStation.paris, network_interface_1.NetworkStation.lille]
    },
    {
        start: network_interface_1.NetworkStation.lille,
        end: network_interface_1.NetworkStation.lyon,
        distance: 200,
        duration: 180,
        stations: [network_interface_1.NetworkStation.lille, network_interface_1.NetworkStation.paris, network_interface_1.NetworkStation.orlean, network_interface_1.NetworkStation.bourge, network_interface_1.NetworkStation.vichy, network_interface_1.NetworkStation.lyon]
    },
    {
        start: network_interface_1.NetworkStation.grenoble,
        end: network_interface_1.NetworkStation.nante,
        distance: 140,
        duration: 220,
        stations: [network_interface_1.NetworkStation.grenoble, network_interface_1.NetworkStation.lyon, network_interface_1.NetworkStation.vichy, network_interface_1.NetworkStation.limoge, network_interface_1.NetworkStation.poitiers, network_interface_1.NetworkStation.nante]
    },
    {
        start: network_interface_1.NetworkStation.nante,
        end: network_interface_1.NetworkStation.grenoble,
        distance: 140,
        duration: 220,
        stations: [network_interface_1.NetworkStation.nante, network_interface_1.NetworkStation.poitiers, network_interface_1.NetworkStation.limoge, network_interface_1.NetworkStation.vichy, network_interface_1.NetworkStation.lyon, network_interface_1.NetworkStation.grenoble]
    },
    {
        start: network_interface_1.NetworkStation.aix_en_provence,
        end: network_interface_1.NetworkStation.paris,
        distance: 140,
        duration: 220,
        stations: [network_interface_1.NetworkStation.aix_en_provence, network_interface_1.NetworkStation.valence, network_interface_1.NetworkStation.bourge, network_interface_1.NetworkStation.lyon, network_interface_1.NetworkStation.paris]
    },
    {
        start: network_interface_1.NetworkStation.paris,
        end: network_interface_1.NetworkStation.aix_en_provence,
        distance: 140,
        duration: 220,
        stations: [network_interface_1.NetworkStation.paris, network_interface_1.NetworkStation.lyon, network_interface_1.NetworkStation.bourge, network_interface_1.NetworkStation.valence, network_interface_1.NetworkStation.aix_en_provence]
    },
];
module.exports = mocked_rail;
