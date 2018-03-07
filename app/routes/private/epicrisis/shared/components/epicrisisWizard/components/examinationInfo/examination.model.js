import Ego from 'utils/validation'
import fp from 'lodash/fp'
import t from 'i18n'

export default ({ initialValues = {} }) => ({
	examinagionOphthalmologistField: {
		initialValue: fp.get('examination.ophthalmologist', initialValues),
		scheme: Ego.string()
			.label(t('labels.examination.ophthalmologist')),
	},

	examinationENTDoctorField: {
		initialValue: fp.get('examination.entDoctor', initialValues),
		scheme: Ego.string()
			.label(t('labels.examination.entDoctor')),
	},

	examinationUrologicalField: {
		initialValue: fp.get('examination.urological', initialValues),
		scheme: Ego.string()
			.label(t('labels.examination.urological')),
	},

	examinationPhysiotherapistField: {
		initialValue: fp.get('examination.physiotherapist', initialValues),
		scheme: Ego.string()
			.label(t('labels.examination.physiotherapist')),
	},

	examinationPsychiatricField: {
		initialValue: fp.get('examination.psychiatric', initialValues),
		scheme: Ego.string()
			.label(t('labels.examination.psychiatric')),
	},

	examinationSurgeonField: {
		initialValue: fp.get('examination.surgeon', initialValues),
		scheme: Ego.string()
			.label(t('labels.examination.surgeon')),
	},

	examinationOncologistField: {
		initialValue: fp.get('examination.oncologist', initialValues),
		scheme: Ego.string()
			.label(t('labels.examination.oncologist')),
	},

	examinationMidwifeField: {
		initialValue: fp.get('examination.midwife', initialValues),
		scheme: Ego.string()
			.label(t('labels.examination.midwife')),
	},

	examinationOtherField: {
		initialValue: fp.get('examination.other', initialValues),
		scheme: Ego.string()
			.label(t('labels.other')),
	},
})


export const mapping = [
	['examinagionOphthalmologistField', 'examination.ophthalmologist'],
	['examinationENTDoctorField', 'examination.entDoctor'],
	['examinationUrologicalField', 'examination.urological'],
	['examinationPhysiotherapistField', 'examination.physiotherapist'],
	['examinationPsychiatricField', 'examination.psychiatric'],
	['examinationSurgeonField', 'examination.surgeon'],
	['examinationOncologistField', 'examination.oncologist'],
	['examinationMidwifeField', 'examination.midwife'],
	['examinationOtherField', 'examination.other'],
]
