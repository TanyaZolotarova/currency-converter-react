import React from 'react';
import { TitleTextComponent } from '../../Ui/TitleTextComponent';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useQuestionStore } from '../../store/questionStore';
import { questions } from '../../data/questions';
import { IQuestion } from '../../Interfaces/IQuestion';

export function AskQuestionComponent(): JSX.Element {
  const { searchQuery, expanded, setSearchQuery, setExpanded } =
    useQuestionStore();

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.toLowerCase());
  }

  const handleAccordionChange = React.useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    [setExpanded],
  );

  const filteredQuestions: IQuestion[] = React.useMemo(
    () =>
      questions.filter((q) => q.question.toLowerCase().includes(searchQuery)),
    [questions, searchQuery],
  );

  return (
    <Container
      sx={{
        backgroundColor: '#fff',
        width: '100%',
        minHeight: '30vh',
        py: 4,
        mt: 'auto',
      }}
    >
      <TitleTextComponent
        text={'Задати питання'}
        component={'h1'}
        className={'!font-roboto !font-bold !my-5'}
        sx={{ textAlign: 'center', fontSize: '40px', color: '#2a2a2a' }}
      />
      <TextField
        label="Пошук"
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        aria-label="Поле для пошуку"
        className="!font-roboto !font-basic"
        sx={{ mb: 4 }}
      />
      {filteredQuestions.map((q) => (
        <Accordion
          key={q.id}
          expanded={expanded === `panel${q.id}`}
          onChange={handleAccordionChange(`panel${q.id}`)}
        >
          <AccordionSummary
            className="!font-roboto !font-basic"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{q.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {filteredQuestions.length === 0 && (
        <Typography sx={{ mt: 2, textAlign: 'center', color: 'gray' }}>
          Не знайдено
        </Typography>
      )}
    </Container>
  );
}
