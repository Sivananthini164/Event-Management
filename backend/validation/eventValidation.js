const Joi = require('joi');
const { create } = require('../models/Event');
const eventSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().allow('', null),
  date: Joi.date().required(),
  venue: Joi.string().allow('', null),
  capacity: Joi.number().integer().min(1).optional(),
  status: Joi.string().valid('draft', 'published', 'cancelled').optional(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional()
});
module.exports = eventSchema;