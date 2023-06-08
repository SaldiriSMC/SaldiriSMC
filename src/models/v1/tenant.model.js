const mongoose = require('mongoose');
const { randomUUID } = require('crypto');
const tenantSchema = mongoose.Schema(
  {
    key: {
      type: String,
      default: () => randomUUID(),
    },
    tanantName: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
      unique: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Tenant = mongoose.model('Tenant', tenantSchema);
module.exports = Tenant;
