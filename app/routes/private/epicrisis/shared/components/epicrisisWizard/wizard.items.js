import PatientInfo from './components/patientInto'
import DiagnosisInfo from './components/diagnosisInfo'
import ECGEchoInfo from './components/ecgEchoInfo'
import USDScopiaInfo from './components/usdScopiaInfo'
import XRayInfo from './components/xrayInfo'
import CTInfo from './components/ctInfo'
import ExaminationInfo from './components/examinationInfo'
import MedicineInfo from './components/medicineInfo'
import TemplatesFinder from './components/templatesFinder'

export default [
	PatientInfo,
	DiagnosisInfo,
	ECGEchoInfo,
	USDScopiaInfo,
	XRayInfo,
	CTInfo,
	ExaminationInfo,
	...MedicineInfo, // two steps
	TemplatesFinder,
]
