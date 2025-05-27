import React, { useState } from 'react';
import logo from './assets/logo.svg';

interface InteractiveMockupProps {
  className?: string;
}

const InteractiveMockup: React.FC<InteractiveMockupProps> = ({ className }) => {
  const [activeButton, setActiveButton] = useState<number>(2);
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<{type: string, content: string}[]>([
    {
      type: 'prompt',
      content: 'We just uploaded our latest 990 form. Can you analyze our financial health and suggest ways to improve donor engagement?'
    },
    {
      type: 'response',
      content: 'I have analyzed your 990 form data and found several insights. Your program service ratio is 78.5%, which is good but could be improved. Your donor retention rate is 62%, which is above average. Based on your mission and current programs, I recommend focusing on digital engagement strategies and highlighting your impact metrics more prominently in communications.'
    }
  ]);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { type: 'prompt', content: inputValue }]);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'response', 
        content: `Based on your organization's data, I can provide some insights. Your program effectiveness metrics show strong outcomes, but there's an opportunity to improve your cost per beneficiary ratio. Your 990 data indicates potential for increased grant funding in the education sector. Would you like me to generate a detailed report on potential funding sources or suggestions for program optimization?` 
      }]);
    }, 1000);
    
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={`app-mockup ${className || ''}`}>
      {/* Sidebar */}
      <div className="app-sidebar">
        <div className="sidebar-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M4 12H20" stroke="#888" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="sidebar-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#888" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="sidebar-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="#888" strokeWidth="2" />
          </svg>
        </div>
        <div className="sidebar-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" stroke="#888" strokeWidth="2" />
            <path d="M12 8V16M8 12H16" stroke="#888" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="sidebar-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.6494 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      
      {/* Main content */}
      <div className="app-content">
        {/* <div className="app-header">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={logo} alt="Givin Logo" className="app-logo" style={{ opacity: 0.9 }} />
          </div>
        </div> */}
        
        <div className="chat-container">
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              {message.type === 'prompt' && (
                <div className="chat-prompt">
                  <p>{message.content}</p>
                </div>
              )}
              
              {message.type === 'response' && index === 1 && (
                <>
                  <div className="chat-image-result">
                    <div style={{ 
                      borderRadius: '10px', 
                      padding: '15px',
                      background: 'var(--secondary-color)',
                      height: '250px',
                      width: '100%',
                      overflow: 'auto'
                    }}>
                      <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--text-color)' }}>Your Organization - Financial Insights</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                          <span style={{ fontWeight: 500 }}>Program Service Ratio:</span>
                          <span style={{ color: 'var(--primary-color)', fontWeight: 600 }}>78.5%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                          <span style={{ fontWeight: 500 }}>Donor Retention Rate:</span>
                          <span style={{ color: 'var(--primary-color)', fontWeight: 600 }}>62%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                          <span style={{ fontWeight: 500 }}>Cost Per Beneficiary:</span>
                          <span style={{ fontWeight: 600 }}>$245</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                          <span style={{ fontWeight: 500 }}>Grant Funding Potential:</span>
                          <span style={{ color: 'var(--primary-color)', fontWeight: 600 }}>High</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                          <span style={{ fontWeight: 500 }}>Digital Engagement Score:</span>
                          <span style={{ fontWeight: 600 }}>68/100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="chat-actions">
                    {[0, 1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className={`action-button ${activeButton === i ? 'active' : ''}`}
                        onClick={() => handleButtonClick(i)}
                      >
                        {i === 0 && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        )}
                        {i === 1 && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        )}
                        {i === 2 && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {i === 3 && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="chat-response">
                    <p>{message.content}</p>
                  </div>
                </>
              )}
              
              {message.type === 'response' && index !== 1 && (
                <div className="chat-response">
                  <p>{message.content}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="chat-input">
          <div className="input-icons">
            <button className="input-icon-button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <input 
            type="text" 
            placeholder="Ask about your nonprofit data..." 
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className="send-button" onClick={handleSendMessage}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMockup;
