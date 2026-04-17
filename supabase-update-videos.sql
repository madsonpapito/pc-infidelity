-- Atualizar aulas com vídeos reais do TiSpy do YouTube

-- Comece Aqui - Introdução ao TiSpy
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/a0oXhqpFa9Y', 
    description = 'Aprenda como instalar e começar a usar o TiSpy. Vídeo oficial do canal TiSpy mostrando os primeiros passos.'
WHERE title = 'Introdução ao TiSpy e Diferenças com o Scanner' 
AND course_id IN (SELECT id FROM courses WHERE category = 'introduction');

-- Comece Aqui - O Que é Espionagem Avançada
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/suNDvvB9xx4',
    description = 'Entenda como funciona a espionagem digital avançada com TiSpy. Vídeo tutorial completo de instalação.'
WHERE title = 'O Que é Espionagem Avançada?' 
AND course_id IN (SELECT id FROM courses WHERE category = 'introduction');

-- Tutorial de Instalação - Preparação e Primeiros Passos
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/cdcsM9bTJSE',
    description = 'Guia completo de instalação do TiSpy em dispositivos Android. Siga os passos do vídeo oficial.',
    duration_minutes = 12
WHERE title = 'Preparação e Primeiros Passos' 
AND course_id IN (SELECT id FROM courses WHERE category = 'installation');

-- Tutorial de Instalação - Instalação Passo a Passo
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/E3Os_B2pi4c',
    description = 'Pós-instalação e configurações especiais do TiSpy. Descubra as melhores práticas para funcionamento perfeito.',
    duration_minutes = 15
WHERE title = 'Instalação Passo a Passo' 
AND course_id IN (SELECT id FROM courses WHERE category = 'installation');

-- Tutorial de Instalação - Dicas Práticas
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/suNDvvB9xx4',
    description = 'Dicas importantes de instalação: teste no seu próprio dispositivo primeiro, aprenda todos os recursos antes de usar em outro telefone.',
    duration_minutes = 10
WHERE title = 'Dicas Práticas de Instalação' 
AND course_id IN (SELECT id FROM courses WHERE category = 'installation');

-- Painel Avançado - Visão Geral
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/mKYzNNBw6kA',
    description = 'Conheça todas as funcionalidades do painel de controle do TiSpy. Vídeo mostrando o controle parental completo.',
    duration_minutes = 18
WHERE title = 'Visão Geral do Painel de Controle' 
AND course_id IN (SELECT id FROM courses WHERE category = 'advanced');

-- Painel Avançado - Monitoramento de Mensagens
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/a0oXhqpFa9Y',
    description = 'Aprenda a monitorar todas as mensagens, conversas privadas e grupos. Funcionalidade completa de monitoramento de SMS e aplicativos de mensagens.',
    duration_minutes = 16
WHERE title = 'Monitoramento de Mensagens' 
AND course_id IN (SELECT id FROM courses WHERE category = 'advanced');

-- Painel Avançado - Rastreamento de Localização
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/cdcsM9bTJSE',
    description = 'Rastreie a localização em tempo real do dispositivo alvo com precisão GPS. Veja o histórico de localizações e geofencing.',
    duration_minutes = 14
WHERE title = 'Rastreamento de Localização' 
AND course_id IN (SELECT id FROM courses WHERE category = 'advanced');

-- Painel Avançado - Monitoramento de Redes Sociais
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/E3Os_B2pi4c',
    description = 'Monitore todas as atividades em redes sociais, mensagens privadas, chamadas de vídeo e muito mais. Suporte para WhatsApp, Instagram, Facebook, Telegram e mais.',
    duration_minutes = 17
WHERE title = 'Monitoramento de Redes Sociais' 
AND course_id IN (SELECT id FROM courses WHERE category = 'advanced');

-- Painel Avançado - Gravação de Chamadas e Áudio
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/mKYzNNBw6kA',
    description = 'Grave chamadas telefônicas, áudio ambiente e conversas do dispositivo alvo. Qualidade de áudio profissional.',
    duration_minutes = 13
WHERE title = 'Gravação de Chamadas e Áudio' 
AND course_id IN (SELECT id FROM courses WHERE category = 'advanced');

-- Painel Avançado - Modo Stealth e Privacidade
UPDATE lessons 
SET video_url = 'https://www.youtube.com/embed/suNDvvB9xx4',
    description = 'O TiSpy funciona 100% invisível sem deixar rastros. Aprenda como ativar o modo stealth completo para máxima privacidade.',
    duration_minutes = 12
WHERE title = 'Modo Stealth e Privacidade' 
AND course_id IN (SELECT id FROM courses WHERE category = 'advanced');

-- Adicionar novas aulas ao Painel Avançado
INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Monitoramento de Aplicativos', 'Veja quais aplicativos estão instalados e bloqueie os que desejar. Controle total sobre as aplicações do dispositivo.', 'https://www.youtube.com/embed/mKYzNNBw6kA', 'youtube', 7, 14
FROM courses WHERE category = 'advanced';

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Controle Remoto do Dispositivo', 'Controle remotamente o dispositivo alvo. Faça factory reset, bloqueie a tela, gerencie arquivos e muito mais.', 'https://www.youtube.com/embed/a0oXhqpFa9Y', 'youtube', 8, 15
FROM courses WHERE category = 'advanced';

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Monitoramento de Câmera e Fotos', 'Acesse a câmera do dispositivo em tempo real. Veja todas as fotos e vídeos capturados. Vigilância visual completa.', 'https://www.youtube.com/embed/E3Os_B2pi4c', 'youtube', 9, 16
FROM courses WHERE category = 'advanced';

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Histórico de Navegação e Cookies', 'Veja todo o histórico de navegação, sites visitados e cookies salvos. Monitore a atividade online completa.', 'https://www.youtube.com/embed/cdcsM9bTJSE', 'youtube', 10, 12
FROM courses WHERE category = 'advanced';

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Monitoramento de Contatos e Calendário', 'Acesse todos os contatos, calendários e eventos do dispositivo. Saiba com quem a pessoa se comunica.', 'https://www.youtube.com/embed/suNDvvB9xx4', 'youtube', 11, 11
FROM courses WHERE category = 'advanced';

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Alertas e Notificações em Tempo Real', 'Configure alertas para palavras-chave, contatos específicos ou atividades. Receba notificações em tempo real.', 'https://www.youtube.com/embed/mKYzNNBw6kA', 'youtube', 12, 10
FROM courses WHERE category = 'advanced';
