// @ts-nocheck
import Joi from 'joi';
import { TicketUncheckedCreateNestedManyWithoutDriverInputSchemaObject } from './TicketUncheckedCreateNestedManyWithoutDriverInput.schema'

export const UserUncheckedCreateWithoutTicketsInputSchemaObject = {
    id: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  matricNo: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  createAt: Joi.date(),
  verify_tickets: Joi.object().keys(TicketUncheckedCreateNestedManyWithoutDriverInputSchemaObject)
}