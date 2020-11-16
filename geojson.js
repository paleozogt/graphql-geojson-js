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
        value = ensureObject(this.Feature.name, value);
        const err = gjv.isFeature(parsed, true)
        if (err == "") {
            return value;
        } else {
            throw new TypeError(err)
        }
    },
    parseLiteral: (ast, variables) => {
        const value = parseObject(this.Feature.name, ast, variables);
        const err = gjv.isFeature(value, true)
        if (err == "") {
            return value;
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
        value = ensureObject(this.FeatureCollection.name, value);
        const err = gjv.isFeatureCollection(value, true)
        if (err == "") {
            return value;
        } else {
            throw new TypeError(err)
        }
    },
    parseLiteral: (ast, variables) => {
        const value = parseObject(this.FeatureCollection.name, ast, variables);
        const err = gjv.isFeatureCollection(value, true)
        if (err == "") {
            return value;
        } else {
            throw new TypeError(err)
        }
    },
});
