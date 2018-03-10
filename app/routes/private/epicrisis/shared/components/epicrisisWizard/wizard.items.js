import PatientInfo from './components/patientInto'
import DiagnosisInfo from './components/diagnosisInfo'
import ECGEchoInfo from './components/ecgEchoInfo'
import USDScopiaInfo from './components/usdScopiaInfo'
import XRayInfo from './components/xrayInfo'
import CTInfo from './components/ctInfo'
import ExaminationInfo from './components/examinationInfo'
import TreatmentInfo from './components/treatmentInfo'
import RecommendedInfo from './components/recommendedInfo'
import MedicineInfo from './components/medicineInfo'
import SummaryInfo from './components/summaryInfo'
import TemplatesFinder from './components/templatesFinder'

export default [
	PatientInfo,
	DiagnosisInfo,
	ECGEchoInfo,
	USDScopiaInfo,
	XRayInfo,
	CTInfo,
	ExaminationInfo,
	TreatmentInfo,
	RecommendedInfo,
	...MedicineInfo, // two steps
	SummaryInfo,
	TemplatesFinder,
]
