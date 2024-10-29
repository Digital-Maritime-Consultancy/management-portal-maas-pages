/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.2
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Coordinate } from './coordinate';
import { Envelope } from './envelope';
import { GeometryFactory } from './geometryFactory';
import { Point } from './point';
import { PrecisionModel } from './precisionModel';

export interface Geometry { 
    envelope?: Geometry;
    factory?: GeometryFactory;
    userData?: any;
    length?: number;
    empty?: boolean;
    valid?: boolean;
    simple?: boolean;
    boundaryDimension?: number;
    precisionModel?: PrecisionModel;
    srid?: number;
    geometryType?: string;
    dimension?: number;
    coordinate?: Coordinate;
    coordinates?: Array<Coordinate>;
    numPoints?: number;
    rectangle?: boolean;
    area?: number;
    centroid?: Point;
    interiorPoint?: Point;
    boundary?: Geometry;
    envelopeInternal?: Envelope;
    numGeometries?: number;
}