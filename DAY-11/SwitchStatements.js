const grade='E';
switch (grade) {
    case 'A':
        console.log("A->Excellent");
        break;
    case 'B':
        console.log("B->Very Good");
        break;
    case 'C':
        console.log("C->Needs Improvement");
        break;
    case 'D':
        case'E':
        console.log("D->Not Good");
        break;
    default:
        console.log("Fail");
}