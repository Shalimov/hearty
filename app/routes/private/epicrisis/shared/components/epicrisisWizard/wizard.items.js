import t from 'i18n'

import PatientInfo from './components/patientInto'
import DiagnosisInfo from './components/diagnosisInfo'
import ECGEchoInfo from './components/ecgEchoInfo'
import USDScopiaInfo from './components/usdScopiaInfo'
import XRayInfo from './components/xrayInfo'
import CTInfo from './components/ctInfo'
import ExaminationInfo from './components/examinationInfo'
import AnalysesInfo from './components/analysesInfo'
import TreatmentInfo from './components/treatmentInfo'
import RecommendedInfo from './components/recommendedInfo'
import MedicineInfo from './components/medicineInfo'
import SummaryInfo from './components/summaryInfo'

const [AnalysisSelection, AnalysisEditing] = AnalysesInfo
const [MedicineSelection, MedicineTakingRecommendation] = MedicineInfo

PatientInfo.wizardStepName = t('legends.epicrisisInfo')
DiagnosisInfo.wizardStepName = t('legends.diagnosisInfo')
ECGEchoInfo.wizardStepName = t('legends.ecgEchoInfo')
USDScopiaInfo.wizardStepName = t('legends.usdScopiaInfo')
XRayInfo.wizardStepName = t('legends.xrayInfo')
CTInfo.wizardStepName = t('legends.ctInfo')
ExaminationInfo.wizardStepName = t('legends.examinationInfo')
AnalysisSelection.wizardStepName = t('legends.analysesSelection')
AnalysisEditing.wizardStepName = t('legends.analysesEditing')
TreatmentInfo.wizardStepName = t('legends.treatment')
RecommendedInfo.wizardStepName = t('legends.recommended')
MedicineSelection.wizardStepName = t('legends.medicineSelection')
MedicineTakingRecommendation.wizardStepName = t('legends.medicineTakingRec')
SummaryInfo.wizardStepName = t('legends.summary')

export default [
	PatientInfo,
	DiagnosisInfo,
	ECGEchoInfo,
	USDScopiaInfo,
	XRayInfo,
	CTInfo,
	ExaminationInfo,
	AnalysisSelection,
	AnalysisEditing,
	TreatmentInfo,
	RecommendedInfo,
	MedicineSelection,
	MedicineTakingRecommendation,
	SummaryInfo,
]
