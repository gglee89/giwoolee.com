// Images
import blur from 'assets/img/blur-small.jpg'
// iSensorLabs
import realspiel_1 from 'assets/img/realspiel/realspiel-chatapp-min.jpg'
import realspiel_2 from 'assets/img/realspiel/realspiel-gamecreation-min.jpg'
import realspiel_3 from 'assets/img/realspiel/realspiel-groundtruth-min.jpg'
import realspiel_4 from 'assets/img/realspiel/realspiel-topicselection-min.jpg'

// Rocky Robots
import rockyApp_1 from 'assets/img/rocky/home-min.jpeg'
import rockyApp_2 from 'assets/img/rocky/habits-select-min.jpeg'
import rockyApp_3 from 'assets/img/rocky/dashboard-min.jpeg'
import rockyApp_4 from 'assets/img/rocky/category-select-min.jpeg'

// Avocado
import avocado_1 from 'assets/img/avocado/proof-main-screen.png'
import avocado_2 from 'assets/img/avocado/proof-institutions-screen.png'
import avocado_3 from 'assets/img/avocado/proof-main-screen-2.jpg'
import avocado_4 from 'assets/img/avocado/proof-multiple-charts.png'

// HDBCSI
import hdbcsi_1 from 'assets/img/hdbcsi/sap-labs-hdbcsi.jpeg'

// Makestar
import makestar_1 from 'assets/img/makestar/makestar-main.png'
import makestar_2 from 'assets/img/makestar/makestar-project.jpg'
import makestar_3 from 'assets/img/makestar/makestar-project-2.jpg'

// Marshall Goldsmith
import marshallGoldsmith_1 from 'assets/img/sccoaching/marshall-goldsmith-min.jpeg'
import marshallGoldsmith_2 from 'assets/img/sccoaching/marshall-goldsmith-2-min.jpeg'
import { ImageUrl } from 'modules/projects/types'

const screenshots: Record<string, ImageUrl[]> = {
    'Real Spiel': [
        {
            original: realspiel_1,
            blur,
        },
        {
            original: realspiel_2,
            blur,
        },
        {
            original: realspiel_3,
            blur,
        },
        {
            original: realspiel_4,
            blur,
        },
    ],
    'Rocky App': [
        {
            original: rockyApp_1,
            blur,
        },
        {
            original: rockyApp_2,
            blur,
        },
        {
            original: rockyApp_3,
            blur,
        },
        {
            original: rockyApp_4,
            blur,
        },
    ],
    Avocado: [
        {
            original: avocado_1,
            blur,
        },
        {
            original: avocado_2,
            blur,
        },
        {
            original: avocado_3,
            blur,
        },
        {
            original: avocado_4,
            blur,
        },
    ],
    HDBCSI: [
        {
            original: hdbcsi_1,
            blur,
        },
    ],
    'Makestar K-POP': [
        {
            original: makestar_1,
            blur,
        },
        {
            original: makestar_2,
            blur,
        },
        {
            original: makestar_3,
            blur,
        },
    ],
    'Marshall Goldsmith': [
        {
            original: marshallGoldsmith_1,
            blur,
        },
        {
            original: marshallGoldsmith_2,
            blur,
        },
    ],
}

export default screenshots
