const { GraphQLScalarType } = require('graphql')
const gjv = require("geojson-validation");
const { ensureObject, parseObject } = require('./jsonutil.js')

exports.Feature = new GraphQLScalarType({
    name: 'Feature',
    description:
        'GeoJson Feature',
    serialize: (value) => {
        return ensureObject(this.Feature.name, value)
    },
    parseValue: (value) => {
        return ensureObject(this.Feature.name, value)
    },
    parseLiteral: (ast, variables) => {
        const parsed = parseObject(this.Feature.name, ast, variables);
        const err = gjv.isFeature(parsed, true)
        if (err == "") {
            return parsed;
        } else {
            throw new TypeError(err)
        }
    },
});

exports.FeatureCollection = new GraphQLScalarType({
    name: 'FeatureCollection',
    description:
        'GeoJson FeatureCollection',
    serialize: (value) => {
        return ensureObject(this.FeatureCollection.name, value)
    },
    parseValue: (value) => {
        return ensureObject(this.FeatureCollection.name, value)
    },
    parseLiteral: (ast, variables) => {
        const parsed = parseObject(this.FeatureCollection.name, ast, variables);
        const err = gjv.isFeatureCollection(parsed, true)
        if (err == "") {
            return parsed;
        } else {
            throw new TypeError(err)
        }
    },
});
