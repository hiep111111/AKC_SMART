
import mongoose from 'mongoose';
import DATATYPE from '../../core/constants/dataTypeConstants/datatypeConstants';
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Staff',
  },
  date: {
    type: DATATYPE.DATE,
    required: true
  },
  checkIn: {
    type: DATATYPE.DATE,
    required: true
  },
  checkOut: {
    type: DATATYPE.DATE,
    required: true
  },
  workingHours: {
    type: DATATYPE.NUMBER,
    required: true
  },
  status: {
    type: DATATYPE.STRING,
    enum: ['On Time', 'Late', 'Absent'],
    default: 'On Time'
  },
  approvalStatus: {
    type: DATATYPE.STRING,
    enum: ['draft', 'approved'],
    default: 'draft'
  },
  notes: {
    type: DATATYPE.STRING,
  }
}, {
  timestamps: true
});

const dailyTimeSheetModel = mongoose.model('dailyTimeSheet', attendanceSchema);

export default dailyTimeSheetModel;
